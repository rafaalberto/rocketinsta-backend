const express = require('express')

const multer = require('multer')
const uploadConfig = require('./config/upload')
const upload = multer(uploadConfig)

const routes = new express.Router()
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')

routes.get('/posts', PostController.index)
routes.post('/posts', upload.single('image'), PostController.store)

routes.post('/posts/:id/like', LikeController.store)

module.exports = routes
