const express = require('express')
const bodyParser = require('body-parser')
const {MongoClient} = require('mongodb')
const app = express()

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds133378.mlab.com:33378/subsequent-turtle', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})



app.use(bodyParser.urlencoded({extended: true}))
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/todoList', (req, res) => {
  console.log(req.body)
})
