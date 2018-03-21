const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./router')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/config')
var request = require('request'); // "Request" library
var querystring = require('querystring')
var cookieParser = require('cookie-parser')


// Use Node's default promise instead of Mongoose's promise library
mongoose.Promise = global.Promise

// Connect to the database
mongoose.connect(config.db)
let db = mongoose.connection

db.on('open', () => {
  console.log('Connected to the database.')
})

db.on('error', (err) => {
  console.log(`Database error: ${err}`)
})

// const options = {
//   useMongoClient: true,
//   autoIndex: false, // Don't build indexes
//   reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//   reconnectInterval: 500, // Reconnect every 500ms
//   poolSize: 10, // Maintain up to 10 socket connections
//   // If not connected, return errors immediately rather than waiting for reconnect
//   bufferMaxEntries: 0
// }



// mongoose.connect(config.db, options)
app.use(morgan('combined'))
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))
app.use('/api', routes)
const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)
console.log('Server listening on:', port)

module.exports = server
