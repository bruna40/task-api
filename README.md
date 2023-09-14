# Task API

## Descrição:

API para gerenciamento de tarefas.
Feita durante a resolução do desafio do curso de dundamentos de NodeJS da Rocketseat.

## Tecnologias utilizadas:

- NodeJS
- Javascript
- Husky

O husky foi utilizado para gereciar os hooks do git, para que antes de cada commit, o código seja formatado.

## Como rodar o projeto:

- Clone o repositório
- Instale as dependências com `npm install`
- Rode o projeto com `npm run dev`

## Rotas:

- GET `/tasks`: Lista todas as tarefas
- POST `/tasks`: Cria uma nova tarefa
- PUT `/tasks/:id`: Atualiza uma tarefa