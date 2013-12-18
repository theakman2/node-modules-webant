var webantTester = require("../lib/webant.js");

webantTester(10,1,{},function(obj,data,done){
	data.t.equivalent(obj,{msg:"MWAHAHAH!",a:"I'm from a.js"});
	done();
});