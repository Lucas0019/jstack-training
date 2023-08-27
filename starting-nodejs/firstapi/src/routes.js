/* Routes
  * Responsável por receber as requisições e direcionar para o controller
  * que irá processar os dados e devolver uma resposta para o cliente.
  * onde o controller é responsável por manter a regra de negócio da aplicação
  * com base no que foi solicitado.
* */

const UserController = require('./controllers/UserController');


module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserById,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.createUser,
  },
  {
    endpoint: '/users/:id',
    method: 'PUT',
    handler: UserController.updateUser,
  },
  {
    endpoint: '/users/:id',
    method: 'DELETE',
    handler: UserController.deleteUser,
  },
]