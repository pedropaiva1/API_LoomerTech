const express = require('express')

const UserController = require('./controllers/UserController')
const ImmobileController = require('./controllers/ImmobileController')

const authMiddleware = require('./middlewares/auth')

const routes =express.Router()


routes.post('/user', UserController.create)
routes.post('/auth', UserController.auth)
routes.get('/user/:user_id?', authMiddleware, UserController.index)
routes.post('/update/user/:user_id', authMiddleware, UserController.update)
routes.delete('/delete/user/:user_id', authMiddleware, UserController.delete)

routes.post('/users/:user_id/immobile', ImmobileController.create)
routes.get('/users/:user_id/immobile', ImmobileController.index)

module.exports = routes