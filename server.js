const express = require('express')
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const app = express()
const async = require('async')

MongoClient.connect('mongodb://turtle:asdf@ds133378.mlab.com:33378/subsequent-turtle', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.post('/todoList', (req, res) => {
  console.log(req.body)
  req.body.status = 'not-completed'
  db.collection('todoCollection').save(req.body, (err, result) => {
    if (err) return console.log(err)
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  db.collection('todoCollection').find().toArray(function(err, result) {
    if (err) return console.log(err)
    res.render('index.ejs', { task: result })
  })
})

app.put('/todoList/:id', (req, res) => {
  console.log('rewritten', req.body)
  db.collection('todoCollection').findOneAndUpdate({ task: req.body.task }, {
    $set: {
      "task": req.body.task
    }
  })
})


function updateList(task, done) {
  db.collection('todoCollection').findOneAndUpdate({ task: task }, {
    $set: {
      'task': 'completed'
    }
  });
  done();
}


app.put('/updateTodoLists', (req, res) => {
  async.forEach(req.body, updateList, function(err) {
    if (!err) {
      res.redirect('/')
    } else {
      res.json({ message: err });
    }
  });
})

function removeTask(task, done) {
  db.collection('todoCollection').remove({ task: task});
  done();
}


app.put('/removeTodoLists', (req, res) => {
  async.forEach(req.body, removeTask, function(err) {
    if (!err) {
      res.redirect('/')
    } else {
      res.json({ message: err });
    }
  });
})
app.post('/')
