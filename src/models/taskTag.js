// @flow

export default (sequelize, DataTypes) => {
  const TaskTag = sequelize.define('TaskTag', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
  });

  TaskTag.associate = (models) => {
    models.Task.belongsToMany(models.Tag, { through: models.TaskTag });
    models.Tag.belongsToMany(models.Task, { through: models.TaskTag });
  };
  return TaskTag;
};
