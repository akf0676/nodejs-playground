var express = require('express');
var morgan = require('morgan');
var favicon = require('serve-favicon');

var app = express();

app.use(morgan('combined')) // loads the middleware
.use(express.static(__dirname + '/public'))// Specifies that the /public folder includes static files (basic piece of middleware loaded)
.use(favicon(__dirname + '/public/favicon.ico')) // Activates the favicon specified
.use(function(req, res){ // finally answers
    res.send('Hello');
});

app.get('/', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.end('Your\'re in Reception');
});

app.get('/basement', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in the wine cellar. Those bottles are mine!');
});

app.get('/floor/1/bedroom', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hey, this is a private area!');
});

app.get('/floor/:floornum/bedroom', function(req, res){
	res.setHeader('Content-Type', 'text/plain');
	res.render('bedroom.ejs', {floor: req.params.floornum});
});

app.get('/count/:number', function(req, res) {
    var names = ['Robert', 'Jack', 'David'];
    res.render('page.ejs', {counter: req.params.number, names: names});
});

//manage the 404 errors
app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page cannot be found!');
});


app.listen(8080);
