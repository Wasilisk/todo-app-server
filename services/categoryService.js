const CategoryRepository = require('../repositories/categoryRepository')

class CategoryService {
    async createCategory(name, userId) {
        return await CategoryRepository.createCategory(name, userId);
    }

    async deleteCategory(id) {
        return await CategoryRepository.deleteCategory(id)
    }

    async getAll(userId) {
        return await CategoryRepository.getAllCategory(userId)
    }
}

module.exports = new CategoryService();