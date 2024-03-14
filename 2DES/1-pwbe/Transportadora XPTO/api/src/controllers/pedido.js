const e = require('express');
const con = require('../connection/mysql');

//CRUD - CREATE
const addPedido = (req, res) => {
    if (req.body != null && req.body.idPedido != null && req.body.idEntrega != null && req.body.dataPedido != null && req.body.valor != null) {
        const { idCliente, idEntrega, dataPedido, valor } = req.body;
        con.query('INSERT INTO pedido (idCliente, idEntrega, dataPedido, valor) VALUES (?, ?, ?, ?)', [idCliente, idEntrega, dataPedido, valor], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar pedido');
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
const getPedidos = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM pedido WHERE idPedido ='+req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar pedidos');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM pedido', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar pedidos');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updatePedido = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.idCliente != null && req.body.idEntrega != null && req.body.dataPedido != null && req.body.valor != null) {
        const { id,idCliente, idEntrega, dataPedido, valor } = req.body;
        con.query('UPDATE pedido SET idCliente = ?, idEntrega = ?, dataPedido = ?, valor = ? WHERE idPedido = ?', [idCliente, idEntrega, dataPedido, id], (err, result) => {
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
const deletePedido = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM pedido WHERE idPedido = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Pedido não encontrado');
                } else {
                    res.status(200).json('Pedido removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addPedido,
    getPedidos,
    updatePedido,
    deletePedido
}