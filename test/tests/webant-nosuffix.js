var path = require("path");

var webantTester = require("../lib/webant.js");

webantTester("nosuffix",1,{},function(obj,data,done){
		data.t.equivalent(obj,{a:"AA",b:"BB"});
		done();
});