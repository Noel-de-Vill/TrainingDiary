const Router = require('express')
const router = new Router()
const sporttypeController = require('../controllers/sporttypeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('TRAINER'), sporttypeController.create)
router.get('/', sporttypeController.getAll)

module.exports = router