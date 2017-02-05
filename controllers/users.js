var express = require('express')
var router = express.Router()
let models = require('../models')

module.exports = {
  getUsers: (req, res) => {
    models.Users.findById(req.params.id).then(function (user) {
      models.User_skills.findOne({
        where: {
          UserId: req.params.id
        }
      }).then(function (user_skill) {
        user.getSkills().then(function (skill) {
          res.render('pages/index', {users: user, skills: skill, user_skill: user_skill})
        })
      })
    }).catch(function (err) {
      res.json(err)
    })
  }

  // getUsers: (req, res) => {
  //   models.Users.findAll().then(function (user) {
  //     models.User_skills.findAll().then(function (user_skill) {
  //       user.forEach(function (eachUser) {
  //         eachUser.getSkills().then(function (skill) {
  //           res.render('pages/index2', {users: user, skills: skill, user_skills: user_skill})
  //         })
  //       })
  //     })
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // }

  // getUser: (req, res) => {
  //   models.Users.findById(req.params.id).then(function (data) {
  //     res.send({user: data})
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // },
  // createUser: (req, res) => {
  //   models.Users.create({
  //     username: req.body.username,
  //     password: hash.generate(req.body.password),
  //     role: req.body.role,
  //     createdAt: new Date(),
  //     updatedAt: new Date()
  //   }).then(function (data) {
  //     res.json({data})
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // },
  // deleteUser: (req, res) => {
  //   models.Users.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (data) {
  //     res.send(`Delete user with ID: ${req.params.id}`)
  //   }).catch(function (err) {
  //     res.json(err)
  //   })
  // },
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
