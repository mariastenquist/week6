// var colors = []

var request = require('request');

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) 
    var colors = JSON.parse(body)
    // console.log(colors[2].name)
    var oneColor = colors.filter(function(color){
    	return color.name === process.argv[2]
    })
    console.log(oneColor[0].rgb.r, oneColor[0].rgb.g, oneColor[0].rgb.b)
  }
})

// var result = function(colorName){
// 	_.pluck(result, "name")

	
// }


// var resultTrio = function(rgbValues){

// 	colors = JSON.parse('["r", "g", "b"]')
// }

	// colors.filter(function(color){
	// 	return color.name === colorName