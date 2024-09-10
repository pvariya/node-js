const { Router } = require('express')
const uploads = require('../controllers/userController')

const userRouter = Router()

userRouter.post('/uploads', uploads.single("img"), (req,res) => {
    console.log(req.file);
    res.send("success")
})
          
module.exports = userRouter