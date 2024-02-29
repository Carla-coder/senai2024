// Dependências - Frameworks

const express = require('express');
const router = express.Router();

const Cliente = require('./controllers/cliente');

// Rota de Teste

const teste = (req, res) => {
    res.json("Back-end, Transportadora respondendo!");
}

// Rotas de Saída - Clientes

router.get('/', teste);
router.post('/clientes', Cliente.create);
router.get('/clientes', Cliente.read);
router.put('/clientes/:id', Cliente.update);
router.delete('/clientes/:id', Cliente.delete);

module.exports = router; 