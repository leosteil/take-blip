# Take Blip API


## API para ser consumida pelo ChatBot builder da Take Blip

O ChatBot pode ser utilizado através do link: [ChatBot](https://chat.blip.ai/?appKey=ZGVzYWZpb2JsaXAyOjhhMjljZjNhLWU0MTItNGI5ZC1iYzc1LWI3NTdiZDQxMDkxZA==)

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/pt-br/)

### 🛠 Ferramentas para padronização de código

As seguintes ferramentas foram usadas para padronização do código:

- [EditorConfig](https://editorconfig.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### Descrição geral do projeto

Para resolver o desafio, foi solicitado a construção de uma API que fosse responsável por buscar repositórios via [github API](https://docs.github.com/pt/rest).
Para isso, dentro do projeto desenvolvido, foi construída uma rota que retorna os repositórios de uma organização.

HTTP Method: GET
URL: {{host}}/organizations/:org_name/repositories?language='string'&qty=int
- org_name: nome da organização no github
- language: línguagem do repositório.
- qty: quantidade de repositórios que devem ser exibidos

Notas: a rota ordena os repositórios por data de criação de forma ascendente. Caso não sejam enviados language e qty, serão retornados todos os repositórios da conta.
Dentro do ChatBot builder, para a montagem do carrossel, estes parâmetros são enviados, assim respeitando os pedidos do teste. Trabalhei dessa forma a rota, apenas para deixá-la mais genérica. Dentro do builder, estão sendo retornados os repositórios de C# da organização [takenet](https://github.com/takenet).

### Hospedagem
A API está hospedada no [Heroku](https://www.heroku.com), podendo ser acessada através do [link](https://take-blip-repositories.herokuapp.com/organizations/takenet/repositories?language=C%23&qty=5)
