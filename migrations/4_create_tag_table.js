'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
      taskId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now(),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tags');
  }
};