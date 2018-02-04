// @flow

const errorMessages = {
  notEmpty: () => 'The field should be filled',
  len: (min, max) => `Min string length ${min} characters, max string length ${max} characters`,
  isEmail: () => 'Not a valid email format',
};

export default (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
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
