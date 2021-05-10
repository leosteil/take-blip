import api from './thirdPartyAPI/github'

interface Repository {
    name: string,
    description: string,
    avatar: string,
}

interface Request {
    language?: string;
}

class GetRepositoriesService {
    public async execute({ language }: Request){

        let items =  await api.get(`orgs/takenet/repos?per_page=100&sort=created&direction=asc`).then((response) => {
            let data = response.data;
            return data = data.filter(repository => {
                return repository.language == language
            }).map(repository => {
                return {
                    "header": {
                        "type": "application/vnd.lime.media-link+json",
                        "value": {
                            "title": repository.full_name,
                            "text": repository.description,
                            "type":"image/jpeg",
                            "uri": repository.owner.avatar_url,
                            "aspectRatio":"2:1"                      }
                    },
                }
            }).slice(0, 5);
        }).catch((e) => {
            return e;
        });

        return {
            "itemType": "application/vnd.lime.document-select+json",
            items
        };
    }
}

export default GetRepositoriesService;
