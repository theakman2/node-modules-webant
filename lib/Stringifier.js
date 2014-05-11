var uglify = require("uglify-js");
var jsStringEscape = require("js-string-escape");

var bootstrap = require("./public/dist/bootstrap.js");

function Stringifier(webant) {
	this.webant = webant;
}

Stringifier.prototype = {
	_mapChunks:function(chunks) {
		var map = {};
		var len = chunks.length;
		for (var i = 0; i < len; ++i) {
			var len2 = chunks[i].modules.length;
			for (var j = 0; j < len2; ++j) {
				map[chunks[i].modules[j].filePath] = [chunks[i],i,j];
			}
		}
		return map;
	},
	_stringifyNode:function(node){
		var postProcess = this.webant.settings.postProcess || "none";
		
		switch (postProcess) {
			case "none":
				return node.ast.print_to_string({
					comments : true,
					beautify : true,
					bracketize : true,
					semicolons : true
				});
				break;
			case "debug":
				var lines = {};
				
				var walker = new uglify.TreeWalker(function(n) {
					if (!(n.start && (typeof n.start === "object"))) {
						n.start = {};
					}
					
					if (!n.start.hasOwnProperty("comments_before")) {
						n.start.comments_before = [];
					}
					
					if (n.start.line && !lines.hasOwnProperty(n.start.line)) {
						lines[n.start.line] = true;
						n.start.comments_before.push({
							value : node.filePath + ": " + n.start.line,
							type : 'comment1'
						});
					}
				});
				
				node.ast.walk(walker);
				
				return node.ast.print_to_string({
					comments : true,
					beautify : true,
					bracketize : true,
					semicolons : true
				});
				
				break;
			case "compress":
				node.ast.figure_out_scope();
				var compressed = node.ast.transform(uglify.Compressor());
				compressed.figure_out_scope();
				compressed.compute_char_frequency();
				compressed.mangle_names({
					except : [ "require", "module", "exports" ]
				});
				return compressed.print_to_string();
				break;
		}
	},
	_stringifyChunk:function(chunk,map){
		var opts = this.webant.settings;
		var ret = "{";
		var i = chunk.modules.length;
		while (i--) {
			var j = chunk.modules[i].requires.length;
			while (j--) {
				var r = chunk.modules[i].requires[j];
				r.setValue(new uglify.AST_Array({
					elements : [ new uglify.AST_String({
						value : map[r.data.filePath][0].urlDest
					}), new uglify.AST_String({
						value : map[r.data.filePath][2].toString()
					}) ]
				}));
			}
			ret += '\n"' + i + '":function(require,module,exports) {\n';
			ret += this._stringifyNode(chunk.modules[i]);
			ret += "\n";
			ret += "}";
			if (i !== 0) {
				ret += ",";
			}
		}
		ret += "}";
		return ret;
	},
	stringify:function(chunks){
		var opts = this.webant.settings;
		var map = this._mapChunks(chunks);
		var ret = [];
		
		var chunkGlobalVar = '"' + jsStringEscape(opts.browserGlobalVar) + '"';
		
		var len = chunks.length;
		for(var i = 0; i < len; ++i) {
			var data = {
				content:"window[" + chunkGlobalVar + "] = window[" + chunkGlobalVar + "] || {};"
					+ "\n"
					+ "window[" + chunkGlobalVar + "].modules = window[" + chunkGlobalVar + "].modules || {};"
					+ "\n"
					+ "window[" + chunkGlobalVar + "].modules['" + jsStringEscape(chunks[i].urlDest) + "']"
					+ " = "
					+ this._stringifyChunk(chunks[i],map)
					+ ";\n",
				filePath:chunks[i].fileDest
			};
			
			ret.push(data);
		}
		
		if (opts.includeBootstrap) {
			var bootstrapModule = map[opts.includeBootstrap];
			if (typeof bootstrapModule === "undefined") {
				throw new Error(
					"Cannot find module '"
						+ opts.includeBootstrap
						+ "' to include the bootstrap."
				);
			}
			
			var replacements = {
				entryModules:[],
				isMultiChunk:(chunks.length > 1),
				chunkGlobalVar:chunkGlobalVar
			};
			
			if (opts.entryModules) {
				for (var i = 0, len = opts.entryModules.length; i < len; ++i) {
					var el = map[opts.entryModules[i]];
					if (typeof el === "undefined") {
						throw new Error("Module '" + opts.entryModules[i] + "' not found.");
					}
					replacements.entryModules.push({
						chunk:'"' + jsStringEscape(el[0].urlDest) + '"',
						module:'"' + el[2] + '"'
					});
				}
			}
			
			if (opts.postProcess === "compress") {
				var bootstrapContent = uglify.minify(
					bootstrap(replacements),
					{
						fromString:true
					}
				).code;
			} else {
				var bootstrapContent = bootstrap(replacements);
			}

			ret[bootstrapModule[1]].content += "\n" + bootstrapContent;
		}
		
		return ret;
	}
};

module.exports = Stringifier;