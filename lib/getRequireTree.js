var fs = require("fs");
var path = require("path");

var async = require("async");
var uglify = require("uglify-js");

var handlers = require("./util/handlers.js");
var getRequires = require("./util/getRequires.js");
var jsHandler = require("./util/jsHandler.js");

function noop() {}

function getRequireData(req,parnt,entry,opts) {
	var raw = req.value;
	
	var sameAsChunk;
	var filePath;
	
	if (raw.indexOf("!") === 0) {
		// include in entry chunk
		sameAsChunk = entry;
		raw = raw.substring(1);
	} else if (req.type === "sync") {
		sameAsChunk = parnt.filePath;
	}
	
	if (opts.aliases && opts.aliases.hasOwnProperty(raw)) {
		filePath = opts.aliases[raw];
	} else {
		filePath = path.resolve(
			opts.requireBase || path.dirname(parnt.filePath),
			raw
		);
	}
	
	if (opts.defaultExtension && !path.extname(filePath)) {
		filePath += opts.defaultExtension;
	}
	
	return {filePath:filePath,sameAsChunk:sameAsChunk};
}

function _getRequireTree(parnt,fp,opts,map,cb) {
	var requires = getRequires(parnt.ast);
	if (requires.length) {
		async.eachSeries(requires,function(req,done){
			var reqData = getRequireData(req,parnt,fp,opts);
			
			req.sameAsChunk = reqData.sameAsChunk;
			req.parnt = parnt;
			req.idx = parnt.requires.push(req) - 1;
			
			if (map[reqData.filePath]) {
				req.data = map[reqData.filePath];
				done(null);
				return;
			}
			
			var datum = {};
			map[reqData.filePath] = datum;
			req.data = datum;
			
			datum.filePath = reqData.filePath;
			datum.requires = [];			
			
			opts.handlers[path.extname(datum.filePath)](datum.filePath,function(err,js){
				var ast;
				
				try {
					ast = uglify.parse(js,{filename:datum.filePath});
				} catch(e) {
					e.filePath = datum.filePath;
					done(e);
					return;
				}
				
				datum.ast = ast;
				
				_getRequireTree(datum,fp,opts,map,done);
			});
		},cb);
	} else {
		cb(null);
	}
}

function getRequireTreeRecursive(fp,src,opts,cb) {
	var ast;
	
	try {
		ast = uglify.parse(src,{filename:fp});
	} catch(e) {
		e.filePath = fp;
		cb(e);
		return;
	}
	
	var into = {
		filePath:fp,
		ast:ast,
		requires:[]
	};
	
	var map = {};
	map[fp] = into;
	
	_getRequireTree(into,fp,opts,map,function(err){
		if (err) {
			cb(err);
			return;
		}
		cb(null,map);
	});
}

function getRequireTree() {
	var args = Array.prototype.slice.call(arguments);
	if (!args.length) {
		throw new Error("No filepath provided");
	}
	var fp, src, opts, cb;
	for (var i = 0, l = args.length; i < l; ++i) {
		if (typeof args[i] === "string") {
			if (typeof fp === "undefined") {
				fp = args[i];
			} else {
				src = args[i];
			}
		} else if (typeof args[i] === "function") {
			cb = args[i];
		} else if (Object.getPrototypeOf(args[i]) === Object.prototype) {
			opts = args[i];
		}
	}
	
	if (!fp) {
		throw new Error("No filepath provided");
	}
	
	fp = path.resolve(fp);
	
	cb = cb || noop;
	
	opts = opts || {};
	opts.handlers = opts.handlers || {};
	opts.aliases = opts.aliases || {};
	
	handlers.push(jsHandler,opts.handlers,opts.aliases);
	
	if (typeof opts.defaultExtension === "undefined") {
		opts.defaultExtension = ".js";
	}
	
	if (src) {
		getRequireTreeRecursive(fp,src,opts,cb);
	} else {
		fs.readFile(fp,function(e,c){
			if (e) {
				throw e;
			}
			getRequireTreeRecursive(fp,c.toString(),opts,cb);
		});
	}
	
}

module.exports = getRequireTree;