const express = require('express');
const router = express.Router();

const Usuario = require('./controllers/Usuario');
const Lancamento = require('./controllers/Lancamento');

router.get('/', (req, res) => {
   res.send('API Livro Caixa respondender');
}); 

router.post('/usuarios', Usuario.create);
router.get('/usuarios', Usuario.read);

router.post('/lancamentos', Lancamento.create);
router.get('/lancamentos', Lancamento.read);
router.get('/lancamentos/:dia', Lancamento.readDia);
router.put('/lancamentos', Lancamento.update);
router.delete('/lancamentos/:id', Lancamento.del);

module.exports = router;