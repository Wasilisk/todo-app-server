const Router = require('express').Router;
const userRouter = require('./userRouter')
const taskRouter = require('./taskRouter')
const categoryRouter = require('./categoryRouter')

const router = new Router();

router.use('/user', userRouter);
router.use('/task', taskRouter);
router.use('/category', categoryRouter)

module.exports = router;