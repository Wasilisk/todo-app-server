const {Task} = require('../models/models')

class TaskRepository {

    async createTask(description, userId, categoryId) {
        return await Task.create({description, userId, categoryId});
    }

    async deleteTask(id) {
        return await Task.destroy({where: {id}});
    }

    async getAllTask(userId) {
        return await Task.findAll({where: {userId}});
    }

    async completeTask(id) {
        const task = await Task.findOne({where: {id}})
        task.isCompleted = true;
        return await task.save()
    }
}

module.exports = new TaskRepository();