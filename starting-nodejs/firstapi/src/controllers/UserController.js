/* Controllers | CRUD Users
  * São responsáveis por receber as requisições, processar os dados e 
  * devolver uma resposta para o cliente, afim de manter a 
  * regra de negócio da aplicação com base no que foi solicitado.
*/

const users = require('../mocks/users');
const products = require('../mocks/products');

module.exports = {
  listUsers(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(users));
  },
  listProducts(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(products));
  },
}