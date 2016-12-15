const express = require('express')
const bodyParser = require('body-parser')
const {MongoClient} = require('mongodb')
const app = express()

MongoClient.connect('mongodb://turtle:asdf@ds133378.mlab.com:33378/subsequent-turtle', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))

app.post('/todoList', (req, res) => {
  db.collection('todoCollection').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
