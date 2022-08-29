const express = require("express");
const app=express();
const http = require("http").Server(app);


//attach http server to socket
const io = require('socket.io')(http);

var clients  = 0 ;

users=[];

//newconnection 
io.on('connection', function(socket){
    console.log('A user connected');
    socket.on('setUsername', function(data){
       console.log(data);
       if(users.indexOf(data) > -1){
          socket.emit('userExists', data + ' username is already exist.');
       } else {
          users.push(data);
          socket.emit('userSet', {username: data});
       }
    });
    socket.on('msg', function(data){
       //Send message to everyone
       io.sockets.emit('newmsg', data);
    })
    
const PORT=3000;
 });
 http.listen(3000, function(){
    console.log('listening on localhost:3000');
 });



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

 