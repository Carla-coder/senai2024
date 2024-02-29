const { con } = require('../connect/connect');

const createPedido = (pedidoData, callback) => {
    const { idCliente, idEntrega, dataPedido, valor, idFuncionario, idVeiculo } = pedidoData;
    const query = `INSERT INTO Pedidos(idCliente, idEntrega, dataPedido, valor, idFuncionario, idVeiculo) VALUES (?, ?, ?, ?, ?, ?)`;

    con.query(query, [idCliente, idEntrega, dataPedido, valor, idFuncionario, idVeiculo], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        const novoPedido = {
            idPedido: result.insertId,
            idCliente,
            idEntrega,
            dataPedido,
            valor,
            idFuncionario,
            idVeiculo
        };

        callback(null, novoPedido);
    });
};

const getPedidos = (callback) => {
    const query = 'SELECT * FROM Pedidos';

    con.query(query, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

const updatePedido = (id, pedidoData, callback) => {
    const { idCliente, idEntrega, dataPedido, valor, idFuncionario, idVeiculo } = pedidoData;
    const query = `UPDATE Pedidos SET idCliente=?, idEntrega=?, dataPedido=?, valor=?, idFuncionario=?, idVeiculo=? WHERE idPedido=?`;

    con.query(query, [idCliente, idEntrega, dataPedido, valor, idFuncionario, idVeiculo, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.affectedRows > 0) {
            callback(null, pedidoData);
        } else {
            callback('Registro não encontrado', null);
        }
    });
};

const deletePedido = (id, callback) => {
    const query = 'DELETE FROM Pedidos WHERE idPedido=?';

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
    createPedido,
    getPedidos,
    updatePedido,
    deletePedido
};
