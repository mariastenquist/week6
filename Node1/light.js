

// var r = process.argv[2]
// var g = process.argv[3]
// var b = process.argv[4]

// var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
// console.log(luminosity)

// if (luminosity >= 155){
// 	console.log(light)
	
// }
// else if (luminosity <= 155){
// 	console.log(dark)
// }

var luminosityBrightness = require('./luminosity.js')

var luminosityOutput = luminosityBrightness(process.argv[2], process.argv[3], process.argv[4])
if (luminosityOutput >= 155){
	console.log('light')
	console.log(luminosityOutput)
}
else{
	console.log('dark')
}



