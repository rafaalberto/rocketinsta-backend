require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const server = require('http').Server(app)
const io = require('socket.io')(server)

const user = 'rocketinsta'
const password = '2bsLVYVdR2NiiFxu'

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-6sdqi.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true
})

app.use((req, res, next) => {
    req.io = io
    next()
})

app.use(cors())
app.use(require('./routes'))
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
server.listen(process.env.PORT || 3001)

