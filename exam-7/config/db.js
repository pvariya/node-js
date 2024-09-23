const mongoose = require('mongoose');

const dbConnetc=async()=>{
    await mongoose.connect("mongodb://localhost:27017/exam-7")
    console.log("Connected to Mongo")   
}

module.exports=dbConnetc