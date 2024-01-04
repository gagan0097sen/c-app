
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
const cors = require("cors");
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;
// const BASE_URL = 'http://localhost:3000'; // You can change this to your desired base URL
app.set('BASE_URL', 'https://localhost:3000/');

app.use(cors());
app.use(express.static(__dirname + '/public')); // for the image folder

http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Socket
io.on('connection', (socket) => {
    console.log('connected..');
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg);
    });
});

// // Access your application using the BASE_URL
// console.log(`Access your application at: ${BASE_URL}`);
