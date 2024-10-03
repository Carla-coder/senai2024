const express = require('express');
const router = express.Router();

const Alocacao = require('./controllers/alocacao');
const Automoveis = require('./controllers/automoveis');
const Clientes = require('./controllers/clientes');
const Concessionarias = require('./controllers/concessionarias');
const Vendas = require('./controllers/vendas');