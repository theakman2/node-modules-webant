var fs = require("fs-extra");
var path = require("path");
var childProcess = require("child_process");

var async = require("async");
var extend = require("extend");
var shellEscape = require("shell-escape");
var test = require("tap").test;

var webant = require("../../lib/webant.js");

var baseDir = path.join(__dirname,"..","webant");
var phantomScript = path.join(baseDir,"phantomwebant.js");

function doTest(opts,cb) {
	var testName = "[" + opts.testId + "," + opts.testVariation + "]";
	var t = opts.t;
	fs.remove(opts.destDir,function(err){
		if (err) {
			t.fail("Build directory not cleared for webant test " + testName);
            t.end();
			return;
		}
		fs.exists(opts.destDir,function(exists){
			if (exists) {
				t.fail("Build directory not cleared for webant test " + testName);
				t.end();
				return;
			}
			webant(opts.webantOpts,function(err2,out){
				if (err2) {
					t.fail("Error encountered while compiling webant test " + testName + ": " + err2);
					t.end();
					return;
				}
				
				if (out.length !== opts.numChunksExpected) {
					t.fail("Webant output does not match expected chunk count for webant test " + testName);
					t.end();
					return;
				}
				
				fs.readdir(opts.destDir,function(err3,files){
					if (err3) {
						t.fail("Could not read newly created build files for webant test " + testName + ": " + err3);
						t.end();
						return;
					}
					
					if (!files && !files.length) {
						t.fail("No files created for webant test " + testName);
						t.end();
						return;
					}
					
					files.sort();

                    var expectedFiles = ["main.js"];
                    
                    for (var i = 1; i < opts.numChunksExpected; i++) {
                        expectedFiles.push("main"+i+".js");
                    }
                    
                    expectedFiles.sort();
                    
                    t.equivalent(
                        files,
                        expectedFiles,
                        "File count should match expected chunk count for webant test " + testName
                    );
					
					var pjs = childProcess.exec(
						'phantomjs ' + shellEscape([phantomScript]),
						{
							cwd:path.join(baseDir,opts.testId),
							maxBuffer:1024*1024
						},
						function(err4,stdout,stderr) {
							pjs.kill();
							if (err4) {
								t.fail("phantomjs reports an error: " + err4);
								t.end();
								return;
							}
							if (stderr) {
								t.fail("phantomjs reports content in stderror: " + stderr);
								t.end();
								return;
							}
							var obj;
							try {
								obj = JSON.parse(stdout.trim());
							} catch(e) {
								t.fail("Could not JSON.parse() stdout for webant test " + testName + " [stdout is: " + stdout + "]");
								t.end();
								return;
							}
							opts.onTest(obj,opts,cb);
						}
					);
				});
			});
		});
	});
}

function go(testId,numChunksExpected,additionalOpts,onTest) {
	testId = testId.toString();
	additionalOpts = additionalOpts || {};
	
	testId = testId.toString();
	
	var srcDir = path.join(baseDir,testId,"src");
	var destDir = path.join(baseDir,testId,"build","js");
	
	var variations = [
		extend(true,{
			entry:path.join(srcDir,"main.js"),
			dest:path.join(destDir,"main.js"),
			urlDest:"js/main.js"
		},additionalOpts),
		
		extend(true,{
			entry:path.join(srcDir,"main.js"),
			dest:path.join(destDir,"main.js"),
			urlDest:"js/main.js",
			postProcess:"none"
		},additionalOpts),
		
		extend(true,{
			entry:path.join(srcDir,"main.js"),
			dest:path.join(destDir,"main.js"),
			urlDest:"js/main.js",
			postProcess:"compress"
		},additionalOpts),
		
		extend(true,{
			entry:path.join(srcDir,"main.js"),
			dest:path.join(destDir,"main.js"),
			urlDest:"js/main.js",
			postProcess:"debug"
		},additionalOpts)
		
		];
	
	test("webant " + testId,function(t){
		async.eachSeries(variations,function(variation,done){
			doTest({
				testId:testId,
				testVariation:variations.indexOf(variation),
				srcDir:srcDir,
				destDir:destDir,
				numChunksExpected:numChunksExpected,
				webantOpts:variation,
				t:t,
				onTest:onTest
			},done);
		},function(err){
			if (err) {
				t.fail(err);
			}
			t.end();
		});
	});
}

module.exports = go;