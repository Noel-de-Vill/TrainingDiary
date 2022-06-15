const {Macrocycle} = require('../models/models')
const ApiError = require('../error/ApiError');

class MacrocycleController {
    async create(req, res) {
        const {title, description, sportsmanId} = req.body
        const macrocycle = await Macrocycle.create({title, description, sportsmanId})
        return res.json(macrocycle)
    }

    async getAll(req, res) {
        const macrocycle = await Macrocycle.findAll()
        return res.json(macrocycle)
    }

}

module.exports = new MacrocycleController()