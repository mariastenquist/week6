var express = require('express');
var bodyParser = require('body-parser');


// Create Express App Object \\
var app = express();


// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// app.get('/', function(req, res){
// 	res.send('home')
// })

// Creating Server and Listening for Connections \\



// app.get('/:countryName', function(req, res){
// 	redirect('/canaryIslands.html')
	
// })

app.get('/', function(req, res){
	res.sendFile('Seville.html', {root: './public'})
})

app.get ('/:id', function(req, res){
	console.log(req.params.id)
	res.sendFile(req.params.id + '.html' , {root : './public'});
});

var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
   