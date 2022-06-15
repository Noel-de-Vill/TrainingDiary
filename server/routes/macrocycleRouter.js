const Router = require('express')
const router = new Router()
const macrocycleController = require('../controllers/macrocycleController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('TRAINER'), macrocycleController.create)
router.get('/', macrocycleController.getAll)

module.exports = router