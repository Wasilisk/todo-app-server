const Router = require('express').Router;
const userRouter = require('./userRouter')

const router = new Router();

router.use('/user', userRouter);

module.exports = router;