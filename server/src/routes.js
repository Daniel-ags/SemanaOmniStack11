const express = require('express');

// Importações de controladores para encapsulamento de lógica
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const AdminController = require('./controllers/AdminController');

// Criação e definição do roteador e rotas da aplicação
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);


routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

// Controladores especiais ADM para limpeza de dados

routes.delete('/incidents', AdminController.deleteAllIncidents);
routes.delete('/ongs', AdminController.deleteAllOngs);
routes.get('/incidets', AdminController.listAllIncidents);
routes.get('/ongs', AdminController.listAllOngs);

module.exports = routes;
