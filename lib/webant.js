var fs = require("fs");
var path = require("path");
var url = require("url");

var async = require("async");

var getRequires = require("./getRequires.js");

var Requirements = require("./requirements.js");

var requirements = new Requirements();

var traversed = [];
var ancestry = [];

var handlers = [{
	willHandle:function(scope,done) {
		done(null,true);
	},
	handle:function(data,update,done) {
		fs.readFile(data.filePath,function(err,content){
			if (err) {
				done(err);
				return;
			}
			update({
				type:"internalJs",
				content:content.toString()
			},done);
		});
	}
}];

function removeFalsies(item) {
	return item;
}

function extend(into,from) {
	if (!into) {
		return into;
	}
	if (typeof into !== "object") {
		return into;
	}
	if (!from) {
		return into;
	}
	if (typeof from !== "object") {
		return into;
	}
	for (var key in from) {
		if (from.hasOwnProperty(key)) {
			into[key] = from[key];
		}
	}
}

function checkCircularReferences() {
	if (ancestry.length < 2) {
		return false;
	}
	var filePath = ancestry[0];
	for (var i = 1; i < ancestry.length; i++) {
		if (ancestry[i] === filePath) {
			return true;
		}
	}
	return false;
}

function processScope(scope,callback) {
	function update(data,done) {
		var copy = {};
		extend(copy,scope)
		extend(copy,data);
		traversed[copy.filePath] = true;
		requirements[copy.type](copy);
		process(copy,done);
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
			callback("No handlers registered can handle file: "+scope.filePath);
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
		
		async.parallel(funcs,callback);
	});
}

function process(scope,callback) {
	if (traversed.hasOwnProperty(scope.filePath)) {
		callback(null);
		return;
	}
	
	ancestry.unshift(scope.filePath);
	
	if (checkCircularReferences()) {
		callback("Circular reference detected for require '"+scope.filePath+"': "+ancestry.toString());
		return;
	}
	if (scope.type === "internalJs") {
		try {
			var requires = getRequires(scope.content);
		} catch(e) {
			callback(e.toString());
			return;
		}
		
		var funcs = requires.map(function(require){
			return function(cb) {
				process({
					filePath:url.parse(require,false,true).host ? require : path.join(path.dirname(scope.filePath),require),
					raw:require,
					parentScope:scope
				},cb);
			};
		});
		async.series(funcs,function(err,data){
			if (err) {
				callback(err);
				return;
			}
			processScope(scope,function(err){
				if (err) {
					callback(err);
					return;
				}
				ancestry.shift();
				callback(null);
			});
		});
	} else {
		processScope(scope,function(err){
			if (err) {
				callback(err);
				return;
			}
			ancestry.shift();
			callback(null);
		});
	}
}

process({
	type:"internalJs",
	filePath:__dirname+"/test/main.js",
	content:fs.readFileSync("./test/main.js").toString()
},function(err){
	console.dir(requirements.data);
});