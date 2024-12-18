const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    loyaltyPoints: Number,
    preferences: {
        categories: [String],
    }
});

let User = mongoose.model("User", customerSchema);
module.exports = User;