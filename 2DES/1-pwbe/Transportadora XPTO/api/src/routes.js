const express = require('express');
const routes = express.Router();

const Cliente = require('./controllers/cliente');
const Veiculo = require('./controllers/veiculo');
const Funcionario = require('./controllers/funcionario');
const Rota = require('./controllers/rota');
const Entrega = require('./controllers/entrega');
const Pedido = require('./controllers/pedido');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getClientes);
routes.get('/clientes/:id', Cliente.getClientes);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:id', Cliente.deleteCliente);

routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.getVeiculos);
routes.get('/veiculos/:placa', Veiculo.getVeiculos);
routes.put('/veiculos', Veiculo.updateVeiculo);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

routes.post('/funcionario', Funcionario.addFuncionario);
routes.get('/funcionarios', Funcionario.getFuncionarios);
routes.get('/funcionarios/:id', Funcionario.getFuncionarios);
routes.put('/funcionarios', Funcionario.updateFuncionario);
routes.delete('/funcionarios/:id', Funcionario.deleteFuncionario);

routes.post('/rota', Rota.addRota);
routes.get('/rotas', Rota.getRotas);
routes.get('/rotas/:id', Rota.getRotas);
routes.put('/rotas', Rota.updateRota);
routes.delete('/rotas/:id', Rota.deleteRota);

routes.post('/entrega', Entrega.addEntrega);
routes.get('/entregas', Entrega.getEntregas);
routes.get('/entregas/:id', Entrega.getEntregas);
routes.put('/entregas', Entrega.updateEntrega);
routes.delete('/entregas/:id', Entrega.deleteEntrega);

routes.post('/pedido', Pedido.addPedido);
routes.get('/pedido', Pedido.getPedidos);
routes.get('/pedido/:id', Pedido.getPedidos);
routes.put('/pedido', Pedido.updatePedido);
routes.delete('/pedido/:id', Pedido.deletePedido);


module.exports = routes;