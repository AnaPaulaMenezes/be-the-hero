const express = require('express'); // importa o modulo express
const cors = require('cors');
const routes = require('./routes');
const app = express(); //instancia de express

//Diz pro express ir no corpo da aplicação e transformar o json em algo entednivel
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);