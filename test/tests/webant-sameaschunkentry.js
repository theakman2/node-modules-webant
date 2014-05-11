var webantTester = require("../lib/webant.js");

webantTester("sameaschunkentry",2,{},function(obj,data,done){
	data.t.equivalent(obj,{
		lib:"test",
		liba:"lib",
		libmain:"lib",
		a:"froma"
	});
	done();
});