let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Comment'

let subSchema = new Schema({
  body: { type: String, required: true },
  author: { type: String, required: true }
})

let schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  subcomments: [subSchema]
})

module.exports = mongoose.model(schemaName, schema)