const express = require('express')
const routes = express.Router()

const Usuario = require('./controllers/usuario')
const Tarefa = require('./controllers/tarefa')

routes.get('/', (req, res) => {
  res.json('API Gerenciamento de Tarefas')
})

// Rotas de Usuários
routes.post('/usuario', Usuario.addUsuario) // Adiciona um novo usuário
routes.get('/usuario', Usuario.getUsuarios) // Retorna todos os usuários
routes.get('/usuario/:id', Usuario.getUsuarioById) // Retorna um usuário específico com base no ID fornecido
routes.put('/usuario/:id', Usuario.updateUsuario) // Atualiza as informações de um usuário específico com na base no ID fornecido
routes.delete('/usuario/:id', Usuario.deleteUsuario) // Remove um usuário específico com base no ID fornecido

// Rotas de Tarefas
routes.post('/tarefa', Tarefa.addTarefa) // Adiciona uma nova tarefa.
routes.get('/tarefas', Tarefa.getTarefas) // Retorna todas as tarefas.
routes.get('/tarefa/:id', Tarefa.getTarefaById) // Retorna uma tarefa específica com base no ID fornecido.
routes.put('/tarefa/:id', Tarefa.updateTarefa) // Atualiza as informações de uma tarefa específica com base no ID fornecido.
routes.delete('/tarefa/:id', Tarefa.deleteTarefa) // Remove uma tarefa específica com base no ID fornecido.

module.exports = routes
