var express = require('express');
var router = express.Router();
var fs = require('fs');


// var fileContents = fs.readFileSync('data.txt');
// res.header('Content-Type', 'text/html');
// res.send(fileContents)

/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('data.txt', function(err, data){
    res.header('Content-Type', 'text/html');
	res.send(data)
});
  // res.render('index', { title: 'Express' });
});

router.get('/:fileName/:fileUser', function(req, res, next) {

	console.log(req.params)

})

module.exports = router;
