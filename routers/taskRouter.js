const Router = require('express').Router;
const taskController = require('../controllers/taskController')
const taskRouter = new Router();

taskRouter.post('/create', taskController.newTask);
taskRouter.get('/:userId', taskController.getAllTask)
taskRouter.delete('/delete/:id', taskController.deleteTask);
taskRouter.post('/complete/:id', taskController.completeTask);

module.exports = taskRouter;