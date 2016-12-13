const express = require('express')
const router = express.Router()
const Todo = require('../database').Todo

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/list', function(req, res) {
  const task = req.body.task
  console.log('Task', task)
  Todo.insert(task)
    .then(task => res.render('index', {task}) )
})

module.exports = router
