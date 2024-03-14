const e = require('express');
const con = require('../connection/mysql');

// CRUD - CREATE

const addUsuario = (req, res) => {
    if (req.body != null && req.body.nome != null && req.body.email != null && req.body.senha != null) {
        const { nome, email, senha} = req.body;
        con.query('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, result) => {
            if (err) {
                    res.status(500).json({ error: 'Erro ao adicionar usuario'});
            } else {
                req.body.id = result.insertId;
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios'});
    }
};

//CRUD - READ
const getUsuarios = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM usuario WHERE idUsuario ='+req.params.id, (err, result) => {
            if (err) {
                res.status(500).send({ error: 'Erro ao listar usuarios'});
            } else {
                res.json(result);
            }
        });
    } else {
        con.query('SELECT * FROM usuario', (err, result) => {
            if (err) {
                res.status(500).send({ error:'Erro ao listar usuarios'});
            } else {
            res.json(result);
            }
        });
    }
};

const getUsuarioById = (req, res) => {
    if (req.params.id != null) {
        const { id } = req.params;
        con.query('SELECT * FROM usuario WHERE idUsuario = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao buscar usuário por ID' });
            } else {
                if (result.length > 0) {
                    res.json(result[0]);
                } else {
                    res.status(404).json({ error: 'Usuário não encontrado' });
                }
            }
        });
    } else {
        res.status(400).json({ error: 'ID do usuário não fornecido' });
    }
};

//CRUD - UPDATE
const updateUsuario = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.nome != null && req.body.email != null && req.body.senha != null) {
        const { nome, email, senha } = req.body;
        con.query('UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE idUsuario = ?', [nome, email, senha], (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao atualizar usuário'});
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios'});
    }
};

//CRUD - DELETE
const deleteUsuario = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM usuario WHERE idUsuario = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json({ error: 'Erro ao excluír usuário'});
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json({ error: 'Usuário não encontrado'});
                } else {
                    res.status(200).json({ message: 'Usuário removido com sucesso'});
                }
            }
        });
    } else {
        res.status(400).json({ error: 'Favor enviar todos os campos obrigatórios'});
    }
};


module.exports = {
    addUsuario,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario
};