 const express = require('express');

 const router = express.Router();

 const clientes = require('./controllers/clientes')
 const telefones = require('./controllers/telefones')

 router.get('/', (req, res) => {
    res.send('Hello World!')
  });

  //Clientes
  router.post('/clientes', clientes.create);
  router.get('/clientes', clientes.read);
  router.delete('/clientes/:id', clientes.remove);
  router.put('/clientes/:id', clientes.update);

  //Telefones
  router.post('/telefones/', telefones.create);
  router.get('/telefones', telefones.read);
  router.delete('/telefones/:id', telefones.remove);
  router.put('/telefones/:id', telefones.update);

  module.exports = router;