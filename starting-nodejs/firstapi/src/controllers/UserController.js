/* Controllers | CRUD Users
  * São responsáveis por receber as requisições, processar os dados e 
  * devolver uma resposta para o cliente, afim de manter a 
  * regra de negócio da aplicação com base no que foi solicitado.
*/

let users = require('../mocks/users');
const sortedData = require('../utils/orderData');

module.exports = {
  listUsers(req, res) {
    console.log(req.query);

    const { order } = req.query;

    const sortedUsers = sortedData.orderData(users, order);

    res.send(200, sortedUsers);
  },

  getUserById(req, res) {

    const { id } = req.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      return res.send(400, { error: 'User not found' });
    } 

    res.send(200, user);
  },

  createUser(req, res) {

    const { body } = req;

    const lastUserId = users[users.length - 1].id;
    const newUser = {
      id: lastUserId + 1,
      name: body.name,
      job: body.job,
    };

    users.push(newUser);

    res.send(200, {
      message: "User created",
      type: "POST",
      user: body,
    });

  },

  updateUser(req, res) {

    let { id } = req.params;
    const { name, job } = req.body;

    id = Number(id);

    const userExists = users.find((user) => user.id === id);

    if (!userExists) {
      return res.send(400, { error: 'User not found' });
    }

    users = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name,
          job,
        }
      }

      return user;
    });

    res.send(200, { 
      message: 'User updated', 
      type: 'PUT', 
      user: { id, name } 
    });

  },

  deleteUser(req, res) {

    let { id } = req.params;

    id = Number(id);

    users = users.filter((user) => user.id !== id);

    res.send(200, { 
      message: 'User deleted', 
      type: 'DELETE', 
      users 
    });

  }
}