require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

// initialize app and middleware
const app = express()
app.use(cors())
app.use(bodyParser.json())

// database
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
})
// db connect
const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})
// db error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

// React as view engine
const path = require("path")
app.use(express.static(path.join(__dirname, '../client/build/')))

// frontend root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/'))
})

// api server port
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log("Express API server listening on Port:" + PORT)
})

// api root and router
app.get('/api', (req, res) => {
  res.send('Hello world!')
})
app.use('/api', routes)
