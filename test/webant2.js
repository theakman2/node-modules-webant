var webantTester = require("./lib/webant.js");

webantTester(2,2,{},function(obj,srcDir,destDir,t){
	t.equivalent(obj,{ajs:"I'm from a.js",bjs:"I'm from b.js"});
	t.end();
});