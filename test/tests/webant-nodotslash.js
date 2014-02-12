var webantTester = require("../lib/webant.js");

webantTester("nodotslash",1,{},function(obj,data,done){
	data.t.equivalent(obj,{a:"aaaa",b:"bbbb",c:"cccc"});
	done();
});