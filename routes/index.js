let express = require('express')
let router = express.Router()
let userController = require('../controllers/users')
let models = require('../models')

/* GET home page. */
router.get('/:id', userController.getUser)

router.get('/', userController.getUsers)

router.post('/addscore/:id', userController.addScore)

router.post('/addskill/:id', userController.addSkill)

// router.get('/skill', function (req, res, next) {
//   models.Skills.findAll({raw: true}).then(function (data) {
//     res.render('pages/skills', {skills: data})
//   })
// })

module.exports = router
