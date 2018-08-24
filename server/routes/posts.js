let router = require('express').Router()
let Posts = require('../models/post')
let Comments = require('../models/comment')

router.get('', (req, res) => {
  Posts.find({})
    .then(posts => {
      res.status(200).send(posts)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('', (req, res) => {
  Posts.create(req.body)
    .then(post => {
      res.status(200).send(post)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res) => {
  Posts.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(() => {
      res.status(200).send({ message: 'Successfully edited post' })
    })
    .catch(err => {
      res.status(200).send(err)
    })
})

router.delete('/:id', (req, res) => {
  Posts.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(200).send({ message: "Successfully Deleted Post" })
      Comments.deleteMany({ parentId: req.params.id })
        .then(() => {
          res.status(200).send({ message: "Successfully completed cascade for deleted Post" })
        })
        .catch(err => {
          res.status(400).send(err)
        })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = router