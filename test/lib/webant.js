var fs = require("fs-extra");
var path = require("path");
var childProcess = require("child_process");

var phantomjs = require("phantomjs").path;
var test = require("tap").test;

var webant = require("../../lib/webant.js");

var baseDir = path.join(__dirname,"..","webant");
var phantomScript = path.join(baseDir,"phantomwebant.js");

function doTest(testId,numChunksExpected,cb) {
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
				webant({
					entry:path.join(srcDir,"main.js"),
					destPath:path.join(destDir,"main.js"),
					urlDestPath:"js/main.js"
				},function(err){
					t.ok(!err,"There should be no errors compiling webant test "+testId);
					
					fs.readdir(destDir,function(err,files){
						if (err) {
							t.bailout("Could not read newly created build files for webant test "+testId);
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
						
						childProcess.execFile(
							phantomjs,
							[phantomScript],
							{
								cwd:path.join(baseDir,testId),
								maxBuffer:1024*1024,
								timeout:15*1000
							},
							function(err,stdout,stderr) {
								console.log(err,stdout,stderr);
								var obj;
								try {
									obj = JSON.parse(stdout.trim());
									cb(obj,t);
								} catch(e) {
									t.bailout("Could not JSON.parse() stdout for webant test "+testId);
									t.end();
								}
							}
						);
						setTimeout(function(){
							t.bailout("Phantomjs taking too long to execute for webant test "+testId);
							t.end();
						},16*1000);
					});
				});
			});
		});
	});	
}

module.exports = doTest;