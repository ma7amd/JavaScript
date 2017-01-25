//Simple HTTP Server

// import the http module
var http = require("http");

// create the web server
http.createServer(function(req, res){
	//callback excuted when request is recieved
	res.writeHead(200, {'Content-Type': "text/plain"});
	res.end("Hello World\n");
}).listen(1337, '172.0.0.1');

console.log('Server Running at http://172.0.0.1:1337/');