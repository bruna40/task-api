# Task API

## Descrição:

API para gerenciamento de tarefas.
Feita durante a resolução do desafio do curso de dundamentos de NodeJS da Rocketseat.

### Sobre o desafio:

Nesse desafio foi desenvolvido uma API para realizar o CRUD de suas *tasks* (tarefas).

A API deve conter as seguintes funcionalidades:

- Criação de uma task
- Listagem de todas as tasks
- Atualização de uma task pelo `id`
- Remover uma task pelo `id`
- Marcar pelo `id` uma task como completa

## Tecnologias utilizadas:

- NodeJS
- Javascript
- Husky

O husky foi utilizado para gereciar os hooks do git, para que antes de cada commit, o código seja formatado.

## Como rodar o projeto:

- Clone o repositório
- Instale as dependências com `npm install`
- Rode o projeto com `npm run dev`

Projeto rodando na porta 3000.


## Pastas e arquivos:

- `src`: Pasta onde fica o código da aplicação
- `src/routes`: Pasta onde fica as rotas da aplicação
- `src/database`: Pasta onde fica o código com o banco de dados
- `src/middlewares`: Pasta onde fica o código dos middlewares, que são funções que são executadas para tratar os dados antes de chegar nas rotas
- `src/utils`: Pasta onde fica o código com funções utilitárias
## Rotas:

- GET `/tasks`: Lista todas as tarefas
- POST `/tasks`: Cria uma nova tarefa
- PUT `/tasks/:id`: Atualiza uma tarefa
- DELETE `/tasks/:id`: Deleta uma tarefa
- PATCH `/tasks/:id/done`: Marca uma tarefa como concluída