var path = require("path");

var uglify = require("uglify-js");
var jsStringEscape = require("js-string-escape");

var stringifyNode = require("./util/stringifyNode.js");
var bootstrap = require("./public/dist/bootstrap.js");

function mapChunks(chunks) {
	var map = {};
	var len = chunks.length;
	for (var i = 0; i < len; ++i) {
		var len2 = chunks[i].length;
		for (var j = 0; j < len2; ++j) {
			map[chunks[i][j].filePath] = [i,j];
		}
	}
	return map;
};

function chunkIdxToUrl(idx,urlDest) {
	if (idx === 0) {
		return urlDest;
	}
	
	var urlDir = path.dirname(urlDest);
	var urlExt = path.extname(urlDest);
	var urlBase = path.basename(urlDest,urlExt);
	
	if (urlBase + urlExt === urlDest) {
		var srcBefore = urlBase;
	} else {
		var srcBefore = urlDir+"/"+urlBase;
	}
	
	return srcBefore + idx + urlExt;
}

function chunkIdxToFilePath(idx,dest) {
	if (idx === 0) {
		return dest;
	}
	var dir = path.dirname(dest);
	var ext = path.extname(dest);
	var base = path.basename(dest,ext);
	return (dir + path.sep + base + idx + ext);
}

function stringifyChunk(chunk, opts, map) {
	var ret = "{";
	var i = chunk.length;
	while (i--) {
		var j = chunk[i].requires.length;
		while (j--) {
			var r = chunk[i].requires[j];
			r.nodeContainer[r.nodeIdx] = new uglify.AST_Array({
				elements : [ new uglify.AST_String({
					value : chunkIdxToUrl(map[r.data.filePath][0],opts.urlDest)
				}), new uglify.AST_String({
					value : map[r.data.filePath][1].toString()
				}) ]
			});
		}
		ret += '\n"' + i + '":function(require,module,exports) {\n';
		ret += stringifyNode(chunk[i],opts.postProcess);
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
		var chunkContent = stringifyChunk(chunks[i],opts,map);
		ret.push({
			content:"window[" + chunkGlobalVar + "]"
				+ " = "
				+ "window[" + chunkGlobalVar + "]"
				+ " || {};"
				+ "\n"
				+ "window[" + chunkGlobalVar + "]['" + jsStringEscape(chunkIdxToUrl(i,opts.urlDest)) + "']"
				+ " = "
				+ chunkContent
				+ ";\n",
			filePath:chunkIdxToFilePath(i,opts.dest)
		});
	}
	
	if (opts.includeBootstrap) {
		var entry = map[opts.entry];
		
		var replacements = {
			entryChunk:'"' + jsStringEscape(chunkIdxToUrl(entry[0],opts.urlDest)) + '"',
			entryModule:'"' + entry[1] + '"',
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
		
		ret[entry[0]].content += "\n" + bootstrapContent;
	}
	
	return ret;
}

module.exports = stringifyChunks;