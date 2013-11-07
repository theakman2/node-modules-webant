var webantTester = require("./lib/webant.js");

webantTester(3,1,function(obj,t){
	t.equivalent(obj,{a:150,b:175});
	t.end();
});