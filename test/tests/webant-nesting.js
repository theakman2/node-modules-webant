var webantTester = require("../lib/webant.js");

webantTester("nesting",1,{},function(obj,data,done){
	data.t.equivalent(obj,{a:150,b:175});
	done();
});