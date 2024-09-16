const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roal: String
})

let User = mongoose.model("User", UserSchema)
module.exports = User