// requires\\
var express = require('express');
var bodyParser = require('body-parser');


// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  console.log('Query : ', req.query)
  res.sendFile('form.html', {root : './public'});
});

app.post('/formsubmit', function(req, res){

   res.redirect('/Success!')
});

app.get('/Success!', function(req, res){
	res.send('You were successful!')
})
















// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})