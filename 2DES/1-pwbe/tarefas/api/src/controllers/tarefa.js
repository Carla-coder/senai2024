const con = require('../connect/mysql');

//CRUD - CREATE
const addTarefa = (req, res) => {
    if (req.body != null && req.body.descricao != null && req.body.id_usuario != null) {
        const { descricao, id_usuario } = req.body;
        con.query('INSERT INTO Tarefa(descricao,id_usuario) VALUES (?, ?)', [descricao, id_usuario], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else if (req.body != null && req.body.descricao != null) {
        const { descricao } = req.body;
        con.query('INSERT INTO Tarefa(descricao) VALUES (?)', descricao, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ ALL e READ por Id
const getTarefas = (req, res) => {
    if (req.params.id != null) {
        con.query(`SELECT * FROM Tarefa WHERE id = '${req.params.id}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Tarefas');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Tarefa', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Tarefas');
            }
            res.json(result);
        });
    }
}

//CRUD - READ por status
const getTarefaStatus = (req, res) => {
    if (req.params.status != null) {
        con.query(`SELECT * FROM Tarefa WHERE status like '${req.params.status}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Tarefas');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Tarefa', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Tarefas');
            }
            res.json(result);
        });
    }
}

//CRUD - READ por data
const getTarefaData = (req, res) => {
    if (req.params.data != null) {
        con.query(`SELECT * FROM Tarefa WHERE data like '%${req.params.data}%'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Tarefas');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Tarefa', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Tarefas');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateTarefa = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.descricao != null && req.body.data != null && req.body.status != null && req.body.id_usuario != null) {
        const { id, descricao, data, status, id_usuario } = req.body;
        con.query('UPDATE Tarefa SET descricao = ?, data = ?, status = ?, id_usuario = ? WHERE id = ?', [descricao, data, status, id_usuario, id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    } else if (req.body != null && req.body.id != null && req.body.descricao != null) {
        const { id, descricao } = req.body;
        con.query('UPDATE Tarefa SET descricao = ? WHERE id = ?', [descricao, id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    } else if (req.body != null && req.body.id != null && req.body.status != null) {
        const { id, status } = req.body;
        con.query('UPDATE Tarefa SET status = ? WHERE id = ?', [status, id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    } else if (req.body != null && req.body.id != null && req.body.id_usuario != null) {
        const { id, id_usuario } = req.body;
        con.query('UPDATE Tarefa SET id_usuario = ? WHERE id = ?', [id_usuario, id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    } else if (req.body != null && req.body.id != null && req.body.data != null) {
        const { id, data } = req.body;
        con.query('UPDATE Tarefa SET data = ? WHERE id = ?', [data, id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    }
    else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - DELETE
const deleteTarefa = (req, res) => {
    if (req.params.id != null) {
        con.query(`DELETE FROM Tarefa WHERE id = '${req.params.id}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Tarefa não encontrada');
                } else {
                    res.status(200).json('Tarefa deletada com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar a placa do Tarefa');
    }
}

module.exports = {
    addTarefa,
    getTarefas,
    getTarefaStatus,
    getTarefaData,
    updateTarefa,
    deleteTarefa
}