const express = require('express');
const router = express.Router();

const Item = require('../controllers/item');

router.get('/', Item.teste);
router.post('/item/criar', Item.criar);
router.get('/item/listar', Item.listar);
router.get('/item/listar/:id', Item.listar);
router.put('/item/alterar:id', Item.alterar); // Alterado para seguir padrões RESTful
router.delete('/item/alterar/:id', Item.alterar); // Renomeado para 'excluir' em vez de 'alterar'

module.exports = router;