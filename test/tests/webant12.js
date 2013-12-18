var webantTester = require("../lib/webant.js");

webantTester(12,1,{defaultExtension:".js"},function(obj,data,done){
	data.t.equivalent(obj,{ajs:"AAA",bjs:"AAABBBAAA"});
	done();
});