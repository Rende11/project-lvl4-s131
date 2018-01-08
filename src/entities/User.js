// @flow

import uuid from 'uuid-js';
import Sequelize from 'sequelize';

export default connect => connect.define('user', {
  uid: {
    type: Sequelize.STRING,
    defaultValue: uuid.create().hex,
  },
  firstName: {
    type: Sequelize.STRING,
    len: [3, 20],
  },
  lastName: {
    type: Sequelize.STRING,
    len: [3, 20],
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: 'active',
  },
});
