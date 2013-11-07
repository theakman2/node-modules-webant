var webantTester = require("./lib/webant.js");

webantTester(1,1,function(obj,t){
	t.equivalent(obj,{msg:"MWAHAHAH!",a:"I'm from a.js"});
	t.end();
});