import express from 'express';

import ListaController from ('./src/Controllers/ListaController');

// esqueçemos esse import, por essa razão o banco não funfava.
import './src/database/database'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/tarefas', ListaController.index);
app.post('/novasTarefas', ListaController.create);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// usar o nome server fica mais claro.

// para poder usar import usamos a dependencia sucrose
// para integrar sucrose e nodemon é necessario criar o arquivo nodemon.json aquele conteudo. 
