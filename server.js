const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
})

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/todoList', (req, res) => {
  console.log('asdf')
})
