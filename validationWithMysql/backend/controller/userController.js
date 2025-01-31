const { register, logIn } = require("../service/userService");

const signup = async (req, res) => {
    const {name, email, password } = req.body;
    console.log(password);
    
    // if (!email || !password || !name) {
    //     return res.status(400).json({ message: "Please fill all the fields" })
    // }
    try {
        let user = await register({ email: email, password: password, name: name })
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" })
    }
    try {
        let user = await logIn({ email: email, password: password })
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}
module.exports = { signup, login }