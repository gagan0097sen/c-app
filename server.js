

// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());

// const http = require('http').createServer(app)
// const PORT = process.env.PORT || 3000;
// http.listen(PORT, () => {
//     console.log(`listening on port ${PORT}`)
// })

// app.use(express.static(__dirname + '/public')) // for image folder

// // routes
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })

// // socket 
// const io = require('socket.io')(http)

// io.on('connection', (socket) => {
//     console.log('connected..')
//     socket.on('message', (msg) => {
//         socket.broadcast.emit('message', msg)
//     })
// })




const express = require("express");
const app = express();
const http = require('http').createServer(app); // Create the http server instance

const socketIO = require('socket.io');
const io = socketIO(http);

const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // Serve static files

// routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// socket
io.on('connection', (socket) => {
    console.log('connected..');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    });
});

http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
