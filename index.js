const express = require('express');
const listaController = require('./src/Controllers/listaController');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/pegar', listaController.index);
// app.post('/criar', listaController.create);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});