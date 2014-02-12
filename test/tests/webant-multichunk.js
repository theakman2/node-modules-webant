var webantTester = require("../lib/webant.js");

webantTester("multichunk",2,{},function(obj,data,done){
	data.t.equivalent(obj,{
		a:"AA",
		b:"BB"
	});
	done();
});