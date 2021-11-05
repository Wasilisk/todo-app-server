const bcrypt = require('bcrypt')
const ApiError = require('../errors/apiError')
const UserRepository = require('../repositories/userRepository')

class UserService {
    async registration(email, password, username) {
        const candidate = await UserRepository.findUser(email);
        if (candidate) {
            throw ApiError.badRequest(`Користувач з поштовим адресом ${email} вже існує`);
        }
        const hashPassword = await bcrypt.hash(password, 5);

        const user = await UserRepository.createUser(email, hashPassword, username);

        return user;
    }

    async login(email, password) {
        const user = await UserRepository.findUser(email);
        if (!user) {
            throw ApiError.badRequest('Користувач з таким email не знайдений');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.badRequest('Невірний пароль');
        }

        return user;
    }
}

module.exports = new UserService();