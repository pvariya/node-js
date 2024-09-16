const User = require("../models/userSchema")


const createUser = async (req, res) => {
    let { email } = req.body;
    let isUser = await User.findOne({ email: email });
    if (isUser) {
        return res.status(400).send({ message: "User already exists" });
    }
    let data = await User.create(req.body)
    res.status(201).send({
        message: "User created successfully",
        user: data,
    });
};


const logInUser = async (req, res) => {
    let { email, password } = req.body;
    let isUser = await User.findOne({ email: email });
    if (!isUser) {
        return res.status(404).send({ message: "User not found" });
    }
    if (isUser.password !== password) {
        return res.status(401).send({ message: "Incorrect password" });
    }
    res.status(200).send({
        message: "User logged in successfully",
        user: isUser,
    });
};

module.exports = { createUser,logInUser }
// const getUser = async (req, res) => {

//     let data = await User.find()
//     res.send(data)

// }

// const createUser = async (req, res) => {

//     let { username, email, password } = req.body;
//     let data = await User.create(req.body)
//     res.send(data)

// }

// const updateUser = async (req, res) => {

//     let { id } = req.params
//     let data = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.send(data);

// }

// const deleteUser = async (req, res) => {

//     let { id } = req.params;
//     let data = await User.findByIdAndDelete(id)
//     res.send(data);

// }



// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + file.originalname);
//     },
// });

// const upload = multer({
//     storage: storage,
// });



// module.exports = { getUser, createUser, updateUser, deleteUser, upload }