const { con } = require('../connect/connect');

const createCliente = (clienteData, callback) => {
    const { nome, telefone, email, endereco } = clienteData;
    const query = `INSERT INTO Clientes(nome, telefone, email, endereco) VALUES (?, ?, ?, ?)`;

    con.query(query, [nome, telefone, email, endereco], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        const novoCliente = {
            idCliente: result.insertId,
            nome,
            telefone,
            email,
            endereco
        };

        callback(null, novoCliente);
    });
};

const getClientes = (callback) => {
    const query = 'SELECT * FROM Clientes';

    con.query(query, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

const updateCliente = (id, clienteData, callback) => {
    const { nome, telefone, email, endereco } = clienteData;
    const query = `UPDATE Clientes SET nome=?, telefone=?, email=?, endereco=? WHERE idCliente=?`;

    con.query(query, [nome, telefone, email, endereco, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.affectedRows > 0) {
            callback(null, clienteData);
        } else {
            callback('Registro não encontrado', null);
        }
    });
};

const deleteCliente = (id, callback) => {
    const query = 'DELETE FROM Clientes WHERE idCliente=?';

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
    createCliente,
    getClientes,
    updateCliente,
    deleteCliente
};
