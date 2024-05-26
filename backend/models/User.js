const { DataTypes } = require('sequelize')
const sequelize = require('../db/conn')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        required: true
    },

    email: {
        type: DataTypes.STRING,
        required: true,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        required: true
    }, 

    token_auth: {
        type: DataTypes.STRING,
        require: true
    }
})

module.exports = User