var express = require('express');
var bodyParser = require('body-parser');


// Create Express App Object \\
var app = express();



var places = {'Seville':0, 'canaryIslands':1, 'capeVerde':2, 'straitOfMagellan':3, 'Guam':4, 'Philippines':5}
var reverseMap ={};
for (var key in places) {
    if (places.hasOwnProperty(key)) {
        reverseMap[places[key]] = key;
    }
}
console.log(reverseMap)
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

app.get ('/next', function(req, res){
	// console.log(req.query.id)
	var placeIndex = places[req.query.id];
	console.log(reverseMap)
	// console.log(reverseMap[placeIndex+1]);
	// res.send(JSON.stringify(
	// 	{
	// 		location: req.query.id, 

			
	// 		nextLocation: reverseMap[(placeIndex+1)%6]
	// 	}))
	
});


app.get ('/:id', function(req, res){
	console.log(req.params.id)
	res.sendFile(req.params.id + '.html' , {root : './public'});
});


app.use(function(err, req, res, next){
	console.error(err.stack);
	// console.log(req.originalUrl);
	res.status(404).send('Magellan didnt go here ' + req.originalUrl.substring(1));
})




var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
   