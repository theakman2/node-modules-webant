var webantTester = require("../lib/webant.js");

webantTester("async",1,{},function(obj,data,done){
	data.t.equivalent(obj,{ajs:"I'm from a.js",bjs:"I'm from b.js",cjs:"CCCC"});
	done();
});