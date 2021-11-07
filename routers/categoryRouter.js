const Router = require('express').Router;
const categoryController = require('../controllers/categoryController')
const categoryRouter = new Router();

categoryRouter.post('/create', categoryController.newCategory);
categoryRouter.delete('/delete/:id', categoryController.deleteCategory);
categoryRouter.get('/:id', categoryController.getAllCategory)

module.exports = categoryRouter;