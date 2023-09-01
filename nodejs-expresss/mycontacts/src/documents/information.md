# Notas de Aprendizado | JStack

## Backend | Nodejs e Express

### Folder Structure

```js
src
├── controllers
│   └── Controller.js
├── index.js
├── middlewares
│   └── Middleware.js
├── repositories
│   └── Repository.js
├── routes
│   └── routes.js
└── index.js
```

### Parttern Singleton

File Exemple: `src/index.js`

O padrão Singleton é um padrão de projeto que garante que uma classe
tenha apenas uma instância e fornece um ponto global de acesso a ela.
Com isso é possível ter um único objeto que armazena e compartilha
informações entre diferentes partes da aplicação.

Exemplo de uso: Conexão com o banco de dados

### Controllers

File Exemple: `src/controllers/Controller.js`

O padrão Controller é um padrão de projeto que abstrai a lógica das
rotas, facilitando a manutenção e testabilidade do código. Sendo uma
camada entre as rotas e o banco de dados, o Controller é responsável
por fazer as operações de CRUD (Create, Read, Update e Delete) no banco
de dados.

**Parttern Development:** index, show, store, update, delete

- Index: Listagem de registros
- Show: Exibir um único registro
- Store: Criar um registro
- Update: Alterar um registro
- Delete: Remover um registro

### Pattern Repository

File Exemple: `src/repositories/Repository.js`

O padrão Repository é um padrão de projeto que abstrai a comunicação
entre a aplicação e o banco de dados, facilitando a manutenção e
testabilidade do código. Sendo uma camada entre os controllers e o
banco de dados, o Repository é responsável por fazer as operações
de CRUD (Create, Read, Update e Delete) no banco de dados.

**Parttern Development:** findAll, findById, create, update, delete

### Middlewares

São funções que recebem e retornam requisições e respostas.
Podem ser utilizados para:

- Interromper requisições
- Alterar dados da requisição
- Alterar dados da resposta
- Finalizar a requisição
- Executar outras lógicas
- Definit como as rotas serão acessadas, se serão acessadas, etc.

 **No Express, os middlewares são executados na ordem em que são declarados.**

 Para que um middleware interrompa uma requisição, é necessário que ele
 retorne uma resposta.

 Para que um middleware altere dados da requisição, é necessário que ele
 altere o objeto req.

 Para que um middleware altere dados da resposta, é necessário que ele
 altere o objeto res.

 Para que um middleware finalize a requisição, é necessário que ele
 chame a função next.

 Para que um middleware execute outras lógicas, é necessário que ele
 execute a função next.
