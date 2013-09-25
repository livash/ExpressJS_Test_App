var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('<h1>Hello World</h1>');
});

app.listen(3070);
console.log("Listening on port 3070");

// LONGER VERSION
// app.get('/hello.txt', function(req, res){
// 	var body = "Hello World";
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.setHeader('Content-Length', body.length);
// 	res.end(body);
// });