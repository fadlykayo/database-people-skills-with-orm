'use strict'

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
    return queryInterface.bulkInsert('User_skills', [
      {
        UserId: 5,
        SkillId: 1,
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 6,
        SkillId: 2,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 7,
        SkillId: 3,
        score: 3,
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
    return queryInterface.bulkDelete('User_skills', null, {})
  }
}
