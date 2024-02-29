const { con } = require('../connect/connect');

const createEntrega = (entregaData, callback) => {
    const { inicio, fim, status, idVeiculo, motorista, idRota } = entregaData;
    const query = `INSERT INTO Entregas(inicio, fim, status, idVeiculo, motorista, idRota) VALUES (?, ?, ?, ?, ?, ?)`;

    con.query(query, [inicio, fim, status, idVeiculo, motorista, idRota], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        const novaEntrega = {
            idEntrega: result.insertId,
            inicio,
            fim,
            status,
            idVeiculo,
            motorista,
            idRota
        };

        callback(null, novaEntrega);
    });
};

const getEntregas = (callback) => {
    const query = 'SELECT * FROM Entregas';

    con.query(query, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

const updateEntrega = (id, entregaData, callback) => {
    const { inicio, fim, status, idVeiculo, motorista, idRota } = entregaData;
    const query = `UPDATE Entregas SET inicio=?, fim=?, status=?, idVeiculo=?, motorista=?, idRota=? WHERE idEntrega=?`;

    con.query(query, [inicio, fim, status, idVeiculo, motorista, idRota, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.affectedRows > 0) {
            callback(null, entregaData);
        } else {
            callback('Registro não encontrado', null);
        }
    });
};

const deleteEntrega = (id, callback) => {
    const query = 'DELETE FROM Entregas WHERE idEntrega=?';

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
    createEntrega,
    getEntregas,
    updateEntrega,
    deleteEntrega
};
