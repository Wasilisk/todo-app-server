const ApiError = require('../errors/apiError');
const userService = require('../services/userService');
const {validationResult} = require('express-validator');

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return next(ApiError.badRequest('Помилка при валідації'), errors.array())
            }
            const {email, password, username} = req.body
            const userData = await userService.registration(email, password, username)

            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await userService.login(email, password)
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()