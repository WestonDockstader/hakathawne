let router = require('express').Router()
let Comments = require('../models/comment')

router.get('', (req, res) => {
  Comments.find()
    .then(comments => {
      res.status(200).send(comments)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.post('', (req, res) => {
  Comments.create(req.body)
    .then(comment => {
      res.status(200).send(comment)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.put('/:id', (req, res) => {
  Comments.findById(req.params.id)
    .then(() => {
      res.status(200).send({ message: 'Successfully Updated Comment' })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/:id', (req, res) => {
  Comments.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(200).send({ message: 'Successfully Deleted Comment' })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// build the sub comments routes here

module.exports = router