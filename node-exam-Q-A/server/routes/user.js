const express = require("express");
const { signUp, login } = require("../controller/user");

const userRoute = express.Router();

userRoute.post("/signup", signUp);
userRoute.post("/login", login);

module.exports = userRoute;
