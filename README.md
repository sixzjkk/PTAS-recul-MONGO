# API de Reservas de Eventos

## Descrição

API de gerenciamento de um salão de festas que realiza as operações básicas CRUD (Create, Read, Update e Delete) ligada ao banco de dados MongoDB.

## Instalações

rode no terminal:

1.**instale as pendencias**
```sh
npm init -y
npm install express
npm i mongoose
```

2.**inicie o servidor**
```sh
npm start
```

## Rotas Disponiveis

- **Adicionar Reserva** (`POST/reservas`): adiciona uma nova reserva
- **Buscar Reserva** (`GET/reservas`): busca todas as reservas
- **Buscar Reserva por ID** (`GET/reservas/:id`): busca uma reserva de acordo com o ID
- **Alterar Reserva** (`PUT/reservas/:id`): altera uma reserva de acordo com o ID
- **Deletar Reserva** (`DELETE/reservas/:id`): deleta uma reserva de acordo com o ID

  ### Exemplos de Rotas

  **Adicionar Reserva** (`POST/reservas`)
  ```json
  {
    "nome": "Ana",
    "data": "2025-06-27T00:00:00.000Z",
    "evento": "Formatura"
  }
  ```
  
  resposta:
  ```json
  {
    "_id": "67a3a9f8c9d426538cf050a0",
    "nome": "Ana",
    "data": "2025-06-27T00:00:00.000Z",
    "evento": "Formatura",
    "__v": 0
  }
  ```
