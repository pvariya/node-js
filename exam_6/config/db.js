const mongoose = require('mongoose');

const dbConnect = async () =>{
    await mongoose.connect("mongodb://localhost:27017/exam_6")
    console.log("connect to MongoDB");
}

module.exports = dbConnect;