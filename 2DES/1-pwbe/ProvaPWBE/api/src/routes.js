const express = require('express');
const routes = express.Router(); 

const Cliente = require('./controllers/cliente');
const Telefone = require('./controllers/telefone');
const Veiculo = require('./controllers/veiculo');
const Aluguel = require('./controllers/aluguel');

routes.get('/', (req, res) => {
    res.json("alugueis");
});

// Rotas para clientes
routes.post('/cliente', Cliente.addCliente);
routes.get('/cliente/:cpf', Cliente.getCliente);
routes.put('/cliente/:cpf', Cliente.updateCliente);
routes.delete('/cliente/:cpf', Cliente.deleteCliente);

// Rotas para telefones
routes.post('/telefone', Telefone.addTelefone);
routes.get('/telefone/:cpf', Telefone.getTelefone);
routes.put('/telefone/:cpf', Telefone.updateTelefone);
routes.delete('/telefone/:cpf', Telefone.deleteTelefone);

// Rotas para veículos
routes.post('/veiculo', Veiculo.addVeiculo);
routes.get('/veiculo/:placa', Veiculo.getVeiculo);
routes.put('/veiculo/:placa', Veiculo.updateVeiculo);
routes.delete('/veiculo/:placa', Veiculo.deleteVeiculo);

// Rotas para reserva
routes.post('/aluguel', Aluguel.addAluguel);
routes.get('/aluguel', Aluguel.getAluguel);
routes.put('/aluguel/:placa/:cpf/:reserva', Aluguel.updateAluguel);
routes.delete('/aluguel/:id', Aluguel.deleteAluguel);

// Rotas adicionais para visualizar aluguéis específicos
routes.get('/aluguel/reservados', Aluguel.getAlugueisReservados);
routes.get('/aluguel/alugados', Aluguel.getAlugueisAlugados);
routes.get('/aluguel/relatorio', Aluguel.getRelatorioCompleto);

module.exports = routes;

