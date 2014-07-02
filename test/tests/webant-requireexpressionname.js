var webantTester = require("../lib/webant.js");

webantTester("requireexpressionname",1,{requireExpressionName:"_abc_"},function(obj,data,done){
	data.t.equivalent(obj,{msg:"MWAHAHAH!",a:"I'm from a.js"});
	done();
});