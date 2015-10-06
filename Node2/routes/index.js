var express = require('express');
var router = express.Router();
var fs = require('fs');
var fileContents = fs.readFileSync('data.txt');
// res.header('Content-Type', 'text/html');
// res.send(fileContents)

/* GET home page. */
router.get('/', function(req, res, next) {
	res.header('Content-Type', 'text/html');
	res.send(fileContents)
  // res.render('index', { title: 'Express' });
});

module.exports = router;
