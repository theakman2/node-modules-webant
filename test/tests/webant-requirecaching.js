var webantTester = require("../lib/webant.js");

webantTester("requirecaching",1,{},function(obj,data,done){
	data.t.strictEqual(obj,1);
	done();
});