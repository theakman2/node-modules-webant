var webantTester = require("../lib/webant.js");

webantTester(5,4,{},function(obj,data,done){
	data.t.equivalent(obj,{
		f:"Message from module foo!HJS",
		a:50,
		b:"Message from module foo!HJSMessage from module bar!e.jsc.js",
		height:571
	});
	done();
});