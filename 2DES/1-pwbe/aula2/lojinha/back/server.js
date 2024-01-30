<<<<<<< HEAD
//Dependências - Frameworks 
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
=======
//Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
>>>>>>> 72ba9b419a820ccf0796d5a48d28d5057bb14fc2

//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'lojinha'
});

<<<<<<< HEAD
//Rota de teste - front
=======
//Rota de teste
>>>>>>> 72ba9b419a820ccf0796d5a48d28d5057bb14fc2
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

//CRUD - create
const create = (req, res) => {
<<<<<<< HEAD
    let cpf = req.query.cpf;
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let nascimento = req.query.nascimento;
=======
    let cpf = req.body.cpf;
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;
    let nascimento = req.body.nascimento;
>>>>>>> 72ba9b419a820ccf0796d5a48d28d5057bb14fc2
    let query = `INSERT INTO clientes(cpf, nome, sobrenome, nascimento) VALUE`;
    query += `('${cpf}', '${nome}', '${sobrenome}', '${nascimento}');`;
    con.query(query,(err, result)=>{
        if(err)
<<<<<<< HEAD
            res.json(err);
        else
            res.json(result);
=======
            res.redirect("http://127.0.0.1:5500/front/erro.html?erro=Provalmente o CPF já está cadastrado&err="+err.code);
        else
            res.redirect("http://127.0.0.1:5500/front/index.html");
>>>>>>> 72ba9b419a820ccf0796d5a48d28d5057bb14fc2
    });
}

//CRUD - Read
const read = (req, res) => {
<<<<<<< HEAD
    con.query("SELECT * FROM Clientes",(err, result)=>{
=======
    con.query("SELECT * FROM Clientes ORDER BY id DESC",(err, result)=>{
>>>>>>> 72ba9b419a820ccf0796d5a48d28d5057bb14fc2
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
<<<<<<< HEAD

//Rotas de Saída - FrontEnd
app.get("/", teste);
app.get("/clientes/create", create);
=======
app.use(bodyParser.urlencoded({ extended: true }));

//Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/clientes", create);
>>>>>>> 72ba9b419a820ccf0796d5a48d28d5057bb14fc2
app.get("/clientes", read);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});