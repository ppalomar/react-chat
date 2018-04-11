const openSocket = require('socket.io-client');
const express = require('express')

const app = express()
let socket

app.get('/connect', (req, res) => {
  socket = openSocket('http://localhost:8000');

  socket.on('connect', () => {
    res.sendStatus(200)
  })
})

app.get('/message', (req, res) => {
  const msg = { id: 123456, userId: 1234567, text: req.query.q }
  socket.emit('chat message', msg);

  res.sendStatus(200)
})

app.get('/disconnect', (req, res) => {
  socket.on('disconnect', () => {
    res.sendStatus(200)
  })

  socket.disconnect()
})

app.listen(8081, () => {})