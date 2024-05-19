const express = require('express');
const router = express.Router();

const destinos = require('./controllers/destinoController')
const hoteis = require('./controllers/hoteisController')
const pontos = require('./controllers/pontoController')

router.get('/', (req, res) => {
    res.send('Hello World!')
  });

  //Destinos
  router.post('/destinos', destinos.create);
  router.get('/destinos', destinos.read);
  router.put('/destinos/:id', destinos.update);
  router.delete('/destinos/:id', destinos.del);

  //Hoteis
  router.post('/hoteis', hoteis.create);
  router.get('/hoteis', hoteis.read);
  router.put('/hoteis/:id', hoteis.update);
  router.delete('/hoteis/:id', hoteis.del);

  //Pontos
  router.post('/pontos', pontos.create);
  router.get('/pontos', pontos.read);
  router.put('/pontos/:id', pontos.update);
  router.delete('/pontos/:id', pontos.del);

  module.exports = router;