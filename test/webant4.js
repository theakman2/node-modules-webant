var webantTester = require("./lib/webant.js");

webantTester(4,3,{},function(obj,srcDir,destDir,t){
	t.equivalent(obj,{
		f:"GJSHJS",
		a:50,
		b:"GJSHJSGJSe.jsc.js"
	});
	t.end();
});