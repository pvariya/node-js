const {Router} = require('express')
const { createUser, logInUser } = require('../controllers/userContoller')
const userRouter = Router()

userRouter.post("/singUp",createUser)
userRouter.post("/logIn",logInUser)

module.exports = userRouter
