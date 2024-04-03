const e = require('express');
const con = require('../connection/mysql');

//CRUD - CREATE - Adicionar Funcionário
const addFuncionario = (req, res) => {
    if (req.body != null && req.body.matricula != null && req.body.nome != null) {
        const { matricula, nome } = req.body;
        con.query('INSERT INTO funcionario (matricula, nome) VALUES (?, ?)', [matricula, nome], (err, result) => {
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

//CRUD - READ - Listar todos os Funcionários
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

//CRUD - READ - Obter Funcionario por ID
const getFuncionarioById = (req, res) => {
    if (req.params.id != null) {
        const { id } = req.params;
        con.query('SELECT * FROM funcionario WHERE idFuncionario = ?', [id], (err, result) => {
            if (err) {
                res.status(500).send('Erro ao obter funcionário');
            } else {
                if (result.length > 0) {
                    res.json(result[0]); // Retorna o primeiro (e único) resultado encontrado
                } else {
                    res.status(404).json('Funcionário não encontrado');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar o ID do funcionário');
    }
}


//CRUD - UPDATE - Atualizar funcionário por ID
const updateFuncionario = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.matricula != null && req.body.nome != null) {
        const { id, matricula, nome} = req.body;
        con.query('UPDATE funcionario SET matricula = ?, nome = ? WHERE idFuncionario = ?', [matricula, nome,id], (err, result) => {
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

//CRUD - DELETE - Remover Funcionáriompor ID
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
    addFuncionario,
    getFuncionarios,
    getFuncionarioById,
    updateFuncionario,
    deleteFuncionario
}