// const express = require('express');
// const routes = express.Router();

// const app = express();
// const PORT = process.env.PORT || 5500;

// // Middleware para configurar o servidor para usar as rotas definidas
// app.use(express.json()); // Para interpretar JSON nas requisições
// app.use(routes); // Define as rotas

// // Configura o servidor para escutar as solicitações na porta especificada
// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
//   });

//   // Exemplo de configuração da rota /usuarios/login para aceitar requisições POST
// app.post('/usuarios/login', (req, res) => {
//     // Lógica para autenticação do usuário aqui
//     res.send('Rota /usuarios/login configurada corretamente para aceitar requisições POST');
// });

// const Usuario = require('./controllers/usuario');
// const Tarefa = require('./controllers/tarefa');

// routes.get('/', (req, res) => {
//     res.json("API Tarefas 1.0")
// });

// routes.post('/usuarios/login', Usuario.login);
// routes.post('/usuarios', Usuario.addUsuario);
// routes.get('/usuarios', Usuario.getUsuarios);
// routes.get('/usuarios/:id', Usuario.getUsuarios);
// routes.put('/usuarios', Usuario.updateUsuario);
// routes.delete('/usuarios/:id', Usuario.deleteUsuario);

// routes.post('/tarefas', Tarefa.addTarefa);
// routes.get('/tarefas', Tarefa.getTarefas);
// routes.get('/tarefas/:id', Tarefa.getTarefas);
// routes.put('/tarefas', Tarefa.updateTarefa);
// routes.delete('/tarefas/:id', Tarefa.deleteTarefa);

// module.exports = routes;

const express = require('express');
const routes = express.Router();

const Usuario = require('./controllers/usuario');
const Tarefa = require('./controllers/tarefa');

routes.get('/', (req, res) => {
    res.json("API Tarefas 1.0")
});

routes.post('/usuarios/login', Usuario.login);
routes.post('/usuarios', Usuario.addUsuario);
routes.get('/usuarios', Usuario.getUsuarios);
routes.get('/usuarios/:id', Usuario.getUsuarios);
routes.put('/usuarios', Usuario.updateUsuario);
routes.delete('/usuarios/:id', Usuario.deleteUsuario);

routes.post('/tarefas', Tarefa.addTarefa);
routes.get('/tarefas', Tarefa.getTarefas);
routes.get('/tarefas/:id', Tarefa.getTarefas);
routes.get('/tarefas/status/:status', Tarefa.getTarefaStatus);
routes.get('/tarefas/data/:data', Tarefa.getTarefaData);    
routes.put('/tarefas', Tarefa.updateTarefa);
routes.delete('/tarefas/:id', Tarefa.deleteTarefa);

module.exports = routes;