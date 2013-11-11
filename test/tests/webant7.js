var fs = require("fs");
var path = require("path");

var async = require("async");

var webantTester = require("../lib/webant.js");

webantTester(7,4,{postProcess:"compress"},function(obj,srcDir,destDir,t){
	t.equivalent(obj,{
		f:"Message from module foo!HJS",
		a:50,
		b:"Message from module foo!HJSMessage from module bar!e.jsc.js",
		height:134,
		width:422,
		data:12
	});
	
	var files = [
	             path.join(destDir,"main0.js"),
	             path.join(destDir,"main1.js"),
	             path.join(destDir,"main2.js"),
	             path.join(destDir,"main3.js")
	             ];
	
	async.map(files,fs.stat,function(err,results){
		var fileSize = 0;
		for (var i = 0; i < results.length; i++) {
			fileSize += results[i].size;
		}
		t.ok(fileSize < 120*1024,"Total filesize should be under 120kb");
		t.end();
	});
});