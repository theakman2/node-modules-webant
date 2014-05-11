var webantTester = require("../lib/webant.js");

webantTester("aliases",1,{
	aliases:{
		testing:"a.js",
		somevar:"b"
	}
},function(obj,data,done){
	data.t.equivalent(obj,{msg:"MWAHAHAH!",a:"I'm from a.js"});
	done();
});