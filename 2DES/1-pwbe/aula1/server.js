// Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// Conexão
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lojiinha'
});

// criar uma função no back usando este modelo
const teste = (req, res) => {
    //let nome = req.query.nome;
    res.send("Back-end respondendo "); // retorna
} 

// Crud - Read
const read = (req, res) => {
    con,query("SELECT * FROM Clientes",(err, res) => {
        if(err)
            req.json(err);
        else
            res,json(result);
    });
}

   // res.jason('Oi!');


// Configurações de saída - Front-end
const app = express();
app.use(express.jason());
app.use(cors());
app.get("/", teste);
app.get("/clientes",read);


// Teste e porta no console
//app.get("/", teste);
app.listen(3000,()=>{
    console.log("Back-end respondendo na porta 3000"); // mensagem
});


