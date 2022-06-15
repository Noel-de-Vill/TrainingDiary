const Router = require('express')
const router = new Router()
const stepController = require('../controllers/stepController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('TRAINER'), stepController.create)
router.get('/', stepController.getAll)

module.exports = router