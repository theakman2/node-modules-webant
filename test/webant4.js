var webantTester = require("./lib/webant.js");

webantTester(4,3,function(obj,t){
	t.equivalent(obj,{
		f:"GJSHJS",
		a:50,
		b:"GJSHJSGJSe.jsc.js"
	});
	t.end();
});