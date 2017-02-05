'use strict'

let faker = require('faker')

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
}
