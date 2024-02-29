const { con } = require('../connect/connect');

const createFuncionario = (funcionarioData, callback) => {
    const { nome, cargo, salario } = funcionarioData;
    const query = `INSERT INTO Funcionarios(nome, cargo, salario) VALUES (?, ?, ?)`;

    con.query(query, [nome, cargo, salario], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        const novoFuncionario = {
            idFuncionario: result.insertId,
            nome,
            cargo,
            salario
        };

        callback(null, novoFuncionario);
    });
};

const getFuncionarios = (callback) => {
    const query = 'SELECT * FROM Funcionarios';

    con.query(query, (err, result) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, result);
    });
};

const updateFuncionario = (id, funcionarioData, callback) => {
    const { nome, cargo, salario } = funcionarioData;
    const query = `UPDATE Funcionarios SET nome=?, cargo=?, salario=? WHERE idFuncionario=?`;

    con.query(query, [nome, cargo, salario, id], (err, result) => {
        if (err) {
            return callback(err, null);
        }

        if (result.affectedRows > 0) {
            callback(null, funcionarioData);
        } else {
            callback('Registro não encontrado', null);
        }
    });
};

const deleteFuncionario = (id, callback) => {
    const query = 'DELETE FROM Funcionarios WHERE idFuncionario=?';

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
    createFuncionario,
    getFuncionarios,
    updateFuncionario,
    deleteFuncionario
};
