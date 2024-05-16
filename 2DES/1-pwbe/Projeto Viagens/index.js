const express = require('express');
const cors = require('cors');

const app = express();

const router = require('./src/routes');

app.use(cors());
app.use(express.json());
app.use(router);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.listen(3000, () => {
  console.log('App exemplo funcionando na porta 3000!')
});
