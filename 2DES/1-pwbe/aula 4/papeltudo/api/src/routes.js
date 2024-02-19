//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Item = require("./controllers/item");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Inventário Papelaria PapelTudo respondendo!");
}

//Rotas de Saída - Item
router.get("/", teste);
router.post("/api/item", Item.create);
router.get("/api/item", Item.read);
router.put("/api/item/:id", Item.update);
router.delete("/api/item/:id", Item.del);

module.exports = router;