class ContactController {
  // Partterns: index, show, store, update, delete
  index(req, res) {
    // Listar todos os registros
    res.send('List Contacts');
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
