module.exports.done = function(cb){
	require("../../g.js",function(g){
		var e = require("../e.js");
		var c = require("../c.js");
		cb(g+e+c);
	});	
};