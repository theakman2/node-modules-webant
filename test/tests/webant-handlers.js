var webantTester = require("../lib/webant.js");

webantTester("handlers",1,{handlers:["dustjs","text"]},function(obj,data,done){
	data.t.equivalent(obj,{a:"Dust file Bob here.",b:"I'm a text file!"});
	done();
});