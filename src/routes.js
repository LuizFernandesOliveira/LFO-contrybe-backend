const express = require('express')

//iniciando o sitema de rotas
const routes = express.Router()

//importando os controllers
const UserController = require('./controllers/UserController')
const PostController = require('./controllers/PostController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


//rotas
routes.post('/sessions', SessionController.create)

routes.route('/users')
    .get(UserController.index)
    .post(UserController.create)

routes.get('/profile', ProfileController.index)

routes.route('/posts')
    .get(PostController.index)
    .post(PostController.create)

routes.delete('/posts/:id', PostController.delete)

//exportando as rotas
module.exports = routes