var webantTester = require("../lib/webant.js");

webantTester("requirearrays",1,{},function(obj,data,done){
	data.t.equivalent(obj,{a:"AA",b:"BB"});
	done();
});