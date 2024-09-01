const User = require("./models/user.shema.js");

getUser = async (req, res) => {
  let data = await User.find();
  res.send(data);
};

creatUser = async (req, res) => {
  let data = await User.create(req.body);
  res.status(201).send(data);
};

module.exports = { getUser, creatUser };
