var fs = require("fs-extra");
var path = require("path");
var childProcess = require("child_process");

var async = require("async");
var extend = require("extend");
var shellEscape = require("shell-escape");
var test = require("tap").test;

var Webant = require("../../lib/Webant.js");

var baseDir = path.join(__dirname,"..","webant");
var phantomScript = path.join(baseDir,"phantomwebant.js");

function doTest(opts,cb) {
	var testName = "[" + opts.testId + "," + opts.testVariation + "]";
	var t = opts.t;
	var webant = new Webant(opts.webantOpts);
	go.webantTest(path.join(baseDir,opts.testId),webant,t,null,function(err,out,obj){
		if (typeof opts.chunksExpected === "number") {
			var expectedFiles = ["main.js"];
			
			for (var i = 1; i < opts.chunksExpected; i++) {
				expectedFiles.push("main"+i+".js");
			}
			expectedFiles.sort();
			var numChunksExpected = opts.chunksExpected;
		} else {
			var expectedFiles = opts.chunksExpected;
			var numChunksExpected = opts.chunksExpected.length;
		}
		
		if (out.length !== numChunksExpected) {
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
			
			t.equivalent(
				files,
				expectedFiles,
				"Files should match expected files for webant test " + testName
			);
			opts.onTest(obj,opts,cb);
		});
	});
}

function go(testId,chunksExpected,additionalOpts,onTest) {
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
				chunksExpected:chunksExpected,
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

go.phantom = function(cwd,cb) {
	var pjs = childProcess.exec(
		'phantomjs ' + shellEscape([phantomScript]),
		{
			cwd:cwd,
			maxBuffer:1024*1024
		},
		function(err4,stdout,stderr) {
			pjs.kill();
			if (err4) {
				cb("phantomjs reports an error: " + err4);
				return;
			}
			if (stderr) {
				cb("phantomjs reports content in stderror: " + stderr);
				return;
			}
			var obj;
			try {
				obj = JSON.parse(stdout.trim());
			} catch(e) {
				cb("Could not JSON.parse() stdout for webant test [stdout is: " + stdout + "]");
				return;
			}
			cb(null,obj);
		}
	);
};

go.webantTest = function(dest,webant,t,equiv,cb) {
	fs.remove(path.join(dest,"build","js"),function(err){
		if (err) {
			t.fail("Build directory not cleared: " + err);
			t.end();
			return;
		}
		fs.exists(path.join(dest,"build","js"),function(exists){
			if (exists) {
				t.fail("Build directory not cleared.");
				t.end();
				return;
			}
			webant.build(function(err2,out){
				if (err2) {
					t.fail("Error encountered while compiling webant test: " + err2);
					t.end();
					return;
				}
				go.phantom(dest,function(err4,obj){
					if (err4) {
						t.fail(err4);
						t.end();
						return;
					}
					if (equiv !== null) {
						t.equivalent(obj,equiv);
					}
					cb(null,out,obj);
				});
			});
		});
	});
};

module.exports = go;