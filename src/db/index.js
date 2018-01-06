// @flow
/*
import Sequelize from 'sequelize';
import dbConfig from '../../config/config.js';

const env = process.env.NODE_ENV || 'test';
const config = dbConfig[env];
/*let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config);
}

/*
const mapping = {
  test: () => new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    storage: 'database.sqlite',
  }),
  production: () => new Sequelize('database', 'username', 'password', {
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }),
};
const sequelize = mapping[process.env.NODE_ENV || 'test']();

sequelize
  .authenticate()
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));

*/
//const sequelize = new Sequelize(process.env[config.use_env_variable]);

import Sequelize from 'sequelize';
import dbConfig from '../../config/config.js';

console.log(process.env.NODE_ENV, 'Process env');
export default new Sequelize(dbConfig[process.env.NODE_ENV]);