import { Router } from 'express';

const repositoriesRouter = Router();

import { RepositoriesController } from '../controllers/RepositoriesController';

const repositoriesController = new RepositoriesController();

repositoriesRouter.get('/', (request, response,) => {
    return repositoriesController.get(request, response);
});

export default repositoriesRouter;
