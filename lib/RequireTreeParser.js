var fs = require("fs");
var path = require("path");

var async = require("async");
var uglify = require("uglify-js");

var jsHandler = require("./util/jsHandler.js");

function noop() {}

function RequireTreeParser(webant) {
	this.webant = webant;
}

RequireTreeParser.prototype = {
	_getRequireTree:function(parnt,map,cb) {
		var _this = this;
		var opts = _this.webant.settings;
		var requires = _this.getRequires(parnt.ast);
		if (requires.length) {
			async.eachSeries(requires,function(req,done){
				var reqData = _this.getRequireData(req,parnt);
				
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
					
					_this._getRequireTree(datum,map,done);
				});
			},function(err){
				cb(err,parnt);
			});
		} else {
			cb(null,parnt);
		}
	},
	getRequires:function(ast) {
		var requires = [];
		ast.walk(new uglify.TreeWalker(function(node){
			if ((node instanceof uglify.AST_Call) && (node.expression.name === "require")) {
				var loc = "file: " + node.start.file
					+ "; line: " + node.start.line
					+ "; col: " + node.start.col;
				
				if (!node.args.length) {
					throw new Error("'require' called without arguments. First argument must " +
							"be a string literal or an array of string literals. Location: " + loc);
				}
				
				if (
					!(node.args[0] instanceof uglify.AST_String)
					&& !(node.args[0] instanceof uglify.AST_Array)
				) {
					throw new Error("First argument of 'require' function call not a string literal " +
							"or an array of string literals. Location: " + loc);
				}
				
				if (node.args[0] instanceof uglify.AST_Array) {
					if (!node.args[0].elements.length) {
						throw new Error("First argument of 'require' function call is an empty " +
								"array. Must be a string literal or an array of string literals. " +
								"Location: " + loc);
					}
					for (var i = 0; i < node.args[0].elements.length; i++) {
						if (!(node.args[0].elements[i] instanceof uglify.AST_String)) {
							throw new Error("First argument of 'require' function call is an array " +
									"where index " + i + " is not a string literal. First argument of " +
									"'require' call must be a string literal or an array of string " +
									"literals. Location " + loc);
						}
					}
				}
				
				var type = node.args.length === 1 ? "sync" : "async";
				if (node.args[0] instanceof uglify.AST_Array) {
					for (var i = 0; i < node.args[0].elements.length; i++) {
						requires.push({
							value:node.args[0].elements[i].value,
							nodeContainer:node.args[0].elements,
							nodeIdx:i,
							type:type
						});
					}
				} else {
					requires.push({
						value:node.args[0].value,
						nodeContainer:node.args,
						nodeIdx:0,
						type:type
					});
				}
			}
		}));
		return requires;
	},
	getRequireData:function(req,parnt){
		var opts = this.webant.settings;
		var raw = req.value;
		
		var sameAsChunk;
		var filePath;
		
		if (raw.indexOf("!") === 0) {
			// include in entry chunk
			sameAsChunk = opts.entry;
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
	},
	parse:function(src,cb) {
		var _this = this;
		
		cb = cb || noop;
		
		var opts = _this.webant.settings;
		var fp = opts.entry;
		
		opts = opts || {};
		opts.handlers = opts.handlers || {};
		opts.aliases = opts.aliases || {};
		
		if (typeof opts.defaultExtension === "undefined") {
			opts.defaultExtension = ".js";
		}
		
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
		
		_this._getRequireTree(into,map,cb);
	}
};

module.exports = RequireTreeParser;