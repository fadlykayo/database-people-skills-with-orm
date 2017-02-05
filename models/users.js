'use strict'
module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Users.belongsToMany(models.Skills, {through: 'User_skills'})
      }
    }
  })
  return Users
}
