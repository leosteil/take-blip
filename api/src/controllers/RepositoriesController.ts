import { Request, Response } from 'express';

import GetRepositoriesService from '../services/GetRepositoriesService';

export default class RepositoriesController {
    public async get(request: Request, response: Response): Promise<Response> {
        const { language } = request.query;

        const getRepositoriesService = new GetRepositoriesService();

        const repositories = await getRepositoriesService.execute({
            language: String(language),
        });

        return response.json(repositories);
    }
}
