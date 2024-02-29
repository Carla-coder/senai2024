const { con } = require('../connect/connect');

const createRota = (rotaData, callback) => {
    const { origem, destino, distancia_km } = rotaData;
    const query = `INSERT INTO Rotas(origem, destino, distancia_km) VALUES (?, ?, ?)`;

    con.query(query, [origem, destino, distancia_km], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        const novaRota = {
            idRota: result.insertId,
            origem,
            destino,
            distancia_km
        };

        callback(null, novaRota);
    });
};

const getRotas = (callback) => {
    const query = 'SELECT * FROM Rotas';

    con.query(query, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

const updateRota = (id, rotaData, callback) => {
    const { origem, destino, distancia_km } = rotaData;
    const query = `UPDATE Rotas SET origem=?, destino=?, distancia_km=? WHERE idRota=?`;

    con.query(query, [origem, destino, distancia_km, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.affectedRows > 0) {
            callback(null, rotaData);
        } else {
            callback('Registro não encontrado', null);
        }
    });
};

const deleteRota = (id, callback) => {
    const query = 'DELETE FROM Rotas WHERE idRota=?';

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
    createRota,
    getRotas,
    updateRota,
    deleteRota
};
