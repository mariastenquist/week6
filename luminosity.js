var colors = luminosity = 0.2126*r + 0.7152*g + 0.0722*b
console.log(colors)

var r = process.argv[2]
var g = process.argv[3]
var b = process.argv[4]

var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
console.log(luminosity)

module.exports = function(r,g,b){
	return 0.2126*r + 0.7152*g + 0.0722*b
}
