const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "aluguel_veiculos"
});

module.exports = con;