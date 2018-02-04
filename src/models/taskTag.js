// @flow

const errorMessages = {
  notEmpty: () => 'The field should be filled',
  len: (min, max) => `Min string length ${min} characters, max string length ${max} characters`,
  isEmail: () => 'Not a valid email format',
};

export default (sequelize, DataTypes) => {
  const TaskTag = sequelize.define('TaskTag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    taskId: {
      type: DataTypes.STRING,
    },
    tagId: {
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

  return TaskTag;
};
