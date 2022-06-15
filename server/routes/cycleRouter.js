const Router = require('express')
const router = new Router()
const cycleController = require('../controllers/cycleController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('TRAINER'), cycleController.create)
//router.get('/', cycleController.getAll)
router.get('/', cycleController.getAllByStep)
router.get('/:id', cycleController.getElementById)

module.exports = router