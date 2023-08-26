/* Controllers | CRUD Users
  * São responsáveis por receber as requisições, processar os dados e 
  * devolver uma resposta para o cliente, afim de manter a 
  * regra de negócio da aplicação com base no que foi solicitado.
*/

const users = require('../mocks/users');
const products = require('../mocks/products');
const sortedData = require('../utils/orderData');

module.exports = {
  listUsers(req, res) {
    console.log(req.query);

    const { order } = req.query;

    const sortedUsers = sortedData.orderData(users, order);

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(sortedUsers));
  },
  listProducts(req, res) {
    console.log(req.query);

    const { order } = req.query;
    const sortedProducts = sortedData.orderData(products, order);

    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(sortedProducts));
  },
}