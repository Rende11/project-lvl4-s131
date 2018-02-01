// @flow

import uuid from 'uuid-js';
import encrypt from '../utilities/encrypt';

const minLength = 3;
const maxLength = 20;

const errorMessages = {
  notEmpty: () => 'The field should be filled',
  len: (min, max) => `Min string length ${min} characters, max string length ${max} characters`,
  isEmail: () => 'Not a valid email format',
};

export default (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: errorMessages.notEmpty(),
        },
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'new',
      validate: {
        notEmpty: {
          args: true,
          msg: errorMessages.notEmpty(),
        },
      },
    },
    creator: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: errorMessages.notEmpty(),
        },
      },
    },
    assignedTo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: errorMessages.notEmpty(),
        },
      },
    },
    tags: {
      type: DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        return models;
      },
    },
  });
  return Task;
};
