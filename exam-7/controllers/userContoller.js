const User = require("../models/user.schema");

const getAllUser = async (req, res) => {
  let data = await User.find();
  res.send(data);
};

const postUser = async (req, res) => {
  let { username, password, email } = req.body;

  let isExist = await User.findOne({ email: email });
  if (isExist) {
    return res.status(400).json({ message: "User already exists" });
  }
  let data = await User.create(req.body);
  res.send(data);
};

const login = async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.send("user not found");
  }

  if (user.password !== password) {
    return res.send("password is incorrect");
  }

  res.cookie("id", user.id).redirect("/user/index");
};
module.exports = { getAllUser, postUser, login };
