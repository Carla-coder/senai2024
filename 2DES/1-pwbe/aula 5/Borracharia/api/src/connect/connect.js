//Dependências - Frameworks
const mysql = require("mysql"); //usa o protoolo SSL

//Conexão com o SGBD MySQL - conecta com o banco de dados
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'borracharia'
});

module.exports = { con };