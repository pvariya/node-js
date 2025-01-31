const User = require("../models/user");

const createUser = async (user) => {
    // console.log("create",user);
    
    const newUser = await User.create(user);
    return newUser;
}

const findUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
}


const findUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

const updatedUser = async (id, data) => {
    const updatedUser = await User.findByPk(id);
    updatedUser.update(data);
    return updatedUser;
}

const deleteUser = async (id) => {
    const deletedUser = await User.findByPk(id);
    deletedUser.destroy();
    return deletedUser;
}

module.exports = { createUser, deleteUser, updatedUser, findUserByEmail, findUserById };