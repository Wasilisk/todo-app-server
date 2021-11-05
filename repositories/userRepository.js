const {User} = require('../models/models')

class UserRepository {

    async createUser(email, password, username) {
        return await User.create({email, password, username});
    }

    async findUser(email) {
        return await User.findOne({where: {email}});
    }
}

module.exports = new UserRepository();