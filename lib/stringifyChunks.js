var uglify = require("uglify-js");
var jsStringEscape = require("js-string-escape");

var bootstrap = require("./public/dist/bootstrap.js");

function stringifyNode(node, postProcess) {
	postProcess = postProcess || "none";
	
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
}

function mapChunks(chunks) {
	var map = {};
	var len = chunks.length;
	for (var i = 0; i < len; ++i) {
		var len2 = chunks[i].modules.length;
		for (var j = 0; j < len2; ++j) {
			map[chunks[i].modules[j].filePath] = [chunks[i],i,j];
		}
	}
	return map;
};

function stringifyChunk(chunk, opts, map) {
	var ret = "{";
	var i = chunk.modules.length;
	while (i--) {
		var j = chunk.modules[i].requires.length;
		while (j--) {
			var r = chunk.modules[i].requires[j];
			r.nodeContainer[r.nodeIdx] = new uglify.AST_Array({
				elements : [ new uglify.AST_String({
					value : map[r.data.filePath][0].urlDest
				}), new uglify.AST_String({
					value : map[r.data.filePath][2].toString()
				}) ]
			});
		}
		ret += '\n"' + i + '":function(require,module,exports) {\n';
		ret += stringifyNode(chunk.modules[i],opts.postProcess);
		ret += "\n";
		ret += "}";
		if (i !== 0) {
			ret += ",";
		}
	}
	ret += "}";
	return ret;
}

function stringifyChunks(chunks,opts) {
	var map = mapChunks(chunks);
	var ret = [];
	
	var chunkGlobalVar = '"' + jsStringEscape(opts.browserGlobalVar) + '"';
	
	var len = chunks.length;
	for(var i = 0; i < len; ++i) {
		var data = {
			content:"window[" + chunkGlobalVar + "]"
				+ " = "
				+ "window[" + chunkGlobalVar + "]"
				+ " || {};"
				+ "\n"
				+ "window[" + chunkGlobalVar + "]['" + jsStringEscape(chunks[i].urlDest) + "']"
				+ " = "
				+ stringifyChunk(chunks[i],opts,map)
				+ ";\n",
			filePath:chunks[i].fileDest
		};
		
		ret.push(data);
	}
	
	if (opts.includeBootstrap) {
		var entry = map[opts.entry];
		
		var replacements = {
			entryChunk:'"' + jsStringEscape(entry[0].urlDest) + '"',
			entryModule:'"' + entry[2] + '"',
			isMultiChunk:(chunks.length > 1),
			chunkGlobalVar:chunkGlobalVar
		};
		
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
		
		ret[entry[1]].content += "\n" + bootstrapContent;
	}
	
	return ret;
}

module.exports = stringifyChunks;