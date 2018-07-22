const http = require('http');
const url = require('url');
const querystring = require('querystring');

var server = http.createServer(function(req, res) {
	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);

	console.log("This is the page -c" + page);

	res.writeHead(200, {"Content-Type": "text/html"});

	if(page == "/") {
		res.write('Well Howdy this is a start' + page);

	} else if(page === "/whoami") {
		res.write('Who Am I??? - ');
		if ( 'cat' in params) {
			res.write('<br />Cats do what? - ' + params['cat']);
		}
		res.write('<br />and another line');
	} else if(page === "/contact") {
		res.write('Well Contact me - ' + page);
	} else if (page == "/me") {
		res.write('Well This is all about me - ' + page);
	} else {
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.write('Well This nothing I know ' + page);
	}
	res.end();
});

server.on('close', function() { // We listened to the close event
    console.log('Goodbye!');
})

server.listen(8080);
