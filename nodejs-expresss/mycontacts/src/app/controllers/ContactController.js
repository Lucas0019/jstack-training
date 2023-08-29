const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Partterns: index, show, store, update, delete

  // Listar todos os registros
  async index(req, res) {
     const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton pattern
module.exports = new ContactController();
