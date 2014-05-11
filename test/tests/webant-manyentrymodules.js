var path = require("path");

var webantTester = require("../lib/webant.js");

webantTester("manyentrymodules",["b.js","main.js"],{
	files:[{
		entry:path.join("..","webant","manyentrymodules","src","main.js"),
		dest:path.join("..","webant","manyentrymodules","build","js","main.js")
	},{
		entry:path.join("..","webant","manyentrymodules","src","b.js"),
		dest:path.join("..","webant","manyentrymodules","build","js","b.js")		
	}],
	entryModules:[
	              path.join("..","webant","manyentrymodules","src","main.js"),
	              path.join("..","webant","manyentrymodules","src","b.js")
	]
},function(obj,data,done){
	data.t.strictEqual(obj,12);
	done();
});