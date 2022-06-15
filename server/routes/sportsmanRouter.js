const Router = require('express')
const router = new Router()
const sportsmanController = require('../controllers/sportsmanController')

router.post('/', sportsmanController.create)
router.get('/', sportsmanController.getAll)

module.exports = router