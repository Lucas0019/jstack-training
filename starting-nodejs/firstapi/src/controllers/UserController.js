/* Controllers | CRUD Users
  * São responsáveis por receber as requisições, processar os dados e 
  * devolver uma resposta para o cliente, afim de manter a 
  * regra de negócio da aplicação com base no que foi solicitado.
*/

const users = require('../mocks/users');
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
}