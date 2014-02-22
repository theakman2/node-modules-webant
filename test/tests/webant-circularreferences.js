var webantTester = require("../lib/webant.js");

webantTester("circularreferences",1,{},function(obj,data,done){
	data.t.equivalent(obj,"done");
	done();
});