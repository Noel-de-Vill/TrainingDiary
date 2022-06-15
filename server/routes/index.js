const Router = require('express')
const router = new Router()

const cycleRouter = require('./cycleRouter')
const diaryRouter = require('./diaryRouter')
const macrocycleRouter = require('./macrocycleRouter')
const planRouter = require('./planRouter')
const stepRouter = require('./stepRouter')
const userRouter = require('./userRouter')
const sportsmanRouter = require('./sportsmanRouter')
const trainerRouter = require('./trainerRouter')
const sporttypeRouter = require('./sporttypeRouter')


router.use('/cycle', cycleRouter)
router.use('/diary', diaryRouter)
router.use('/macrocycle', macrocycleRouter)
router.use('/plan', planRouter)
router.use('/step', stepRouter)
router.use('/user', userRouter)
router.use('/sportsman', sportsmanRouter)
router.use('/trainer', trainerRouter)
router.use('/sporttype', sporttypeRouter)

module.exports = router
