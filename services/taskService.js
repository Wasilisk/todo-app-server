const TaskRepository = require('../repositories/taskRepository')

class TaskService {
    async createTask(description, userId, categoryId) {
        return await TaskRepository.createTask(description, userId, categoryId);
    }

    async deleteTask(id) {
        return await TaskRepository.deleteTask(id)
    }

    async getAll(userId) {
        return await TaskRepository.getAllTask(userId)
    }

    async completeTask(taskId) {
        return await TaskRepository.completeTask(taskId)
    }
}

module.exports = new TaskService();