// Dependências - Frameworks

const express = require('express');
const router = express.Router();

const Clientes = require('./src/controllers/clientes');
const Veiculos = require('./src/controllers/veiculos');
const Funcionarios = require('./src/controllers/funcionarios');
const Rotas = require('./src/controllers/rotas');
const Entregas = require('./src/controllers/entregas');
const Pedidos = require('./src/controllers/pedidos');

// Rota de Teste

const teste = (req, res) => {
    res.json("Back-end, Transportadora respondendo!");
}

// Rotas de Saída - Clientes

router.get('/', teste);
router.post('/clientes', Clientes.create);
router.get('/clientes', Clientes.read);
router.put('/clientes/:id', Clientes.update);
router.delete('/clientes/:id', Clientes.del);

// Rotas de Saída - Veiculos

router.get('/', teste);
router.post('/veiculos', Veiculos.create);
router.get('/veiculos', Veiculos.read);
router.put('/veiculos/:id', Veiculos.update);
router.delete('/veiculos/:id', Veiculos.del);

// Rotas de Saída - Funcionarios

router.get('/', teste);
router.post('/funcionarios', Funcionarios.create);
router.get('/funcionarios', Funcionarios.read);
router.put('/funcionarios/:id', Funcionarios.update);
router.delete('/funcionarios/:id', Funcionarios.del);

// Rotas de Saída - Rotas

router.get('/', teste);
router.post('/rotas', Rotas.create);
router.get('/rotas', Rotas.read);
router.put('/rotas/:id', Rotas.update);
router.delete('/rotas/:id', Rotas.del);

// Rotas de saída - Entregas

router.get('/', teste);
router.post('/entregas', Entregas.create);
router.get('/entregas', Entregas.read);
router.put('/entregas/:id', Entregas.update);
router.delete('/entregas/:id', Entregas.del);

// Rotas de saída - Pedidos

router.get('/', teste);
router.post('/pedidos', Pedidos.create);
router.get('/pedidos', Pedidos.read);
router.put('/pedidos/:id', Pedidos.update);
router.delete('/pedidos/:id', Pedidos.del);

module.exports = router; 