const e = require('express');
const con = require('../connection/mysql');

// CRUD - CREATE

const addTarefa = (req, res) => {
    if (req.body != null && req.body.descricao != null && req.body.data_vencimento != null && req.body.status != null) {
        const { descricao, data_vencimento, status} = req.body;
        con.query('INSERT INTO tarefa (descricao, data_vencimento, status) VALUES (?, ?, ?)', [descricao, data_vencimento, status], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar tarefa');
            } else {
                req.body.id = result.insertId;
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const getTarefas = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM tarefa WHERE idTarefa ='+req.params.id, (err, result) => {
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
    if (req.params.id != null) {
        const { id } = req.params;
        con.query('SELECT * FROM tarefa WHERE idTarefa = ?', [id], (err, result) => {
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
    if (req.body != null && req.body.id != null && req.body.descricao != null && req.body.data_vencimento != null && req.body.status != null) {
        const { descricao, data_vencimento, status } = req.body;
        con.query('UPDATE tarefa SET descricao = ?, datadevencimento = ?, status = ? WHERE idTarefa = ?', [descricao, data_vencimento, status], (err, result) => {
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
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM tarefa WHERE idTarefa = ?', [id], (err, result) => {
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