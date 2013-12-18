var fs = require("fs");
var path = require("path");

var async = require("async");

var webantTester = require("../lib/webant.js");

webantTester(7,4,{
	handlers:{
		willHandle:function(filePath,settings) {
			return filePath === "@@MYCUSTOMHANDLER";
		},
		handle:function(filePath,settings,done) {
			done(null,"module.exports = 'my custom handler export'");
		}
	}
},function(obj,data,done){
	data.t.equivalent(obj,{
		f:"Message from module foo!HJS",
		a:50,
		b:"Message from module foo!HJSMessage from module bar!e.jsc.js",
		height:134,
		width:422,
		data:12,
		custom:'my custom handler export'
	});
	if (data.webantOpts.postProcess === "compress") {
		var files = [
		             path.join(data.destDir,"main.js"),
		             path.join(data.destDir,"main1.js"),
		             path.join(data.destDir,"main2.js"),
		             path.join(data.destDir,"main3.js")
		             ];
		
		async.map(files,fs.stat,function(err,results){
			var fileSize = 0;
			for (var i = 0; i < results.length; i++) {
				fileSize += results[i].size;
			}
			data.t.ok(fileSize < 120*1024,"Total filesize should be under 120kb");
			done();
		});
	} else {
		done();
	}
});