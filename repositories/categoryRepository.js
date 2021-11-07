const {Category} = require('../models/models')

class CategoryRepository {

    async createCategory(name, userId) {
        return await Category.create({name, userId});
    }

    async deleteCategory(id) {
        return await Category.destroy({where: {id}});
    }

    async getAllCategory(userId) {
        return await Category.findAll({where: {userId}});
    }
}

module.exports = new CategoryRepository();