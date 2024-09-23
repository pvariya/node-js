const {Router}= require("express")
const { getAllUser, postUser, login } = require("../controllers/userContoller")
const userRouter = Router()

userRouter.get('/',getAllUser)
userRouter.post('/postUser',postUser)
userRouter.post('/logIn',login)
// render
userRouter.get('/index',(req,res)=>{
    res.render('index')
})

userRouter.get('/signup',(req,res)=>{
    res.render('signup')
})

userRouter.get('/login',(req,res)=>{
    res.render('login')
})

module.exports = userRouter;