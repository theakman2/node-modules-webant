var webantTester = require("../lib/webant.js");

webantTester("changedglobalvar",1,{browserGlobalVar:"__foo__"},function(obj,data,done){
	var keys = Object.keys(obj);
	data.t.strictEqual(keys.length,1);
	data.t.strictEqual(Object.keys(obj[keys[0]]).length,3);
	done();
});