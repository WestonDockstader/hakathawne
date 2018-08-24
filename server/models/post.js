let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Post'

let schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  authorId: { type: String, required: true }
})

module.exports = mongoose.model(schemaName, schema)