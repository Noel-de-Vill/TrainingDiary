const {Trainer} = require('../models/models')
const ApiError = require('../error/ApiError');

class TrainerController {
    async create(req, res) {
        const {surname, name, middlename, userId} = req.body
        const infoTrainer = await Trainer.create({surname, name, middlename, userId})
        return res.json(infoTrainer)
    }

    async getAll(req, res) {
        const infoTrainer = await Trainer.findAll()
        return res.json(infoTrainer)
    }

    async update(req, res) {
        const {surname, name, middlename, userId} = req.body
        const infoTrainer = await Trainer.create({surname, name, middlename, userId})
        return res.json(infoTrainer)
    }

}

module.exports = new TrainerController()
