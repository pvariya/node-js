const {Router}= require("express")
const { getAllUser, postUser, login } = require("../controllers/userController")
const userRouter = Router()

userRouter.get('/',getAllUser)
userRouter.post('/postUser',postUser)
userRouter.post('/logIn',login)
// render
userRouter.get('/index',(req,res)=>{
    res.render('index')
})

userRouter.get('/singup',(req,res)=>{
    res.render('singup')
})

userRouter.get('/login',(req,res)=>{
    res.render('login')
})



module.exports = userRouter;