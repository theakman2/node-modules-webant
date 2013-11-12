var fs = require("fs-extra");
var path = require("path");
var childProcess = require("child_process");

var extend = require("extend");
var shellEscape = require("shell-escape");
var test = require("tap").test;

var webant = require("../../lib/webant.js");

var baseDir = path.join(__dirname,"..","webant");
var phantomScript = path.join(baseDir,"phantomwebant.js");

function doTest(testId,numChunksExpected,additionalOpts,cb) {
	testId = testId.toString();
	
	var srcDir = path.join(baseDir,testId,"src");
	var destDir = path.join(baseDir,testId,"build","js");
	
	test("webant "+testId,function(t){
		fs.remove(destDir,function(err){
			if (err) {
				t.bailout("Build directory not cleared for webant test "+testId);
				t.end();
				return;
			}
			fs.exists(destDir,function(exists){
				if (exists) {
					t.bailout("Build directory not cleared for webant test "+testId);
					t.end();
					return;
				}
				webant(extend(true,{
					entry:path.join(srcDir,"main.js"),
					dest:path.join(destDir,"main.js"),
					urlDest:"js/main.js"
				},additionalOpts),function(err2){
					if (err2) {
						t.fail("Error encountered while compiling webant test " + testId + ": " + err2);
						t.end();
					}
					
					fs.readdir(destDir,function(err3,files){
						if (err3) {
							t.bailout("Could not read newly created build files for webant test "+testId+": "+err3);
							t.end();
						}
						
						if (!files) {
							t.bailout("No files created for webant test "+testId);
							t.end();
						}
						
						files.sort();
						
						var expectedFiles = ["main.js"];
						
						for (var i = 0; i < numChunksExpected; i++) {
							expectedFiles.push("main"+i+".js");
						}
						
						expectedFiles.sort();
						
						t.equivalent(
							files,
							expectedFiles,
							"File count should match expected chunk count for webant test "+testId
						);
						
						var pjs = childProcess.exec(
							"phantomjs " + shellEscape([phantomScript]),
							{
								cwd:path.join(baseDir,testId),
								maxBuffer:1024*1024
							},
							function(err4,stdout,stderr) {
								pjs.kill();
								var obj;
								try {
									obj = JSON.parse(stdout.trim());
									cb(obj,srcDir,destDir,t);
								} catch(e) {
									t.bailout("Could not JSON.parse() stdout for webant test "+testId);
									t.end();
								}
							}
						);
					});
				});
			});
		});
	});	
}

module.exports = doTest;