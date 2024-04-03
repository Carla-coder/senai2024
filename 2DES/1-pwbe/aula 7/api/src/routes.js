const express = require('express');
const routes = express.Router();

const Funcionario = require('./controllers/funcionario');
const Manutencao = require('./controllers/manutencao');
const Telefone = require('./controllers/telefone');
const Veiculo = require('./controllers/veiculo');

routes.get('/', (req, res) => {
  res.json('API Registro de Manutenções')
});

// Rotas de Funcionario
routes.post('/funcionario', Funcionario.addFuncionario); // Adiciona um novo funcionário
routes.get('/funcionario', Funcionario.getFuncionarios); // Retorna todos os funcionários
routes.get('/funcionario/:id', Funcionario.getFuncionarioById); // Retorna um funcionário específico com base no ID fornecido
routes.put('/funcionario/:id', Funcionario.updateFuncionario); // Atualiza as informações de um funcionário específico com na base no ID fornecido
routes.delete('/funcionario/:id', Funcionario.deleteFuncionario); // Remove um funcionário específico com base no ID fornecido

// Rotas de Manutencao
routes.post('/manutencao', Manutencao.addManutencao); // Adiciona uma nova manutencao.
routes.get('/manutencao', Manutencao.getManutencoes); // Retorna todas as manutencaos.
routes.get('/manutencao/:id', Manutencao.getManutencaoById); // Retorna uma manutencao específica com base no ID fornecido.
routes.put('/manutencao/:id', Manutencao.updateManutencao); // Atualiza as informações de uma manutencao específica com base no ID fornecido.
routes.delete('/manutencao/:id', Manutencao.deleteManutencao); // Remove uma manutencao específica com base no ID fornecido.

// Rotas de Telefone
routes.post('/telefone/:idFuncionario/add', Telefone.addTelefone); // Adiciona um telefone a um determinado funcionario.
routes.get('/telefone/:idFuncionario', Telefone.getTelefonesByFuncionarioId); // Busca os telefones de um funcionário pelo ID.
routes.put('/telefone/:idFuncionario', Telefone.updateTelefone); // Define o telefone do Funcionário com o id informado.
routes.delete('/telefone/:idTelefone', Telefone.deleteTelefone); // Deleta o telefone com aquele id.

// Rotas de Veículos
routes.post('/veiculo', Veiculo.addVeiculo); // Adiciona um veículo na lista.
routes.get('/veiculo', Veiculo.getVeiculos); // Retorna todos os veículos cadastrados.
routes.get('/veiculo/:placa', Veiculo.getVeiculo); // Busca por placa e retorna o veículo correspondente.
routes.put('/veiculo/:placa', Veiculo.updateVeiculo); // Atualiza os dados do veículo.
routes.delete('/veiculo/:placa', Veiculo.deleteVeiculo); // Remove o veículo da lista.


module.exports = routes