const { con } = require('../connect/connect');

const createVeiculo = (veiculoData, callback) => {
    const { placa, modelo, capacidade } = veiculoData;
    const query = `INSERT INTO Veiculos(placa, modelo, capacidade) VALUES (?, ?, ?)`;

    con.query(query, [placa, modelo, capacidade], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        const novoVeiculo = {
            idVeiculo: result.insertId,
            placa,
            modelo,
            capacidade
        };

        callback(null, novoVeiculo);
    });
};

const getVeiculos = (callback) => {
    const query = 'SELECT * FROM Veiculos';

    con.query(query, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

const updateVeiculo = (id, veiculoData, callback) => {
    const { placa, modelo, capacidade } = veiculoData;
    const query = `UPDATE Veiculos SET placa=?, modelo=?, capacidade=? WHERE idVeiculo=?`;

    con.query(query, [placa, modelo, capacidade, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.affectedRows > 0) {
            callback(null, veiculoData);
        } else {
            callback('Registro não encontrado', null);
        }
    });
};

const deleteVeiculo = (id, callback) => {
    const query = 'DELETE FROM Veiculos WHERE idVeiculo=?';

    con.query(query, [id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.affectedRows > 0) {
            callback(null, result);
        } else {
            callback('Registro não encontrado', null);
        }
    });
};

module.exports = {
    createVeiculo,
    getVeiculos,
    updateVeiculo,
    deleteVeiculo
};
