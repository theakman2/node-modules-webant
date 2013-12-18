var path = require("path");

var webantTester = require("../lib/webant.js");

webantTester(
	3,
	1,
	{
		requireBase:path.join(__dirname,"..","webant","11","src")
	},
	function(obj,data,done){
		data.t.equivalent(obj,{a:150,b:175});
		done();
});