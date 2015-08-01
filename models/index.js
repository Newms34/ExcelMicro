var mongoose = require('mongoose');
var DATABASE_URI = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/molecules';//for production mode
console.log('DB: ',DATABASE_URI);
var db = mongoose.connect(DATABASE_URI).connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var molSchema = new mongoose.Schema({
	name:String,
    molBits: [{
        molSymb: String,
        x: Number,
        y: Number
    }]
});

//the following schema is just for testing
var fakeSchema = new mongoose.Schema({
	name:String,
	blurb:String
});

// module.exports = mongoose.model('mol', molSchema);
var Mols = mongoose.model('Mols', molSchema);
var Fake = mongoose.model('Fake', fakeSchema);

module.exports = {
	Mols: Mols,
	Fake: Fake
};