# Boas vindas ao repositório do Crush Manager!

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
  - [Depois de terminar o desenvolvimento (opcional)](#depois-de-terminar-o-desenvolvimento-opcional)
- [Como desenvolver](#como-desenvolver)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Linter](#linter)
  - [Lista de requisitos](#lista-de-requisitos)
    - [1 - Crie o endpoint GET /crush](#1---crie-o-endpoint-get-crush)
    - [2 - Crie o endpoint GET /crush/:id](#2---crie-o-endpoint-get-crushid)
    - [3 - Crie o endpoint POST /login](#3---crie-o-endpoint-post-login)
    - [4 - Crie o endpoint POST /crush](#4---crie-o-endpoint-post-crush)
    - [5 - Crie o endpoint PUT /crush/:id](#5---crie-o-endpoint-put-crushid)
    - [6 - Crie o endpoint DELETE /crush/:id](#6---crie-o-endpoint-delete-crushid)
    - [7 - Crie o endpoint GET /crush/search?q=searchTerm](#7---crie-o-endpoint-get-crushsearchqsearchterm)
- [Avisos Finais](#avisos-finais)

---

# Habilidades

Neste projeto, verificamos se você é capaz de:

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.
---

# Entregáveis

## O que deverá ser desenvolvido

Você vai desenvolver uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de crushs. Você vai desenvolver alguns endpoints que irão ler e escrever em um arquivo, isso utilizando o módulo `fs`.

---

# Requisitos do projeto

### Linter

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

---

## Lista de requisitos

### Observações

1. Com exceção do requisito 3, todos os outros requisitos deverão ser feitos utilizando o módulo `fs`.

2. O arquivo `crush.json` será utilizado como base para fazer as requisições da API. As operações de leitura e escrita dos requisitos deve ser feito nesse arquivo usando os métodos da biblioteca `fs`.

3. Há um arquivo `index.js` no repositório. Não remova, nele, o seguinte trecho de código:

```javascript
app.get('/', (_request, response) => {
  response.status(SUCCESS).send();
});
```

Isso está configurado para o avaliador funcionar.

4. Ao realizar testes locais com `npm run test`, o servidor deverá ser iniciado com `npm run debug` para evitar possíveis erros.

5. Após o teste local seu arquivo `crush.json` ficará vazio. Para que ele retorne à configuração inicial utilize `npm run restore`.

6. Ao se deparar com o erro de que a porta já está em uso: `EADDRINUSE: address already in use 0.0.0.0:3000`, execute em seu terminal `killall node` isso finaliza todas as execuções do node.

---

### 1 - Crie o endpoint GET `/crush`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array com todos os crushs cadastrados. Devendo retornar o `status 200`, com o seguinte corpo:

```js
[
  {
    "name": "Madonna",
    "age": 62,
    "id": 1,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Cyndi Lauper",
    "age": 67,
    "id": 2,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Kendrick Lamar",
    "age": 33,
    "id": 3,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Tom Holland",
    "age": 24,
    "id": 4,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  }
]
```

- Caso não exista nenhum crush cadastrado o endpoint deve retornar um array vazio e o `status 200`.


### 2 - Crie o endpoint GET `/crush/:id`

- O endpoint deve retornar um crush baseado no id da rota. Devendo retornar o `status 200` ao fazer uma requisição `/crush/1`, com o seguinte corpo:

  ```js
  {
    "name": "Madonna",
    "age": 62,
    "id": 1,
    "date": { "datedAt": "23/10/2020", "rate": 5 }
  }
  ```

- Caso não seja encontrado um crush baseado no id da rota, o endpoint deve retornar o `status 404` com o seguinte corpo:

  ```js
  {
    "message": "Crush não encontrado"
  }
  ```

### 3 - Crie o endpoint POST `/login`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de retornar um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições.

  - O endpoint deverá o retornar o token gerado, da seguinte forma:

  ```js
  {
    "token": "7mqaVRXJSp886CGr"
  }
  ```

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "email": "email@email.com",
    "password": 123456
  }
  ```

- O campo `email` deverá ser um email válido. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"email\" é obrigatório"
    }
    ```

  - Caso o email passado não seja um email válido retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"email\" deve ter o formato \"email@email.com\""
    }
    ```

- O campo `password` deverá ter pelo menos 6 caracteres.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"password\" é obrigatório"
    }
    ```

  - Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"password\" ter pelo menos 6 caracteres"
    }
    ```

### 4 - Crie o endpoint POST `/crush`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de adicionar um novo crush ao seu arquivo;

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso o crush não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O crush deve ser maior de idade"
    }
    ```

- O campo `date` deverá ser um objeto com as seguintes chaves:

  - A chave `datedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"datedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `date` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informa, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"date\" é obrigatório e \"datedAt\" e \"rate\" não podem ser vazios"
      }
      ```

- O endpoint deve retornar o `status 201` e o crush que foi cadastrado, dá seguinte forma:

  ```js
  {
    "id": 1,
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

### 5 - Crie o endpoint PUT `/crush/:id`

#### Os seguintes pontos serão avaliados:

- O endpoint deve ser capaz de editar um crush baseado no id da rota, sem alterar o id registrado.

- O corpo da requisição deverá ter o seguinte formato:

  ```js
  {
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```
  
- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O \"name\" ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso o crush não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O crush deve ser maior de idade"
    }
    ```

- O campo `date` deverá ser um objeto com as seguintes chaves:

  - A chave `datedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

    ```js
    {
      "message": "O campo \"datedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `date` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informa, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorne `status 400`, com o seguinte corpo:

      ```js
      {
        "message": "O campo \"date\" é obrigatório e \"datedAt\" e \"rate\" não podem ser vazios"
      }
      ```

- O endpoint deve retornar o `status 200` e o crush que foi editado, dá seguinte forma:

  ```js
  {
    "id": 1,
    "name": "Keanu Reeves",
    "age": 56,
    "date": {
      "datedAt": "22/10/2019",
      "rate": 4
    }
  }
  ```

### 6 - Crie o endpoint DELETE `/crush/:id`

#### Os seguintes pontos serão avaliados:

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- O endpoint deve deletar um crush baseado no id da rota. Devendo retornar o `status 200`, com o seguinte corpo:

  ```js
  { "message": "Crush deletado com sucesso" }
  ```


### 7 - Crie o endpoint GET `/crush/search?q=searchTerm`

#### Os seguintes pontos serão avaliados:

- O endpoint deve retornar um array de crushs que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`, com o seguinte corpo:

  ```
  /search?q=Ke
  ```

  ```js
  [
    {
      id: 1,
      name: "Keanu Reeves",
      age: 56,
      date: {
        datedAt: "22/10/2019",
        rate: 5,
      },
    }
  ];
  ```

- A requisição deve ter o token de autenticação nos headers.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```js
    {
      "message": "Token inválido"
    }
    ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint devera retornar um array com todos os crushs cadastrados, assim como no endpoint GET `/crush`, com um `status 200`.

- Caso nenhum crush satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

**Dica** é importante ter atenção se essa rota não entra em conflito com as outras, já que a ordem das rotas faz diferença na interpretação da aplicação

---
