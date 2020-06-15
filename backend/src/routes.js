const express = require('express');

const OngController = require('./controllers/Ongs');
const IncidentController = require('./controllers/Incidents');
const ProfileController = require('./controllers/Profile');
const SessionController = require('./controllers/Session');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.delete('/ongs/:id', OngController.delete);

routes.get('/profile', ProfileController.index);

routes.get('/incident', IncidentController.index);
routes.post('/incident', IncidentController.create);
routes.delete('/incident/:id', IncidentController.delete);

module.exports = routes;