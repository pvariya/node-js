const mongoose = require('mongoose')

const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/basic-node")
    console.log("connected to Mongo DB");
    
}
module.exports = dbConnect