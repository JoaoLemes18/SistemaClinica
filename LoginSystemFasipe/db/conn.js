const { Sequelize }  = require('sequelize')

const sequelize = new Sequelize('fasipe', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        ssl: false
    }
})

module.exports = sequelize