const Router = require('express')
const router = new Router()
const diaryController = require('../controllers/diaryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('SPORTSMAN'), diaryController.create)
router.get('/', diaryController.getAll)

module.exports = router