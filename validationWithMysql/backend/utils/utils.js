const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    // console.log("hash password", hash);
    return hash;
}

const comparePassword = async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    return match;
}

const generateToken = (user) => {
    const token = jwt.sign(user, 'mySecretKey');
    return token;
}

const verifyToken = (token) => {
    const user = jwt.verify(token, 'mySecretKey');
    return user;
}

module.exports = { comparePassword, hashPassword, generateToken, verifyToken };