var fs = require("fs");
var path = require("path");

var webantTester = require("./lib/webant.js");

webantTester(6,4,{mode:"debug"},function(obj,srcDir,destDir,t){
	t.equivalent(obj,{
		f:"Message from module foo!HJS",
		a:50,
		b:"Message from module foo!HJSMessage from module bar!e.jsc.js",
		height:571
	});
	fs.readFile(destDir+"/main0.js",function(err,content){
		t.ok(!err,"There should be no errors reading the first chunk.");
		
		var debugMsg = "//"+path.join(srcDir,"main.js")+": 1";
		
		t.ok(
			content.toString().indexOf(debugMsg+"\nwindow.__global = {};") > -1,
			"File should contain debugging comments."
		);
		
		t.end();
	});
});