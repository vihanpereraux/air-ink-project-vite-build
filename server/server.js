var express = require('express');

var app = express();
var server = app.listen(3000);
app.use(express.static('public'));

console.log("socket server is running");
var socket = require('socket.io');
var io = socket(server);

// event
io.sockets.on('connection', function(socket){
    socket.on('mouse', function(clientData){
        socket.broadcast.emit('mouse', clientData);
        console.log(clientData);
    });
    console.log('new connection ' + socket.id);
});