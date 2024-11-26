const { Router } = require("express");
const { signUp, upload, login, getUser } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.post("/signup", upload.single("img"), signUp);
userRouter.post("/login", login);
userRouter.get("/",getUser)

module.exports = userRouter;
