const User = require("../models/user.schema")

const getAllUser = async (req, res) => {
    let data = await User.find()
    res.send(data)
}


const postUser = async (req, res) => {
    let { username, password, email } = req.body

    let isExist = await User.findOne({ email: email })
    if (isExist) {
        return res.status(400).json({ message: "User already exists" })
    }
    let data = await User.create(req.body)
    res.send(data)
}


const login = async (req, res) => {
    let { email, password } = req.body
    let user = await User.findOne({ email: email })
    if (!user) {
        return res.send({ msg: "User not found" })
    }
    if (user.password != password) {
        return res.send({ msg: "Password mismatch" })
    }
    res.cookie("id",user.id).send({user,msg:"logged in successfully"})
}
module.exports = { getAllUser, postUser,login}