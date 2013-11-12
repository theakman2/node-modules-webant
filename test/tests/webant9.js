var webantTester = require("../lib/webant.js");

webantTester(9,1,{},function(obj,srcDir,destDir,t){
	t.equivalent(obj,{a:150,b:175,width:243,height:5978});
	t.end();
});