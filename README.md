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

  **Adicionar Reserva**
  requisição: `POST/reservas`
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

  **Buscar Reserva**
  requisição: `GET/reservas`
  
  reposta:
  ```json
  {
   "erro": false,
    "reservas": [
        {
            "_id": "67a308eb3d40c25151cb0ce2",
            "nome": "João",
            "data": "2025-05-05T00:00:00.000Z",
            "evento": "Funeral"
        },
        {
            "_id": "67a309763d40c25151cb0ce3",
            "nome": "Maria",
            "data": "2025-06-10T00:00:00.000Z",
            "evento": "Aniversário"
        }
    ]
  }
  ```

  **Buscar Reserva por ID**
  requisição: `GET/reservas/67a309763d40c25151cb0ce3`

  resposta:
  ```json
  {
    "erro": false,
    "reserva": {
        "_id": "67a309763d40c25151cb0ce3",
        "nome": "Maria",
        "data": "2025-06-10T00:00:00.000Z",
        "evento": "Aniversário"
    }
  }
  ```

  **Alterar Reserva**
  requisição: `PUT/reservas/67a309763d40c25151cb0ce3`
  ```json
  {
    "nome": "Ana",
    "data": "2025-06-27T00:00:00.000Z",
    "evento": "Formatura"
  }
  ```

  reposta:
  ```json
  {
    "erro": false,
    "reserva": {
        "_id": "67a309763d40c25151cb0ce3",
        "nome": "Ana",
        "data": "2025-06-27T00:00:00.000Z",
        "evento": "Formatura"
    }
  }
  ```

  **Deletar Reserva**
  requisição: `DELETE/reservas/67a309763d40c25151cb0ce3`

  resposta:
  ```json
  {
    "erro": false,
    "mensagem": "Reserva excluida com sucesso!"
    }
  ```
