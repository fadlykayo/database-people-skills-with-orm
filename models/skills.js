'use strict'
module.exports = function (sequelize, DataTypes) {
  var Skills = sequelize.define('Skills', {
    name: {
      type: DataTypes.STRING,
      validate: {
        isUniqued: function (value, next) {
          Skills.findAll({
            where: {
              name: value
            }
          }).then(function (data) {
            if (data.length > 0) {
              return next('Skill already exist')
            }
            return next()
          })
        }
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        Skills.belongsToMany(models.Users, {through: 'User_skills'})
      }
    }
  })
  return Skills
}
