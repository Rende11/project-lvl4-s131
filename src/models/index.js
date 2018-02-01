// @flow

import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

import dbConfig from '../../config/config';

const basename = path.basename(__filename);
const db = {};
const env = dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

console.log(env);
console.log(process.env.NODE_ENV);
const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV]);

fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


Promise.all(Object.keys(db).map(key => db[key].sync()));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
