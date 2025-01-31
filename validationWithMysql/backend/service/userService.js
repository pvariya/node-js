const { findUserByEmail, createUser } = require("../repository/userRepository")
const { hashPassword, generateToken, comparePassword } = require("../utils/utils")

const register = async (data) => {
    console.log("data", data);
    
    let user = await findUserByEmail(data.email)
    if (user) {
        throw new Error("User already exists")
    }
    let hash = await hashPassword(data.password)
    // console.log('hash', hash);
    
    let userdata = await createUser({
        name: data.name,
        email: data.email,
        password: hash
    })

    // console.log("userdata",userdata);
    

    let token = await generateToken({
        id: userdata.id,
        email: userdata.email,
        name: userdata.name
    })

    return {
        userdata,
        token
    }
}

const logIn = async (data) => {
    let user = await findUserByEmail(data.email);
    if (!user) {
        throw new Error("User not found");
    }

    let pass = await comparePassword(user.password, data.password);
    if (!pass) {
        throw new Error("Invalid password");
    }

    let token = await generateToken({
        id: user.id,
        email: user.email,
        name: user.name
    });

    return {
        user,
        token
    };
};



module.exports = { register, logIn }