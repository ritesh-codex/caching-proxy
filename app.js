const http = require('http');
const url = require('url');


const server = http.createServer((req,res)=>{
	const path_name = req.url;

	if(req){
		res.end("Caching proxy server");
	}


});

server.listen(5000,'127.0.0.1', ()=>{
	console.log("Server live at port 5000");
})