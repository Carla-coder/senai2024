const e = require('express');
const con = require('../connect/mysql');

//Login
const login = (req, res) => {
    if (req.body != null && req.body.email != null && req.body.senha != null) {
        const { email, senha } = req.body;
        con.query('SELECT * FROM Usuario WHERE email = ? AND senha = ?', [email, senha], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao fazer login');
            } else {
                if (result.length > 0) {
                    const { id, nome, email } = result[0];
                    res.status(200).json({id, nome, email});
                } else {
                    res.status(404).json('Usuario ou senha inválidos');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

// CRUD - CREATE
const addUsuario = (req, res) => {
    if (req.body != null && req.body.nome != null && req.body.email != null && req.body.senha != null) {
        const { nome, email, senha } = req.body;
        con.query('INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar Usuario');
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
const getUsuarios = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM Usuario WHERE id =' + req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Usuarios');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM Usuario', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar Usuarios');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateUsuario = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.nome != null && req.body.email != null && req.body.senha != null) {
        const { id, nome, email, senha } = req.body;
        con.query('UPDATE Usuario SET nome = ?, email = ?, senha = ? WHERE id = ?', [nome, email, senha, id], (err, result) => {
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

// //CRUD - DELETE
const deleteUsuario = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM Usuario WHERE id = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Usuario não encontrado');
                } else {
                    res.status(200).json('Usuario removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    login,
    addUsuario,
    getUsuarios,
    updateUsuario,
    deleteUsuario
}