var webantTester = require("../lib/webant.js");

webantTester("singlefile",1,{},function(obj,data,done){
	data.t.equivalent(obj,"foo");
	done();
});