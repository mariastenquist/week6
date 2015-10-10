var costumeModel = require('../models/costumes.js');


//export so we can access methods in app.js
module.exports = {

	createCostume : function(req, res){

		//use the req.body to create a new costume
		var costume = new costumeModel.CostumeConstructor(req.body)
		// console.log(costumeModel.costumeDatabase)

		res.send(costumeModel.costumeDatabase)
	},

	getCostumes : function(req, res){

		res.send(costumeModel.costumeDatabase)	
	}
}