var fs = require("fs");
var path = require("path");
var url = require("url");

var async = require("async");
var uglify = require("uglify-js");
var extend = require("extend");

var Chunker = require("./util/Chunker.js");
var requireWalk = require("./util/requireWalk.js");

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

function getFilePath(raw,base) {
	if (raw.indexOf("@@") === 0) {
		return raw;
	}
	
	if (url.parse(raw,false,true).host) {
		return raw;
	}
	
    return path.resolve(path.dirname(base),raw);
}

function rawToAsts(opts,callback) {
	"use strict";
	var chunker = new Chunker();
	var fileToAstMap = {};
	var ancestry = [];
	var callback = callback || function(){};
	var handlerObj = extend(true,{js:{}},opts.handlers||{});
	
	var handlers = getHandlers(handlerObj);
	
	function _rawToAsts(filePath,sameAsChunk,complete) {		
		chunker.update(filePath,sameAsChunk);
		
		ancestry.unshift(filePath);
		
		if (checkCircularReferences(ancestry)) {
			ancestry.shift();
			complete("Circular reference detected at " + filePath + "\nRequire history:\n"
					+ ancestry.join("\n"));
			return;
		}
		
		if (fileToAstMap.hasOwnProperty(filePath)) {
			ancestry.shift();
			complete(null);
			return;
		}
		
		var canHandle = null;
		
		for (var i = 0; i < handlers.length; i++) {
			if (handlers[i].willHandle(filePath)) {
				canHandle = handlers[i];
				break;
			}
		}

		if (!canHandle) {
			ancestry.shift();
			complete("No handlers registered to handle: " + filePath);
			return;
		}
		
		canHandle.handle(filePath,function(err,content){
			if (err) {
				ancestry.shift();
				complete(err);
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
					_rawToAsts(require.filePath,require.sameAsChunk,cb);
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
		});
	}
	
	function callbackWrapper(err) {
		if (err) {
			callback(err);
			return;
		}
		var chunks = chunker.getChunks();
		
		var data = [];
		
		for (var i = 0; i < chunks.length; i++) {
			var datum = {};
			for (var j = 0; j < chunks[i].length; j++) {
				var filePath = chunks[i][j];
				datum[filePath] = fileToAstMap[filePath];
			}
			data.push(datum);
		}
		
		callback(null,data);
	}
	
	_rawToAsts(path.resolve(opts.entry),undefined,callbackWrapper);
	
}

module.exports = rawToAsts;