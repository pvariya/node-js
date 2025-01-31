const { Sequelize } = require('sequelize')
const db = require('../config/db');
const { ulid } = require('ulid');
// console.log("ulid", ulid());

const User = db.define('User', {
    id: {
        type: Sequelize.STRING,
        defaultValue: () => ulid(),
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

module.exports = User;