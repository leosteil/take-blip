import { Router } from 'express';
import repositories from './repositores.routes';

const routes = Router();

routes.use('/repositories', repositories);

export default routes;
