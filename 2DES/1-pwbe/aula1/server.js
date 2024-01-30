// Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

<<<<<<< HEAD
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

=======
// Conexão com SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lojinha'
});

// Rota de teste
const teste = (req, res) => {    // criar uma função no back usando este modelo
    //let nome = req.query.nome;
    res.send("Back-end respondendo "); // retorna : resultado
} 

// CRUD - create
const create = (req, res) => {
    let cpf = req.query.cpf;
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let nascimento = req.query.nascimento;
    let query = `INSERT INTO clientes(cpf, nome, sobrenome, nascimento) VALUE`;
    query += `('${cpf}', '${nome}', '${sobrenome}', '${nascimento}');`;
    con.query(query,(err, result) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

// Crud - Read
const read = (req, res) => {
    con.query("SELECT * FROM Clientes",(err, res) => {
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

// res.jason('Oi!');
>>>>>>> 72ba9b419a820ccf0796d5a48d28d5057bb14fc2

// Configurações de saída - Front-end
const app = express();
app.use(express.jason());
app.use(cors());
<<<<<<< HEAD
app.get("/", teste);
app.get("/clientes",read);


// Teste e porta no console
//app.get("/", teste);
app.listen(3000,()=>{
=======

// Rotas de saída - Front-end
app.get("/", teste);
app.get("/clientes",read);

// Teste e porta no console
//app.get("/", teste);

app.listen(3000, () => {
>>>>>>> 72ba9b419a820ccf0796d5a48d28d5057bb14fc2
    console.log("Back-end respondendo na porta 3000"); // mensagem
});


