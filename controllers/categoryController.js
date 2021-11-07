const categoryService = require('../services/categoryService');

class CategoryController {
    async newCategory(req, res, next) {
        try {
            const {name, userId} = req.body
            const newCategory = await categoryService.createCategory(name, userId)

            return res.json(newCategory)
        } catch (e) {
            next(e)
        }
    }

    async deleteCategory(req, res, next) {
        try {
            const {id} = req.params
            await categoryService.deleteCategory(id)
            return res.json({message: "Category Deleted"})
        } catch (e) {
            next(e)
        }
    }

    async getAllCategory(req, res, next) {
        try {
            const {id} = req.params
            const allCategories =  await categoryService.getAll(id)
            return res.json(allCategories)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new CategoryController()