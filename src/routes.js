const express = require('express')

const UserController = require('./controllers/UserController')
const ImmobileController = require('./controllers/ImmobileController')

const authMiddleware = require('./middlewares/auth')

const routes = express.Router()

//Group Users
routes.post('/user', UserController.create)
routes.get('/auth', UserController.auth)
routes.get('/user/:user_id?', authMiddleware, UserController.index)
routes.put('/update/user/:user_id', authMiddleware, UserController.update)
routes.delete('/delete/user/:user_id', authMiddleware, UserController.delete)

// GROUP Immobiles
routes.post('/user/:user_id/immobile/', authMiddleware, ImmobileController.create)
routes.get('/user/:user_id?/immobile/:immobile_id?', authMiddleware, ImmobileController.index)
routes.put('/update/user/:user_id/immobile/:immobile_id', authMiddleware, ImmobileController.update)
routes.delete('/delete/user/:user_id/immobile/:immobile_id', authMiddleware, ImmobileController.delete)

module.exports = routes