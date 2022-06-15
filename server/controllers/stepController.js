const {Step} = require('../models/models')
const ApiError = require('../error/ApiError');

class StepController {
    async create(req, res) {
        const {title, description, macrocycleId} = req.body
        const step = await Step.create({title, description, macrocycleId})
        return res.json(step)
    }

    async getAll(req, res) {
        const step = await Step.findAll()
        return res.json(step)
    }

}

module.exports = new StepController()