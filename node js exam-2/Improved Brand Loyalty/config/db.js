const { default: mongoose } = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/loyalty");
    console.log("connect to the database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;