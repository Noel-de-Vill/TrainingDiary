const Router = require('express')
const router = new Router()
const trainerController = require('../controllers/trainerController')
const userController = require("../controllers/userController");

router.post('/', trainerController.create)
router.get('/', trainerController.getAll)
router.put('/', trainerController.update)

module.exports = router