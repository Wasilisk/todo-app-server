const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, allowNull: null},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, require: true},
})

const Task = sequelize.define('task', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: null},
    isCompleted: {type: DataTypes.BOOLEAN, defaultValue: false},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: null},
})

User.hasMany(Task)
Task.belongsTo(User)

User.hasMany(Category)
Category.belongsTo(User)

Category.hasMany(Task)
Task.belongsTo(Category)

module.exports = {
    User,
    Task,
    Category
}