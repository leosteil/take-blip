import { Router } from 'express';
import organizationRepositories from './organizations/repositories/repositores.routes';

const routes = Router();

routes.use('/organizations', organizationRepositories);

export default routes;
