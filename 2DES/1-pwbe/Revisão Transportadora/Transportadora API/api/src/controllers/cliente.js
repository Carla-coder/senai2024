const con = require('../connection/mysql');

// CRUD - READ

const getClientes = (req, res) => {
    con.query('SELECT * FROM clientes', (err, result) => {
        if (err) {
            res.status(500).send('Erro ao listar Clientes');
        }
        res.json(result);
    });
}


module.exports = {
    getClientes
}

