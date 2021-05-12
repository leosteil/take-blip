import { Request, Response } from 'express';

import GetRepositoriesService from '../../../services/organizations/repositories/GetRepositoriesService';

export default class RepositoriesController {
    public async get(request: Request, response: Response): Promise<Response> {
        const { organization } = request.params;
        const { language, qty } = request.query;

        const getRepositoriesService = new GetRepositoriesService();

        const repositories = await getRepositoriesService.execute({
            organization,
            language: String(language),
            qty,
        });

        return response.json(repositories);
    }
}
