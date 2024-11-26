const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./src/routes');

app.use(express.json());
app.use(cors());
app.use('/', routes);
app.listen(3000, () => {
    console.log('API Livro Caixa respondendo em http://localhost:3000');
});
