//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Borracharia = require("./controllers/cliente");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Borracharia respondendo!");
}

//Rotas de Saída - Item
router.get("/", teste);
router.post("/api/borracharia/clientes", Borracharia.create);
router.get("/api/borracharia/clientes", Borracharia.read);
router.put("/api/borracharia/clientes/:id", Borracharia.update);
router.delete("/api/borracharia/clientes/:id", Borracharia.del);

module.exports = router;