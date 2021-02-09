import express from 'express';
import ClasseController from './controllers/classeControler';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();
const classeController =  new ClasseController();
const connectionsController = new ConnectionController();

routes.get('/connections', connectionsController.index);
routes.get('/classes', classeController.index);

routes.post('/classes', classeController.create);
routes.post('/connections', connectionsController.create);

export default routes;