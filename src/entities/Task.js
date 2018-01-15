// @flow

import Sequelize from 'sequelize';

const errorMessages = {
  notEmpty: () => 'The field should be filled',
};

export default connect => connect.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: errorMessages.notEmpty(),
      },
    },
  },
  description: {
    type: Sequilize.STRING,
  },
  status: {
    type: Sequilize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: errorMessages.notEmpty(),
      },
    },
  },
  creator: {
    type: Sequilize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: errorMessages.notEmpty(),
      },
    },
  },
  assignedTo: {
    type: Sequilize.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: errorMessages.notEmpty(),
      },
    },
  },
  assignedTo: {
    type: Sequilize.STRING,
  },
});
