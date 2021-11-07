const taskService = require('../services/taskService');

class TaskController {
    async newTask(req, res, next) {
        try {
            const {description, categoryId, userId} = req.body
            const newTask = await taskService.createTask(description, userId, categoryId)
            return res.json(newTask)
        } catch (e) {
            next(e)
        }
    }

    async deleteTask(req, res, next) {
        try {
            const {id} = req.params
            await taskService.deleteTask(id)
            return res.json({message: "Task Deleted"})
        } catch (e) {
            next(e)
        }
    }

    async getAllTask(req, res, next) {
        try {
            const {userId} = req.params
            const allTasks = await taskService.getAll(userId)
            return res.json(allTasks)
        } catch (e) {
            next(e)
        }
    }

    async completeTask(req, res, next) {
        try {
            const {id} = req.params
            const completedTask = await taskService.completeTask(id)
            return res.json(completedTask)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new TaskController()