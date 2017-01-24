// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

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

app.listen(8080);
console.log('8080 is the magic port');