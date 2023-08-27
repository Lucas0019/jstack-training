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

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(sortedUsers));
  },

  getUserById(req, res) {

    const { id } = req.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user) {
      res.writeHead(400, {'Content-Type': 'application/json'})
      res.end(JSON.stringify({ error: 'User not found' }));
    } else {
      res.writeHead(200, {'Content-Type': 'application/json'})
      res.end(JSON.stringify(user));
    }
  },
}