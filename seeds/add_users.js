'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log(queryInterface.showAllSchemas('Users').then(res => console.log(res)));
    return queryInterface.bulkInsert('Users', [{
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }, {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};