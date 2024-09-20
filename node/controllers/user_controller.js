const multer = require("multer")
const User = require("../models/user_Schema")
const { render } = require("ejs")

const getUser = async (req, res) => {
    data = await User.find()
    res.send(data)
}

const postUser = async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    let { username, password, email } = req.body
    let img
    if (req.files) {
        img = req.files.map((ele)=>ele.path)
    }

    let userData = {
        username,
        password,
        email,
        img
    }
    let data = await User.create(userData)
    res.send(data)
}

const updateUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(id, req.body, { new: true })
    res.send(data)
}

const deleteUser = async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndDelete(id)
    res.send(data)
}



const storage = multer.diskStorage({
    destination: "upload",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage
})




// index 
const hostIndex = (req, res) => {
    res.render('index')
}
module.exports = { getUser, postUser, updateUser, deleteUser, upload, hostIndex }