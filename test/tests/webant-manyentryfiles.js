var path = require("path");

var webantTester = require("../lib/webant.js");

webantTester("manyentryfiles",["b.js","main.js"],{
	files:[{
		entry:path.join("..","webant","manyentryfiles","src","main.js"),
		dest:path.join("..","webant","manyentryfiles","build","js","main.js")
	},{
		entry:path.join("..","webant","manyentryfiles","src","b.js"),
		dest:path.join("..","webant","manyentryfiles","build","js","b.js")		
	}]
},function(obj,data,done){
	data.t.strictEqual(obj,8);
	done();
});