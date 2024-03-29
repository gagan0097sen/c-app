const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const http = require('http').createServer(app)
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
app.use(express.static(__dirname + '/')) // for image folder
// routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
// socket 
const io = require('socket.io')(http)
io.on('connection', (socket) => {
    console.log('connected..')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })
})

