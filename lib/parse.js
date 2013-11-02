var fs = require("fs");
var path = require("path");

var async = require("async");
var uglify = require("uglify-js");

var parsedToString = require("./parsedToString.js");
var Chunker = require("./Chunker.js");
var requireWalk = require("./requireWalk.js");

var getHandlers = require("./getHandlers.js");
var extend = require("./extend.js");

function checkCircularReferences(ancestry) {
    if (ancestry.length < 2) {
        return false;
    }
    for (var i = 1; i < ancestry.length; i++) {
        if (ancestry[i] === ancestry[0]) {
            return true;
        }
    }
    return false;
}

function getFilePath(raw,base) {
    if (!path.extname(raw)) {
        raw += ".js";
    }
    
    return path.resolve(path.dirname(base),raw);
}

function parse(opts,callback) {
	"use strict";
	var chunker = new Chunker();
	var fileToAstMap = {};
	var ancestry = [];
	var callback = callback || function(){};
	var handlers = getHandlers(extend({
		js:{}
	},opts.handlers||{}));
	
	function _parse(content,filePath,sameAsChunk,complete) {
		ancestry.unshift(filePath);
		
		if (checkCircularReferences(ancestry)) {
			ancestry.shift();
			complete("Circular reference detected at " + filePath +
					"\nRequire history:\n" + ancestry.join("\n"));
			return;
		}

		chunker.update(filePath,sameAsChunk);
		
		if (fileToAstMap.hasOwnProperty(filePath)) {
			ancestry.shift();
			complete(null);
			return;
		}
		
		var ast = uglify.parse(content,{filename:filePath});
		
		var requires = [];
		
		requireWalk(ast,function(node,type){
			var resolved = getFilePath(node.value,filePath);
			requires.push({
				filePath:resolved,
				sameAsChunk:type === "async" ? undefined : filePath
			});
			node.value = resolved;
		});
		
		fileToAstMap[filePath] = ast;
		
		if (!requires.length) {
			ancestry.shift();
			complete(null);
			return;
		}
		
		async.eachSeries(
			requires,
			function(require,cb){
				async.filter(
					handlers,
					function(handler,done) {
						handler.willHandle(require.filePath,done);
					},
					function(canHandle) {
						if (!canHandle.length) {
							ancestry.shift();
							complete("No handlers registered to handle: " + require.filePath);
							return;
						}
						async.eachSeries(
							canHandle,
							function(handler,done) {
								handler.handle(require.filePath,function(err,content){
									if (err) {
										done(err);
										return;
									}
									_parse(content,require.filePath,require.sameAsChunk,done);
								});
							},
							cb
						);
					}
				);
			},
			function(err){
				ancestry.shift();
				if (err) {
					complete(err);
					return;
				}
				complete(null);
			}
		);
	}
	
	function callbackWrapper(err) {
		if (err) {
			callback(err);
			return;
		}
		var chunks = chunker.getChunks();
		
		var data = {};
		
		for (var chunkId in chunks) {
			if (chunks.hasOwnProperty(chunkId)) {
				data[chunkId] = {};
				for (var i = 0; i < chunks[chunkId].length; i++) {
					var filePath = chunks[chunkId][i];
					data[chunkId][filePath] = fileToAstMap[filePath];
				}
			}
		}
		
		parsedToString({
			entry:opts.filePath,
			data:data
		},opts.urlBase,callback);
	}
	
	if (opts.filePath && !opts.hasOwnProperty("content")) {
		fs.readFile(opts.filePath,function(err,content){
			if (err) {
				callback(err);
				return;
			}		
			_parse(content.toString(),opts.filePath,undefined,callbackWrapper);
		});
	} else {
		_parse(opts.content,opts.filePath,undefined,callbackWrapper);
	}

}

module.exports = parse;

parse({
	filePath:"main.js",
	urlBase:"main."
},function(err,data){
	console.log(err);
	require("./write.js")(data,"OUT/main.",function(err){
		console.log(err);
	});
});