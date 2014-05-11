var webantTester = require("../lib/webant.js");

webantTester("noentrymodules",1,{
	entryModules:[]
},function(obj,data,done){
	data.t.strictEqual(obj,0);
	done();
});