// @flow

import Sequelize from 'sequelize';


const mapping = {
  'test': () => {
    return new Sequelize('database', 'username', 'password', {
      host: 'localhost',
      dialect: 'sqlite',
    
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      storage: 'database.sqlite',
    });
  },
  'production': () => {
    return new Sequelize('database', 'username', 'password', {
      host: 'localhost',
      dialect: 'postgres',
    
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      }
    });
  }
};
const sequelize = mapping[process.env.NODE_ENV || 'test']();

sequelize
  .authenticate()
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));


export default sequelize.define('user', {
  uid: {
    type: Sequelize.STRING,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
});

