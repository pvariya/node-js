const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username: String,
    email: String,
    pasword: String
})

const User = mongoose.model("User", userschema)
module.exports = User