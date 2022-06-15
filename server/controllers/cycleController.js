const {Cycle} = require('../models/models')
const ApiError = require('../error/ApiError');

class CycleController {
    async create(req, res) {
        const {title, dateofstart, dateoffinish, type, task, stepId} = req.body
        const cycle = await Cycle.create({title, dateofstart, dateoffinish, type, task, stepId})
        return res.json(cycle)
    }

    async getAll(req, res) {
        const cycle = await Cycle.findAll()
        return res.json(cycle)
    }

    async getElementById(req, res) {
        const {id} = req.params
        const cycle = await Cycle.findOne(
            {
                where: {id}
            },
        )
        return res.json(cycle)
    }

    async getAllByStep(req, res) {
        let {stepId} = req.query
        let cycles;
        if (stepId) {
            cycles = await Cycle.findAndCountAll({where:{stepId}})
        }
        return res.json(cycles)
    }

}

module.exports = new CycleController()