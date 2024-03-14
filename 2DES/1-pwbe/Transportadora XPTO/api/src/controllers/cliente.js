const e = require('express');
const con = require('../connection/mysql');

//CRUD - CREATE
const addCliente = (req, res) => {
    if (req.body != null && req.body.nome != null && req.body.endereco != null && req.body.telefone != null && req.body.email != null) {
        const { nome, endereco, telefone, email } = req.body;
        con.query('INSERT INTO cliente (nome, endereco, telefone, email) VALUES (?, ?, ?, ?)', [nome, endereco, telefone, email], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar cliente');
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
const getClientes = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM cliente WHERE idCliente ='+req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar clientes');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM cliente', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar clientes');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateCliente = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.nome != null && req.body.endereco != null && req.body.telefone != null && req.body.email != null) {
        const { id, nome, endereco, telefone, email } = req.body;
        con.query('UPDATE cliente SET nome = ?, endereco = ?, telefone = ?, email = ? WHERE idCliente = ?', [nome, endereco, telefone, email, id], (err, result) => {
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
const deleteCliente = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM cliente WHERE idCliente = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Cliente não encontrado');
                } else {
                    res.status(200).json('Cliente removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addCliente,
    getClientes,
    updateCliente,
    deleteCliente
}