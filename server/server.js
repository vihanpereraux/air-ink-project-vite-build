// var express = require('express');
// var cors = require('cors');
// var app = express();

// app.use(cors({
//     origin: "*"
// }))


// var server = app.listen(3000);
// app.use(express.static('public'));

// console.log("socket server is running");
// var socket = require('socket.io');
// var io = socket(server);

// // event
// io.sockets.on('connection', function(socket){
//     socket.on('mouse', function(clientData){
//         socket.broadcast.emit('mouse', clientData);
//         console.log(clientData);
//     });
//     console.log('new connection ' + socket.id);
// });


var express = require('express');
var app = express();
var http = require('http').createServer(app);
var socketIO = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});

http.listen(3000, function(){
    console.log("socket server is running");
    socketIO.on('connection', function(socket){
        socket.on('mouse', function(clientData){
            socket.broadcast.emit('mouse', clientData);
            console.log(clientData);
        });
        console.log('new connection ' + socket.id);
    });
});

app.use(express.static('public'));