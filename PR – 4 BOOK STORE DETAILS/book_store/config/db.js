const mongoose = require('mongoose')

const dbConnect =async ()=>{
    await mongoose.connect("mongodb+srv://purv:pr-4@cluster0.oii3q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("connect to database");
}

module.exports = dbConnect