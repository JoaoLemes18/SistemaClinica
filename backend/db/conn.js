const { Sequelize }  = require('sequelize')

const sequelize = new Sequelize('vinnisbarber', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize