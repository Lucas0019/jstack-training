/* Pattern Repository
  * O padrão Repository é um padrão de projeto que abstrai a comunicação
  * entre a aplicação e o banco de dados, facilitando a manutenção e
  * testabilidade do código. Sendo uma camada entre os controllers e o
  * banco de dados, o Repository é responsável por fazer as operações
  * de CRUD (Create, Read, Update e Delete) no banco de dados.
*/

const contacts = require('../mocks/contacts');

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

}

// Parttern Singleton => Retorna sempre a mesma instância
module.exports = new ContactsRepository();
