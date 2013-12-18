var webantTester = require("../lib/webant.js");

webantTester(9,1,{},function(obj,data,done){
	data.t.equivalent(obj,{a:150,b:175,width:243,height:5978});
	done();
});