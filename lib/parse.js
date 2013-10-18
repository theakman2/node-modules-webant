var fs = require("fs");
var path = require("path");
var url = require("url");

var async = require("async");

var extend = require("./extend.js");
var getRequires = require("./getRequires.js");

var traversed = {};
var ancestry = [];

function removeFalsies(item) {
	return item;
}

function checkCircularReferences() {
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

function _parse(scope,callback) {
	"use strict";
	
	Object.freeze(scope);
	
	ancestry.unshift(scope.filePath);
	
	if (checkCircularReferences()) {
		callback("Circular reference detected for require '"+scope.filePath+"': "+ancestry.toString());
		return;
	}
	
	function update(data,done) {
		var copy = {};
		extend(copy,scope);
		extend(copy,data);

		if (!traversed.hasOwnProperty(copy.filePath) && (copy.type === "internalJs")) {
			traversed[copy.filePath] = true;
			
			try {
				var requires = getRequires(copy.content);
			} catch(e) {
				callback(e.toString());
				return;
			}
			
			var funcs = requires.map(function(require){
				return function(cb) {
					_parse({
						requireType:require.type,
						filePath:url.parse(require,false,true).host ? require.literal : path.join(path.dirname(copy.filePath),require.literal),
						raw:require.literal,
						parentScope:scope
					},cb);
				};
			});
			
			async.series(funcs,function(err,data){
				if (err) {
					done(err);
					return;
				}
				requirements.update(copy);
				done(null);
			});
		} else {
			requirements.update(copy);
			done(null);
		}
	}
	
	var funcs = handlers.map(function(handler){
		return function(cb) {
			handler.willHandle(scope,cb);
		}
	});
	
	async.parallel(funcs,function(err,data){
		if (err) {
			callback(err);
			return;
		}

		if (!data.filter(removeFalsies).length) {
			callback("No handlers registered can handle: "+scope.toString());
			return;
		}
		
		var ableHandlers = [];
		data.forEach(function(canHandle,index){
			if (canHandle) {
				ableHandlers.push(handlers[index]);
			}
		});
		
		var funcs = ableHandlers.map(function(handler){
			return function(cb) {
				handler.handle(scope,update,cb);
			}
		});
		
		async.parallel(funcs,function(err){
			if (err) {
				callback(err);
				return;
			}
			ancestry.shift();
			callback(null);
		});
	});
}

function parse(scope,_handlers,_requirements,callback) {
	handlers = _handlers;
	requirements = _requirements;
	_parse(scope,callback);
}

module.exports = parse;