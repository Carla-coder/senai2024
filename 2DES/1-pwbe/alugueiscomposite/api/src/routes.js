const express = require('express');
const routes = express.Router();

const veiculo = require('./controllers/veiculo');
const cliente = require('./controllers/cliente');
const telefone = require('./controllers/telefone');
const aluguel = require('./controllers/aluguel');

routes.get('/', (req, res) => {
    res.json("API Alugueis 1.0");
});

routes.post('/veiculos', veiculo.createVeiculo);
routes.get('/veiculos', veiculo.readVeiculos);
routes.get('/veiculos/:placa', veiculo.readVeiculo);
routes.put('/veiculos', veiculo.updateVeiculo);
routes.delete('/veiculos/:placa', veiculo.deleteVeiculo);

routes.post('/clientes', cliente.createCliente);
routes.get('/clientes', cliente.readClientes);
routes.get('/clientes/:cpf', cliente.readClientes);
routes.put('/clientes', cliente.updateCliente);
routes.delete('/clientes/:cpf', cliente.deleteCliente);

routes.post('/telefones', telefone.createTelefone);
routes.get('/telefones', telefone.readTelefones);
routes.get('/telefones/:cpf', telefone.readTelefones);
routes.put('/telefones', telefone.updateTelefone);
routes.delete('/telefones/:numero', telefone.deleteTelefone);

routes.post('/alugueis', aluguel.createAluguel);
routes.get('/alugueis', aluguel.readAlugueis);
routes.get('/alugueis/id/:id', aluguel.readAlugueis);
routes.get('/alugueis/cliente/:cpf', aluguel.readAlugueis);
routes.get('/alugueis/veiculo/:placa', aluguel.readAlugueis);
routes.get('/alugueis/reservados', aluguel.readReservas);
routes.get('/alugueis/alugados', aluguel.readAlugados);
routes.put('/alugueis', aluguel.updateAluguel);
routes.delete('/alugueis/:id', aluguel.deleteAluguel);

module.exports = routes;