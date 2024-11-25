const User = require("../model/user.schema");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  let { email, password, username } = req.body;

  let isExist = await User.findOne({ email });
  if (isExist) {
    return res.status(400).send({ message: "Email already exists" });
  } else {
    let hash = await bcrypt.hash(password, 10);
    let userdaata = {
      username,
      email,
      password: hash,
    };
    let user = await User.create(userdaata);
    const tokenData = {
      email: user.email,
      username: user.username,
      id: user._id,
      // password: user.password
    };
    const token = jwt.sign(tokenData, "private-key");
    // console.log(user);
    return res.send({ user, token });
  }
};


const logIn = async (req, res) => {
  let { email, password, username } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ msg: "User not found" });
  }
  let isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send({ msg: "Incorrect password" });
  }
  let data = {
    email: user.email,
    username: user.username,
    id: user._id,
  };
  let token = jwt.sign(data, "private-key");

  return res.status(200).json({
    msg: "User logged in",
    token: token,
    email: user.email,
  });
};

const getUser = async (req, res) => {
  try {
    let user = await User.find();
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};
module.exports = { signUp ,logIn,getUser };
