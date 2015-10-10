var costumeDatabase = [];

// var Costume = function(name, inappropriateness, missingAccessories){



var CostumeConstructor = function(costumeData){

	this.name = costumeData.name;
	this.inappropriateness = costumeData.inappropriateness;
	this.missingAccessories = costumeData.missingAccessories.split(' , ');

	costumeDatabase.push(this)


}

module.exports = { //export an object, and then use this in another file.

	costumeDatabase : costumeDatabase,
	CostumeConstructor 	: CostumeConstructor,
}