const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '(00) 0000-0000',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Carla Doe',
    email: 'carla.doe@email.com',
    phone: '(00) 0000-0000',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Maria Doe',
    email: 'maria.doe@email.com',
    phone: '(00) 0000-0000',
    category_id: v4(),
  }

]


module.exports = { contacts };
