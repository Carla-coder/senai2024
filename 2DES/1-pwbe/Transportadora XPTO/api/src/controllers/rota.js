const e = require('express');
const con = require('../connection/mysql');

//CRUD - CREATE
const addRota = (req, res) => {
    if (req.body != null && req.body.origem != null && req.body.destino != null && req.body.distancia != null) {
        const { origem, destino, distancia } = req.body;
        con.query('INSERT INTO rota (origem, destino, distancia) VALUES (?, ?, ?)', [origem, destino, distancia], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar rota');
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
const getRotas = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM rota WHERE idRota ='+req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar rotas');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM rota', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar rotas');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateRota = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.origem != null && req.body.destino != null && req.body.distancia != null) {
        const { id, origem, destino, distancia } = req.body;
        con.query('UPDATE rota SET origem = ?, destino = ?, distancia = ? WHERE idRota = ?' , [origem, destino, distancia, id], (err, result) => {
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
const deleteRota = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM rota WHERE idRota = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Rota não encontrada');
                } else {
                    res.status(200).json('Rota removida com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addRota,
    getRotas,
    updateRota,
    deleteRota
}