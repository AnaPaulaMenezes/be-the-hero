const express = require('express'); // importa o modulo express
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');
const app = express(); //instancia de express

//Diz pro express ir no corpo da aplicação e transformar o json em algo entednivel
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;