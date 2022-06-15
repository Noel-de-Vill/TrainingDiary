const {Plan} = require('../models/models')
const ApiError = require('../error/ApiError');

class PlanController {
    async create(req, res) {
        const {numberoftimes, numberofex, extypeId, sportsmanId, cycleId} = req.body
        const plan = await Plan.create({numberoftimes, numberofex,  extypeId, sportsmanId, cycleId})
        return res.json(plan)
    }

    async getAll(req, res) {
        const plan = await Plan.findAll()
        return res.json(plan)
    }

}

module.exports = new PlanController()