const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Immobile = require('../models/Immobile')

const connection = new Sequelize(dbConfig)

User.init(connection)
Immobile.init(connection)

User.associate(connection.models)
Immobile.associate(connection.models)

module.exports = connection