const e = require('express');
const con = require('../connection/mysql');

//CRUD - CREATE
const addFuncionario = (req, res) => {
    if (req.body != null && req.body.nome != null && req.body.cargo != null && req.body.salario) {
        const { nome, telefone, email } = req.body;
        con.query('INSERT INTO funcionario (nome, cargo, salario) VALUES (?, ?, ?, ?)', [nome, cargo, salario], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar funcionario');
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
const getFuncionarios = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM funcionario WHERE idFuncionario ='+req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar funcionarios');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM funcionario', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar funcionarios');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateFuncionario = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.nome != null && req.body.cargo != null && req.body.salario) {
        const { id, nome, cargo, salario } = req.body;
        con.query('UPDATE funcionario SET id = ?, nome = ?, cargo = ?, salario = ? WHERE idFuncionario = ?', [nome, cargo, salario, id], (err, result) => {
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
const deleteFuncionario = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM funcionario WHERE idFuncionario = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Funcionario não encontrado');
                } else {
                    res.status(200).json('Funcionario removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addCliente,
    getFuncionarios,
    updateFuncionario,
    deleteFuncionario
}