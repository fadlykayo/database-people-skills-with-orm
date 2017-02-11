var express = require('express')
var router = express.Router()
let models = require('../models')

module.exports = {
  getUser: (req, res) => {
    models.Users.findById(req.params.id).then(function (user) {
      models.User_skills.findAll({
        where: {
          UserId: req.params.id
        }
      }).then(function (user_skill) {
        user.getSkills().then(function (skill) {
          res.send({Users:user, Skills:skill})
        })
      })
    }).catch(function (err) {
      res.json(err)
    })
  },
  getUsers: (req, res) => {
    models.Users.findAll().then(function (user) {
      models.User_skills.findAll().then(function (user_skill) {
        models.Skills.findAll().then(function (skill) {
          res.send({Users:user, Skills:skill, User_skills: user_skill})
        })
      })
    }).catch(function (err) {
      res.json(err)
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
        res.send({Updated_Data:data})
      })
    }).catch(function (err) {
      res.json(err)
    })
  },
  addSkill: (req,res) => {
    models.User_skills.findOne({
      where: {
        UserId: req.params.id
      }
    }).then(function () {
      models.User_skills.create({
        UserId: req.params.id,
        SkillId: req.body.skillid
      }).then(function (data) {
        res.send(data)
      })
    }).catch(function (err) {
      res.json(err)
    })
  }
  // updateUser: (req, res) => {
  //   models.Users.findById(req.params.id).then(function (findUser) {
  //     findUser.update({
  //       username: req.body.username,
  //       password: hash.generate(req.body.password),
  //       role: req.body.role,
  //       updatedAt: new Date()
  //     }).then(function (data) {
  //       res.json({data, message: 'Data has been updated'})
  //     })
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // }
}
