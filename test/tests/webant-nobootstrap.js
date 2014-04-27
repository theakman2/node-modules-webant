var webantTester = require("../lib/webant.js");

webantTester("nobootstrap",1,{includeBootstrap:false},function(obj,data,done){
	data.t.strictEqual(obj,"test");
	done();
});