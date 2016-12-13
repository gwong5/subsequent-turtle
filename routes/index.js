const express = require('express')
const router = express.Router()
const {Todo} = require('../database')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/list', function(req, res) {
  const {task} = req.body
  Todo.insert(task).then(() =>
    Todo.findAll().then(results =>
      res.render('index', {results})
    )
  )
})

module.exports = router
