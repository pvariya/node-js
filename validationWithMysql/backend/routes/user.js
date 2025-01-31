const express = require('express');
const userRouter = express.Router();
const { signup, login } = require('../controller/userController');


userRouter.post('/signup', signup);
userRouter.post('/login', login);


module.exports = userRouter;