module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TasksStatus', {
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
        type: Sequelize.DATE,
        defaultValue: Date.now()
      }
});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TasksStatus');
  }
};