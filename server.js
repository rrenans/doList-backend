import express from 'express';

import ListaController from './src/Controllers/ListaController';

// esqueçemos esse import, por essa razão o banco não funfava.
import './src/Database/database';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/tarefas', ListaController.index);
app.post('/novastarefas', ListaController.create);

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
});

// usar o nome server fica mais claro.

// para poder usar import usamos a dependencia sucrose
// para integrar sucrose e nodemon é necessario criar o arquivo nodemon.json aquele conteudo. 
// para saber mais consulte: https://lucassr.medium.com/usando-sucrase-no-nodejs-e0375359ce44
