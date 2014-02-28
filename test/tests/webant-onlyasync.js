var webantTester = require("../lib/webant.js");

webantTester("onlyasync",3,{},function(obj,data,done){
	data.t.equivalent(obj,{a:"hi",b:"bye"});
	done();
});