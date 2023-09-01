const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {

  // Listar todos os registros
  async index(req, res) {
    const contacts = await ContactsRepository.findAll();

    res.json(contacts);
  }

  // Obter um registro
  async show(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not found
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(contact);
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  // Deletar um registro
  async delete(req, res) {
    const { id } = req.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not found
      return res.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);

    // 204: No content
    res.sendStatus(204)
  }
}

// Singleton pattern
module.exports = new ContactController();
