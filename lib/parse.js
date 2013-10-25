var fs = require("fs");
var path = require("path");
var url = require("url");

var async = require("async");

var Requirements = require("./Requirements.js");
var extend = require("./extend.js");
var getRequires = require("./getRequires.js");
var getHandlers = require("./getHandlers.js");

var requirements;
var handlers = [];
var traversed = {};
var ancestry = [];
var requireAliases = {};

function removeFalsies(item) {
	return item;
}

function getFilePath(raw,base) {
	if (url.parse(raw,false,true).host) {
		return raw;
	}
	
	if (requireAliases.hasOwnProperty(raw)) {
		return requireAliases[raw];
	}
	
	if (!path.extname(raw)) {
		raw += ".js";
	}
	
	return path.resolve(base,raw);
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
	Object.freeze(scope);
	
	ancestry.unshift(scope.filePath);
	
	if (checkCircularReferences()) {
		callback("Circular reference detected for require " +
				"'"+scope.filePath+"': "+ancestry.toString());
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
			
			async.eachSeries(
				requires,
				function(require,cb){
					_parse({
						requireType:require.type,
						filePath:getFilePath(require.literal,path.dirname(copy.filePath)),
						raw:require.literal,
						parentScope:scope
					},cb);
				},
				function(err){
					if (err) {
						done(err);
						return;
					}
					requirements.update(copy);
					done(null);
				}
			);
		} else {
			requirements.update(copy);
			done(null);
		}
	}
	
	async.map(
		handlers,
		function(handler,cb) {
			handler.willHandle(scope,cb);
		},
		function(err,data){
			if (err) {
				callback(err);
				return;
			}

			if (!data.filter(removeFalsies).length) {
				callback("No handlers registered can handle: "+JSON.stringify(scope));
				return;
			}
			
			var ableHandlers = [];
			data.forEach(function(canHandle,index){
				if (canHandle) {
					ableHandlers.push(handlers[index]);
				}
			});
			
			async.each(
				ableHandlers,
				function(handler,cb) {
					handler.handle(scope,update,cb);
				},
				function(err){
					if (err) {
						callback(err);
						return;
					}
					ancestry.shift();
					callback(null);
				}
			);
		}
	);
}

function parse(opts,callback) {
	"use strict";
	
	var settings = extend({
		requireAliases:{},
		handlers:{
			js:{},
			css:{},
			external:{}
		}
	},opts);
	
	requirements = new Requirements();
	
	handlers = getHandlers(settings.handlers);
	
	requireAliases = {};
	
	if (handlers) {
		handlers.forEach(function(handler){
			if (handler.requireAliases) {
				extend(requireAliases,handler.requireAliases);
			}
		});
	}
	
	extend(requireAliases,settings.requireAliases);
	
	traversed = {};
	ancestry = [];
	
	var scope = {
		type:"internalJs",
		filePath:settings.jsEntryPath
	};
	
	_parse(scope,function(err){
		if (err) {
			callback(err);
			return;
		}
		callback(null,{
			internalJs:requirements.getInternalJs(),
			internalCss:requirements.getInternalCss(),
			externalJs:requirements.getExternalJs(),
			externalCss:requirements.getExternalCss()
		});
	});
}

module.exports = parse;