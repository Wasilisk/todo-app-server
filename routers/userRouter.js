const Router = require('express').Router;
const userController = require('../controllers/userController')
const userRouter = new Router();
const {body} = require('express-validator')

userRouter.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration);
userRouter.post('/login', userController.login);

module.exports = userRouter;