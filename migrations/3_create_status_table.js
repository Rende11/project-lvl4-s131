'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Statuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updatedAt: {
        type: SequelizeA.DATE,
        defaultValue: Date.now()
      },
      state: {
        type: Sequelize.STRING
      },
});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Statuses');
  }
};