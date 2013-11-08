require("styles.css");

module.exports.done = function(cb){
	require("../../g.hbs",function(g){
		var e = require("../e.js");
		var c = require("../c.js");
		cb(g({name:"bar"})+e+c);
	});	
};