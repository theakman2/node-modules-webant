var path = require("path");

var webantTester = require("../lib/webant.js");

webantTester(
	3,
	1,
	{
		requireBase:path.join(__dirname,"..","webant","11","src")
	},
	function(obj,srcDir,destDir,t){
		t.equivalent(obj,{a:150,b:175});
		t.end();
});