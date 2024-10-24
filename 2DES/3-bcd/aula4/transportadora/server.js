//Dependências - Frameworks
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Transportadora respondendo na porta 3000");
});