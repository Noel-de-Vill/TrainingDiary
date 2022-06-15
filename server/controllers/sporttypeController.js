const {Sporttype} = require('../models/models')
const ApiError = require('../error/ApiError');

class SporttypeController {
    async create(req, res) {
        const {title} = req.body
        const sporttype = await Sporttype.create({title})
        return res.json(sporttype)
    }

    async getAll(req, res) {
        const sporttype = await Sporttype.findAll()
        return res.json(sporttype)
    }

}

module.exports = new SporttypeController()