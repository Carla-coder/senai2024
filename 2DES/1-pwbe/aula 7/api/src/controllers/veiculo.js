const e = require('express');
const con = require('../connection/mysql');

//CRUD - CREATE - Adicionar Veículo
const addVeiculo = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.modelo != null && req.body.marca != null && req.body.ano != null) {
        const { placa, modelo, marca, ano } = req.body;
        con.query('INSERT INTO veiculo ( placa, modelo, marca, ano ) VALUES (?, ?, ?, ?)', [ placa, modelo, marca, ano ], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar veículo');
            } else {
                req.body.id = result.insertId;
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ - Listar todos os Veículos
const getVeiculos = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM veiculo WHERE idVeiculo ='+req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar veículos');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM veiculo', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar veículos');
            }
            res.json(result);
        });
    }
}

//CRUD - READ - Obter Veículo por placa
const getVeiculo = (req, res) => {
    if (req.params.placa != null) {
        const { placa } = req.params;
        con.query('SELECT * FROM veiculo WHERE placa = ?', [placa], (err, result) => {
            if (err) {
                res.status(500).send('Erro ao obter veículo');
            } else {
                if (result.length > 0) {
                    res.json(result[0]); // Retorna o primeiro (e único) resultado encontrado
                } else {
                    res.status(404).json('Veículo não encontrado');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar a placa do veículo');
    }
}

//CRUD - UPDATE - Atualizar Veículo por Placa
const updateVeiculo = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.placa!= null && req.body.modelo != null && req.body.marca != null && req.body.ano != null) {
        const { id, placa, modelo, marca, ano} = req.body;
        con.query('UPDATE veiculo SET placa = ?, modelo = ?, marca = ?, ano = ? WHERE idVeiculo = ?', [ placa, modelo, marca, ano, id], (err, result) => {
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

//CRUD - DELETE _ remover Veículo por Placa
const deleteVeiculo = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM veiculo WHERE idVeiculo = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Veículo não encontrado');
                } else {
                    res.status(200).json('Veículo removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

module.exports = {
    addVeiculo,
    getVeiculos,
    getVeiculo,
    updateVeiculo,
    deleteVeiculo
}