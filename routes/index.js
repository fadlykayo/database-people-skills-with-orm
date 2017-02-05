var express = require('express')
var router = express.Router()
let models = require('../models')

/* GET home page. */
router.get('/', function (req, res, next) {
  models.User_skills.findAll({raw: true}).then(function (data) {
    res.render('pages/index', {user_skills: data})
  })
})

router.get('/user', function (req, res, next) {
  models.Users.findAll({raw: true}).then(function (data) {
    res.render('pages/users', {users: data})
  })
})

router.get('/skill', function (req, res, next) {
  models.Skills.findAll({raw: true}).then(function (data) {
    res.render('pages/skills', {skills: data})
  })
})

module.exports = router
