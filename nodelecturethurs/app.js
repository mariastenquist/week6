var express = require('express');
var bodyParser = require('body-parser')

var app = express();
console.log(express())


// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// ----Routes------

var costumeController = require('./controllers/costumeController') //express assumes js file, so extension not needed
app.get('/', function(req, res){
	res.sendFile('/html/home.html', {root : './public'})
});


app.post('/createcostume', costumeController.createCostume)
app.get('/getcostumes', costumeController.getCostumes)

	// console.log(req.body);

var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
 
 });