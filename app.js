const http = require('http');
const url = require('url');


const server = http.createServer((req,res)=>{
	

	const path_name = req.url;
	const method = req.method;
	const headers = req.headers;

	console.log(path_name);
	console.log(method);
	console.log(headers);



	if(path_name == '/'){
		res.writeHead(200, {'Content-type' : 'text/plain'});
		res.end("Welcome to the Proxy Project!");
	}

	else if(path_name == '/proxy'){
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end("This is going to be the proxy endpoint.");
	}

	else {
		res.writeHead(404, {'Content-Type' : 'text/html'});
		res.end('<h1>ERROR 404</h1>');
	}

});

server.listen(5000,'127.0.0.1', ()=>{
	console.log("Server live at port 5000");
})