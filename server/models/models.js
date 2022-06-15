const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Sportsman = sequelize.define('sportsman', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    middlename: {type: DataTypes.STRING, allowNull: false},
    height: {type: DataTypes.DOUBLE, allowNull: false},
    gender: {type: DataTypes.ENUM('male', 'female')},
    birthdate: {type: DataTypes.DATE, allowNull: false},
    weight: {type: DataTypes.DOUBLE, allowNull: false},
})

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "SPORTSMAN"},
})

const Trainer = sequelize.define('trainer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    middlename: {type: DataTypes.STRING, allowNull: false},
})

const Sporttype = sequelize.define('sporttype', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
})

const Step = sequelize.define('step', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const Cycle = sequelize.define('cycle', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    dateofstart: {type: DataTypes.DATE},
    dateoffinish: {type: DataTypes.DATE},
    type: {type: DataTypes.STRING, allowNull: false},
    task: {type: DataTypes.STRING, allowNull: false},
})

const Diary = sequelize.define('diary', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE},
    numberoftimes: {type: DataTypes.INTEGER},
})

const Plan = sequelize.define('plan', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull: false},
    numberoftimes: {type: DataTypes.INTEGER},
    numberofex: {type: DataTypes.DOUBLE},
})

const Extype = sequelize.define('extype', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    measure: {type: DataTypes.ENUM('m', 'kg', 'times', 'min')},
})

const Macrocycle = sequelize.define('macrocycle', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const ExtypeCycle = sequelize.define('extype_cycle', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Trainer.hasMany(Sportsman)
Sportsman.belongsTo(Trainer)

Sporttype.hasMany(Sportsman)
Sportsman.belongsTo(Sporttype)

User.hasMany(Sportsman, {as: 'sportsman'})
Sportsman.belongsTo(User)

User.hasMany(Trainer, {as: 'trainer'})
Trainer.belongsTo(User)

Sportsman.hasMany(Macrocycle)
Macrocycle.belongsTo(Sportsman)

Macrocycle.hasMany(Step)
Step.belongsTo(Macrocycle)

Step.hasMany(Cycle)
Cycle.belongsTo(Step)

Plan.hasOne(Diary)
Diary.belongsTo(Plan)

Extype.hasMany(Plan)
Plan.belongsTo(Extype)

Sportsman.hasMany(Plan)
Plan.belongsTo(Sportsman)

Cycle.hasMany(Plan)
Plan.belongsTo(Cycle)

Extype.belongsToMany(Cycle, {through: ExtypeCycle})
Cycle.belongsToMany(Extype, {through: ExtypeCycle})

module.exports = {
    Sportsman,
    User,
    Sporttype,
    Step,
    Trainer,
    Cycle,
    Diary,
    Extype,
    Macrocycle,
    Plan,
    ExtypeCycle
}