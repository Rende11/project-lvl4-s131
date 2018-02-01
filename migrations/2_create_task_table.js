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
        type: Sequelize.STRING
      },
      creator: {
        type: Sequelize.STRING
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
      }
});
  },
  down: (queryInterface, Sequelize) => {
    //return queryInterface.dropTable('Tasks');
  }
};