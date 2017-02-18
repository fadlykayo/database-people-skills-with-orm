var express = require('express')
var router = express.Router()
let models = require('../models')

module.exports = {
  getUser: (req, res) => {
    models.Users.findById(req.params.id).then(function (user) {
      models.User_skills.findOne({
        where: {
          UserId: req.params.id
        }
      }).then(function (user_skill) {
        user.getSkills().then(function (skill) {
          res.send({User: user, Skill: skill})
        })
      }).catch(function (err) {
        res.send(err)
      })
    }).catch(function (err) {
      res.send(err)
    })
  },
  getUsers: (req, res) => {
    models.User_skills.findAll({
      include: [
        {model: models.Users},
        {model: models.Skills}
      ]
    }).then(function (data) {
      res.send(data)
    }).catch(function (err) {
      res.send(err)
    })
  },
  addScore: (req, res) => {
    models.User_skills.findOne({
      where: {
        UserId: req.params.id,
        SkillId: req.body.skillid
      }
    }).then(function (skill) {
      skill.update({
        score: req.body.score
      }).then(function (data) {
        res.send({Updated_Data: data})
      })
    }).catch(function (err) {
      res.send(err)
    })
  },
  addSkill: (req, res) => {
    models.User_skills.findOne({
      where: {
        UserId: req.params.id
      }
    }).then(function () {
      models.Skills.create({
        name: req.body.skillname
      }).then(function (skill) {
        models.User_skills.create({
          UserId: req.params.id,
          SkillId: skill.dataValues.id
        }).then(function (data) {
          res.send(data)
        })
      }).catch(function (err) {
        res.send(err)
      })
    }).catch(function (err) {
      res.send(err)
    })
  }
}
