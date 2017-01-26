// server.js
// load the things we need
var express = require('express');
var app = express();
var http = require('http');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/scripts'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function (req, res) {
    var users = [
        { name: 'Image1'},
        { name: 'Image2'},
        { name: 'Image3'},
        { name: 'Image4'},
        { name: 'Image5'},
        { name: 'Image6'}
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        users: users,
        tagline: tagline
    });
});

// about page 
app.get('/about', function (req, res) {
    res.render('pages/about');
});

var serve = http.createServer(app); 
var io = require('socket.io')(serve);

serve.listen(8080, function () {
    console.log('Express server listening on port 8080');
});

io.on('connection', function (socket) {
    socket.emit('chat', 'a user connected');
    console.log('a user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('chat', function (msg) {
        socket.broadcast.emit('chat', msg);
    });
});

