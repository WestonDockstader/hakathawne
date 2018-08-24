let mongoose = require('mongoose')
const connectionString = 'mongodb://forfun:forfun1@ds131932.mlab.com:31932/hakathawne'
let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log('DATABASE ERROR: ', err)
})

connection.once('open', () => {
  console.log('Connected to Database')
})