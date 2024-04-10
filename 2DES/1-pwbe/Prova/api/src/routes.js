const express = require('express');
const routes = express.Router(); 

const Clientes = require('./controllers/cliente');
const Telefones = require('./controllers/telefone');
const Veiculos = require('./controllers/veiculo');
const Alugueis = require('./controllers/aluguel');

routes.get('/', (req, res) => {
    res.json("aluguel_veiculos");
});

// Rotas para clientes
routes.post('/clientes', Clientes.addCliente);
routes.get('/clientes/:cpf', Clientes.getCliente);
routes.put('/clientes/:cpf', Clientes.updateCliente);
routes.delete('/clientes/:cpf', Clientes.deleteCliente);

// Rotas para telefones
routes.post('/telefones', Telefones.addTelefone);
routes.get('/telefones/:cpf', Telefones.getTelefones);
routes.put('/telefones/:cpf', Telefones.updateTelefone);
routes.delete('/telefones/:cpf', Telefones.deleteTelefone);

// Rotas para veículos
routes.post('/veiculos', Veiculos.addVeiculo);
routes.get('/veiculos/:placa', Veiculos.getVeiculo);
routes.put('/veiculos/:placa', Veiculos.updateVeiculo);
routes.delete('/veiculos/:placa', Veiculos.deleteVeiculo);

// Rotas para reserva
routes.post('/alugueis', Alugueis.addAlugueis);
routes.get('/alugueis', Alugueis.getAlugueis);
routes.put('/alugueis/:Placa/:CPF_Cliente/:Reserva', Alugueis.updateAlugueis);
routes.delete('/alugueis/:Placa/:CPF_Cliente/:Reserva', Alugueis.deleteAlugueis);

routes.get('/alugueis/veiculos-reservados', Alugueis.getVeiculosReservados);

module.exports = routes;