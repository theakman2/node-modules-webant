var path = require("path");

var uglify = require("uglify-js");
var extend = require("extend");

function RequireFinder(requireTreeParser) {
	this.requireTreeParser = requireTreeParser;
}

RequireFinder.prototype = {
	_parseParams:function(str) {
		var ret = {};
		
		str = str.replace(/`\|/g,"\v").replace(/`=/g,"\f");
		var parts = str.split("|");
		
		ret.filePath = parts[0];
		ret.params = {};
		
		for (var i = 1, len = parts.length; i < len; ++i) {
			var subparts = parts[i].split("=");
			var key = subparts[0].replace(/\v/g,"|").replace(/\f/g,"=");
			var value = typeof subparts[1] !== "undefined" ? subparts[1].replace(/\v/g,"|").replace(/\f/g,"=") : null;
			ret.params[key] = value;
		}
		
		return ret;
	},
	_parseVariables:function(str,data) {
		if (!str) {
			return str;
		}
		return str
			.replace(/`\{/g,"\v")
			.replace(/`\}/g,"\f")
			.replace(/\{(.*?)\}/g,function(m,m1){
				return (typeof data[m1] === "undefined") ? "" : data[m1];
			})
			.replace(/\v/g,"{")
			.replace(/\f/g,"}");
	},
	_parse:function(value,data,filePath) {
		var opts = this.requireTreeParser.webant.settings;
		
		var ret = this._parseParams(value);
		ret.filePath = this._parseVariables(ret.filePath,data);
		ret.filePath = path.resolve(
			opts.requireBase || path.dirname(filePath),
			ret.filePath
		);
		
		if (opts.defaultExtension && !path.extname(ret.filePath)) {
			ret.filePath += opts.defaultExtension;
		}
		
		var params = {};
		
		for (var key in ret.params) {
			if (ret.params.hasOwnProperty(key)) {
				params[this._parseVariables(key,data)] = this._parseVariables(ret.params[key],data);
			}
		}
		
		ret.params = params;
		return ret;
	},
	_getTemplateData:function(requireNode,filePath){
		var ret = {};
		var opts = this.requireTreeParser.webant.settings;
		if (opts.aliases) {
			extend(ret,opts.aliases);
		}
		ret.entry = opts.files[0].entry;
		ret.curr = filePath;
		return ret;
	},
	_getDefaultParams:function(requireNode,filePath){
		var ret = {};
		if (requireNode.args.length === 1) {
			ret.sameAsChunk = filePath;
		}
		return ret;
	},
	_pushRequire:function(node,container,idx,filePath,context) {
		var params = this._getTemplateData(node,filePath);
		var reqData = this._parse(container[idx].value, params, filePath);
		reqData.params = extend(
			true,
			this._getDefaultParams(node,filePath),
			reqData.params
		);
		reqData.setValue = function(val) {
			container[idx] = val;
		};
		context.push(reqData);
	},
	find:function(ast,filePath) {
		var _this = this;
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
				
				if (node.args[0] instanceof uglify.AST_Array) {
					for (var i = 0, len = node.args[0].elements.length; i < len; ++i) {
						_this._pushRequire(node,node.args[0].elements,i,filePath,requires);
					}
				} else {
					_this._pushRequire(node,node.args,0,filePath,requires);
				}
			}
		}));
		return requires;
	}
};

module.exports = RequireFinder;