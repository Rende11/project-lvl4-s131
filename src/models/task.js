// @flow

const errorMessages = {
  notEmpty: () => 'The field should be filled',
  len: (min, max) => `Min string length ${min} characters, max string length ${max} characters`,
  isEmail: () => 'Not a valid email format',
};

export default (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
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
    description: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    assignedToId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Task.associate = (models) => {
    Task.belongsToMany(models.Tag, { through: models.TaskTag });
    Task.belongsTo(models.Status, { foreignKey: 'status' });
    Task.belongsTo(models.User, { as: 'creator' });
    Task.belongsTo(models.User, { as: 'assignedTo' });
  };
  return Task;
};
