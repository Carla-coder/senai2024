const express = require("express");
const cors = require("cors");

const routes = require('./src/routes');

const teste = (req, res)=>{
    res.send("API transportadora respondendo ");
}

const app = express(); // a criptografia esta no HTTPS, esta no express, faz a comunicação segura entre o back end e front end
app.use(cors()); // o web front end faz a comunicação com o https
app.use(express.json());
app.use(routes);

app.listen(3000,()=>{
    console.log("Back-end respondendo na porta 3000");
});