// @flow

import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import dbConfig from '../../config/config';

import fs from 'fs';
import path from 'path';


const basename  = path.basename(__filename);
const db = {};

dotenv.config();

const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV]);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;