const express = require('express');

// Importações de controladores para encapsulamento de lógica
const OngController = require('./controllers/OngController')

// Criação e definição do roteador e rotas da aplicação
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;
