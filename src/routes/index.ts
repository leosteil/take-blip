import { Router } from 'express';
import organizationRepositoriesRouter from './organizations/repositories/repositores.routes';

const routes = Router();

routes.use('/organizations', organizationRepositoriesRouter);

export default routes;
