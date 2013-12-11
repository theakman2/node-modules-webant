var webantTester = require("../lib/webant.js");

webantTester(12,1,{defaultExtension:".js"},function(obj,srcDir,destDir,t){
	t.equivalent(obj,{ajs:"AAA",bjs:"AAABBBAAA"});
	t.end();
});