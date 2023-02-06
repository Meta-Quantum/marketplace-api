const bcrypt = require('bcryptjs');

const data = {
  users: [
    {
      name: 'adi',
      email: 'adrian.damii@yahoo.com',
      password: bcrypt.hashSync('1111', 8),
      isAdmin: true,
      isSeller: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
};

module.exports = { data };
