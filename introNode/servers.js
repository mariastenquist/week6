var http = require('http')

var server = http.createServer(function(request, response){  //basically a callback function
//logic for the request object--to send a response
	response.writeHead(200, {'Content-Type' : 'text/html'})
	response.end('<h1>Hello World</h1>')
})


server.listen(8000)

