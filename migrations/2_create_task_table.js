'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      creatorId: {
        type: Sequelize.INTEGER
      },
      creator: {
        type: Sequelize.STRING,
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      assignedToId: {
        type: Sequelize.INTEGER
      },
      assignedTo: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      state: {
        type: Sequelize.STRING
      },
});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  }
};