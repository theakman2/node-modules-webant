var fs = require("fs");
var path = require("path");

var async = require("async");
var uglify = require("uglify-js");

var Chunker = require("./util/Chunker.js");
var requireWalk = require("./util/requireWalk.js");
var extend = require("./util/extend.js");

var getHandlers = require("./getHandlers.js");

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

function rawToAsts(opts,callback) {
	"use strict";
	var chunker = new Chunker();
	var fileToAstMap = {};
	var ancestry = [];
	var callback = callback || function(){};
	var handlerObj = extend(true,{js:{}},opts.handlers||{});
	
	var handlers = getHandlers(handlerObj);
	
	var requireAliases = {};
	for (var i = 0; i < handlers.length; i++) {
		if (handlers[i].aliases && (typeof handlers[i].aliases === "object")) {
			extend(requireAliases,handlers[i].aliases);
		}
	}
	extend(requireAliases,opts.aliases);
	
	function getFilePath(raw,base) {
		if (requireAliases.hasOwnProperty(raw)) {
	    	return requireAliases[raw];
	    }
		
		if (!path.extname(raw)) {
	        raw += opts.defaultExtension;
	    }
	    
	    return path.resolve(path.dirname(base),raw);
	}
	
	function _rawToAsts(content,filePath,sameAsChunk,complete) {
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
									_rawToAsts(content,require.filePath,require.sameAsChunk,done);
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
				var newChunkId = chunkId;
				if (chunks[chunkId].indexOf(opts.entry) > -1) {
					newChunkId = "entry";
				}
				data[newChunkId] = {};
				for (var i = 0; i < chunks[chunkId].length; i++) {
					var filePath = chunks[chunkId][i];
					data[newChunkId][filePath] = fileToAstMap[filePath];
				}
			}
		}
		
		callback(null,data);
	}
	
	if (opts.entry && !opts.hasOwnProperty("content")) {
		fs.readFile(opts.entry,function(err,content){
			if (err) {
				callback(err);
				return;
			}		
			_rawToAsts(content.toString(),opts.entry,undefined,callbackWrapper);
		});
	} else {
		_rawToAsts(opts.content,opts.entry,undefined,callbackWrapper);
	}

}

module.exports = rawToAsts;