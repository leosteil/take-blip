import { Router } from 'express';

import RepositoriesController from '../controllers/RepositoriesController';

const repositoriesRouter = Router();

const repositoriesController = new RepositoriesController();

repositoriesRouter.get('/', (request, response) => {
    return repositoriesController.get(request, response);
});

export default repositoriesRouter;
