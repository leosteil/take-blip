import { Router } from 'express';

import RepositoriesController from '../../../controllers/organizations/repositories/RepositoriesController';

const repositoriesRouter = Router();

const repositoriesController = new RepositoriesController();

repositoriesRouter.get('/:organization/repositories', (request, response) => {
    return repositoriesController.get(request, response);
});

export default repositoriesRouter;
