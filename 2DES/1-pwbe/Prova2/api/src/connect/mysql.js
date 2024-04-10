const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "alugueis"
});

module.exports = con;