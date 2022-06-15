const {Sportsman} = require('../models/models')
const ApiError = require('../error/ApiError');

class SportsmanController {
    async create(req, res) {
        const {surname, name, middlename, height, gender, birthdate, weight, trainerId, sporttypeId, userId} = req.body
        const sportsman = await Sportsman.create({surname, name, middlename, height, gender, birthdate, weight, trainerId, sporttypeId, userId})
        return res.json(sportsman)
    }

    async getAll(req, res) {
        const sportsman = await Sportsman.findAll()
        return res.json(sportsman)
    }

}

module.exports = new SportsmanController()