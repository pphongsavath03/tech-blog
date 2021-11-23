const { User } = require('../models');

const userData = [{
  username: 'TonyStark',
  password: 'password1'

},
{
  username: 'NatalieRomanoff',
  password: 'password2'
},
{
  username: 'CaptainAmerica',
  password: 'password3'
},
{
  username: 'ShieldAgent',
  password: 'password4'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;