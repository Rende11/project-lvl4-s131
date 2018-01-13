// @flow

import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import dbConfig from '../../config/config';

dotenv.config();

export default new Sequelize(dbConfig[process.env.NODE_ENV]);
