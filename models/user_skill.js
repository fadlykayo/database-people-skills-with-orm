'use strict'
module.exports = function (sequelize, DataTypes) {
  var User_skills = sequelize.define('User_skills', {
    UserId: DataTypes.INTEGER,
    SkillId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        User_skills.belongsTo(models.Users)
        User_skills.belongsTo(models.Skills)
      }
    }
  })
  return User_skills
}
