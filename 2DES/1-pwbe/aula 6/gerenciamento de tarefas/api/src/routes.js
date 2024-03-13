const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuario');
const Tarefa = require('./controllers/tarefa');


routes.get('/', (req, res) => {
    res.json("API Gerenciamento de Tarefas")
});

// Rotas de Usuários
routes.post('/usuario', Usuario.addUsuario);
routes.get('/usuario', Usuario.getUsuarios);
routes.get('/usuario/:id', Usuario.getUsuarioById);
routes.put('/usuario/:id', Usuario.updateUsuario);
routes.delete('/usuario/:id', Usuario.deleteUsuario);

// Rotas de Tarefas
routes.post('/tarefa', Tarefa.addTarefa);
routes.get('/tarefa', Tarefa.getTarefas);
routes.get('/tarefa/:id', Tarefa.getTarefaById);
routes.put('/tarefa/:id', Tarefa.updateTarefa);
routes.delete('/tarefa/:id', Tarefa.deleteTarefa);

module.exports = routes;