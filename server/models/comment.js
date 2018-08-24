let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Comment'

// mongoose.set('debug', function (coll, method, query, doc) {
//   console.log(`${coll}.${method}`, JSON.stringify(query), doc)
// })

let subSchema = new Schema({
  body: { type: String, required: true },
  author: { type: String, required: true },
  authorId: { type: String, required: true }
})

let schema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  upVotes: { type: Number, default: 0 },
  downVotes: { type: Number, default: 0 },
  author: { type: String, required: true },
  authorId: { type: String, required: true },
  parentId: { type: String, required: true },
  subcomments: [subSchema]
})

schema.pre('save', next => {
  this.markModified('subcomments')
  next()
})

module.exports = mongoose.model(schemaName, schema)