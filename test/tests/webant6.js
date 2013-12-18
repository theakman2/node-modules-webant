var fs = require("fs");
var path = require("path");

var webantTester = require("../lib/webant.js");

webantTester(6,4,{},function(obj,data,done){
	data.t.equivalent(obj,{
		f:"Message from module foo!HJS",
		a:50,
		b:"Message from module foo!HJSMessage from module bar!e.jsc.js",
		height:571,
		width:110
	});
	
	if (data.webantOpts.postProcess === "debug") {
		fs.readFile(data.destDir+"/main.js",function(err,content){
			data.t.ok(!err,"There should be no errors reading the first chunk.");
			
			var debugMsg = "//"+path.join(data.srcDir,"main.js")+": 1";
			
			data.t.ok(
				content.toString().indexOf(debugMsg+"\nwindow.__global = {};") > -1,
				"File should contain debugging comments."
			);
			
			done();
		});
	} else {
		done();
	}
});