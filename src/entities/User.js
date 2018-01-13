// @flow

import uuid from 'uuid-js';
import Sequelize from 'sequelize';
import encrypt from '../utilities/encrypt';

const minLength = 3;
const maxLength = 20;

const errorMessages = {
  notEmpty: () => 'The field should be filled',
  len: (min, max) => `Min string length ${min} characters, max string length ${max} characters`,
  isEmail: () => 'Not a valid email format',
};

export default connect => connect.define('user', {
  uid: {
    type: Sequelize.STRING,
    defaultValue: uuid.create().hex,
  },
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: errorMessages.notEmpty(),
      },
      len: {
        msg: errorMessages.len(minLength, maxLength),
        min: minLength,
        max: maxLength,
      },
    },
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: errorMessages.notEmpty(),
      },
      len: {
        msg: errorMessages.len(minLength, maxLength),
        min: minLength,
        max: maxLength,
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      notEmpty: {
        args: true,
        msg: errorMessages.notEmpty(),
      },
      isEmail: {
        args: true,
        msg: errorMessages.isEmail(),
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: errorMessages.notEmpty(),
      },
    },
    set(password) {
      if (password !== '') {
        this.setDataValue('password', encrypt(password));
      } else {
        this.setDataValue('password', '');
      }
    },
  },
  state: {
    type: Sequelize.STRING,
    defaultValue: 'active',
  },
});
