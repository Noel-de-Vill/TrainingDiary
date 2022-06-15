const {Diary} = require('../models/models')
const ApiError = require('../error/ApiError');

class DiaryController {
    async create(req, res) {
        const {date, weight, numberoftimes, numberofex, planId} = req.body
        const diary = await Diary.create({date, weight, numberoftimes, numberofex, planId})
        return res.json(diary)
    }

    async getAll(req, res) {
        const diary = await Diary.findAll()
        return res.json(diary)
    }

}

module.exports = new DiaryController()