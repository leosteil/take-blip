import api from '../../thirdPartyAPI/github';

interface Repository {
    header: {
        type: string;
        value: {
            title: string;
            text: string;
            type: string;
            uri: string;
            aspectRatio: string;
        };
    };
}

interface CarrouselFormat {
    itemType: string;
    items: Repository[];
}

interface Request {
    organization: string;
    language?: string;
    qty?: number;
}

class GetRepositoriesService {
    public async execute({
        language,
        organization,
        qty,
    }: Request): Promise<CarrouselFormat> {
        const items = await api
            .get(
                `orgs/${organization}/repos?per_page=100&sort=created&direction=asc`,
            )
            .then(response => {
                return response.data
                    .filter(repository => {
                        return (
                            language === 'undefined' ||
                            repository.language === language
                        );
                    })
                    .map(repository => {
                        return {
                            header: {
                                type: 'application/vnd.lime.media-link+json',
                                value: {
                                    title: repository.full_name,
                                    text: repository.description,
                                    type: 'image/jpeg',
                                    uri: repository.owner.avatar_url,
                                    aspectRatio: '2:1',
                                },
                            },
                        };
                    })
                    .slice(0, qty);
            })
            .catch(e => {
                return e;
            });

        return {
            itemType: 'application/vnd.lime.document-select+json',
            items,
        };
    }
}

export default GetRepositoriesService;
