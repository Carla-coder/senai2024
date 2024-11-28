const express = require('express');
const router = express.Router();

const Usuario = require('./controllers/usuario.js');
const Tarefa = require('./controllers/tarefa.js');

router.get('/', (req, res) => {
    res.send('API Todo-list Respondendo');
});

// Rotas para Usuários
router.post('/usuarios', Usuario.create);
router.get('/usuarios', Usuario.read);

// Rotas para Tarefas
router.post('/tarefas', Tarefa.create);
router.get('/tarefas', Tarefa.read);
router.put('/tarefas', Tarefa.update);
router.delete('/tarefas/:id', Tarefa.del);

module.exports = router;
