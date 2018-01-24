// @flow

const errorMessages = {
  notEmpty: () => 'The field should be filled',
};

export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: errorMessages.notEmpty(),
        },
      },
    },
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
        return models;
      },
    },
  });
  return Tag;
};
