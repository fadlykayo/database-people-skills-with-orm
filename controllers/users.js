var express = require('express')
var router = express.Router()
let models = require('../models')

module.exports = {
  getUser: (req, res) => {
    models.Users.findById(req.params.id).then(function (user) {
      user.getSkills().then(function (skill) {
        res.send({User: user, Skill: skill})
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
        SkillId: req.params.skillid
      }
    }).then(function (user_skill) {
      user_skill.update({
        score: req.body.score
      }).then(function (data) {
        res.send({User_skill: data})
      }).catch(function (err) {
        res.send(err)
      })
    }).catch(function (err) {
      res.send(err)
    })
  },
  addSkill: (req, res) => {
    models.Skills.create({
      name: req.body.skillname
    }).then(function (skill) {
      models.User_skills.create({
        UserId: req.params.id,
        SkillId: skill.dataValues.id
      }).then(function (data) {
        res.send({Skill: req.body.skillname, User_skill: data})
      }).catch(function (err) {
        res.send(err)
      })
    }).catch(function (err) {
      res.send(err)
    })
  },
  removeSkill: (req, res) => {
    models.User_skills.destroy({
      where: {
        UserId: req.params.id,
        SkillId: req.params.skillid
      }
    }).then(function () {
      models.Skills.destroy({
        where: {
          id: req.params.skillid
        }
      }).then(function () {
        res.status(200).json(`Deleted Skill with ID ${req.params.skillid} of UserId ${req.params.id}`)
      })
    }).catch(function (err) {
      res.send(err)
    })
  }
}
