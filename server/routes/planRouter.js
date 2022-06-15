const Router = require('express')
const router = new Router()
const planController = require('../controllers/planController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('TRAINER'), planController.create)
router.get('/', planController.getAll)

module.exports = router