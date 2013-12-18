var webantTester = require("../lib/webant.js");

webantTester(8,3,{},function(obj,data,done){
	data.t.equivalent(obj,{
		aMsg:"a.js",
		tmpl1:"Message 'EIGHT' from template 1.",
		bMsg:"Template 2 saying TWO.BAR!",
		dMsg:"test",
		width:198,
		height:229
	});
	done();
});