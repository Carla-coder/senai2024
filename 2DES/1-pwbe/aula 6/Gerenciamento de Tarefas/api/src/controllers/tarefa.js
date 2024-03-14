const e = require('express');
const con = require('../connection/mysql');

// CRUD - CREATE

const addTarefa = (req, res) => {
    if (req.body != null && req.body.descricao != null && req.body.data_vencimento != null && req.body.status != null && req.body.idUsuario != null ) {
        const { descricao, data_vencimento, status, idUsuario} = req.body;
        con.query('INSERT INTO tarefa (descricao, data_vencimento, status, idUsuario) VALUES (?, ?, ?, ?)', [descricao, data_vencimento, status, idUsuario], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar tarefa');
            } else {
                req.body.idTarefa = result.insertIdTarefa;
                // req.body.idUsuario = result.insertIdUsuario;
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const getTarefas = (req, res) => {
    if (req.params.idTarefa != null) {
        con.query('SELECT * FROM tarefa WHERE idTarefa ='+req.params.idTarefa, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar tarefas');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM tarefa', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar tarefas');
            }
            res.json(result);
        });
    }
};

const getTarefaById = (req, res) => {
    if (req.params.idTarefa != null) {
        const { idTarefa } = req.params;
        con.query('SELECT * FROM tarefa WHERE idTarefa = ?', [idTarefa], (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao buscar tarefa por ID' });
            } else {
                if (result.length > 0) {
                    res.json(result[0]);
                } else {
                    res.status(404).json({ error: 'Tarefa não encontrada' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'ID da tarefa não fornecido' });
    }
};

//CRUD - UPDATE
const updateTarefa = (req, res) => {
    if (req.body != null && req.body.idTarefa != null && req.body.descricao != null && req.body.data_vencimento != null && req.body.status != null && req.body.idUsuario != null) {
        const { id, descricao, data_vencimento, status, idUsuario } = req.body;
        con.query('UPDATE tarefa SET descricao = ?, data_vencimento = ?, status = ?, idUsuario = ? WHERE idTarefa = ?', [descricao, data_vencimento, status, idUsuario, id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - DELETE
const deleteTarefa = (req, res) => {
    if (req.params.id != null) {
        const { idTarefa } = req.params;
        con.query('DELETE FROM tarefa WHERE idTarefa = ?', [idTarefa], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Tarefa não encontrada');
                } else {
                    res.status(200).json('Tarefa removida com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addTarefa,
    getTarefas,
    getTarefaById,
    updateTarefa,
    deleteTarefa
};