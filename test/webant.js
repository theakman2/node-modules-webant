var webantTester = require("./lib/webant.js");

webantTester(1,1,function(obj,t){
	t.equivalent(obj,{msg:"MWAHAHAH!",a:"I'm from a.js"});
	t.end();
});

webantTester(2,2,function(obj,t){
	t.equivalent(obj,{ajs:"I'm from a.js",bjs:"I'm from b.js"});
	t.end();
});

webantTester(3,1,function(obj,t){
	t.equivalent(obj,{a:150,b:175});
	t.end();
});

webantTester(4,3,function(obj,t){
	t.equivalent(obj,{
		f:"GJSHJS",
		a:50,
		b:"GJSHJSGJSe.jsc.js"
	});
	t.end();
});