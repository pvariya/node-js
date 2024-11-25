const { Router } = require("express");
const { signUp, logIn, getUser } = require("../controller/user.controller");

const userRouter = Router();

userRouter.post("/signup",signUp)
userRouter.post("/login",logIn)
userRouter.get("/",getUser)

module.exports = userRouter;
