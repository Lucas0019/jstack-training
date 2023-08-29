const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '(00) 0000-0000',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Carla Doe',
    email: 'carla.doe@email.com',
    phone: '(00) 0000-0000',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Maria Doe',
    email: 'maria.doe@email.com',
    phone: '(00) 0000-0000',
    category_id: uuid(),
  }

]


module.exports = { contacts };
