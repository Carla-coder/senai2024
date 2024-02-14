//Dependências - Frameworks
const express = require("express"); // usa o protocolo http
const cors = require("cors");
const routes = require("./src/routes");

//Configurações de saída - FrontEnd - conecta com o Front
const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});

