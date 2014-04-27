var path = require("path");

var uglify = require("uglify-js");
var fs = require("fs-extra");
var async = require("async");
var jsStringEscape = require("js-string-escape");
var bootstrap = require("./public/dist/bootstrap.js");

var stringifyNode = require("./util/stringifyNode.js");

function noop() {}

function stringifyChunk(chunk, postProcess, map, chunkIdx) {
	var ret = "{";
	var i = chunk.length;
	while (i--) {
		var j = chunk[i].requires.length;
		while (j--) {
			var r = chunk[i].requires[j];
			r.nodeContainer[r.nodeIdx] = new uglify.AST_Array({
				elements : [ new uglify.AST_String({
					value : map[r.data.filePath][0].toString()
				}), new uglify.AST_String({
					value : map[r.data.filePath][1].toString()
				}) ]
			});
		}
		ret += '\n"' + i + '":function(require,module,exports) {\n';
		ret += stringifyNode(chunk[i],postProcess);
		ret += "\n";
		ret += "}";
		if (i !== 0) {
			ret += ",";
		}
	}
	ret += "}";
	return ret;
}

function stringifyChunks(chunks,postProcess,map) {
	var ret = [];
	var len = chunks.length;
	for(var i = 0; i < len; ++i) {
		ret.push(stringifyChunk(chunks[i],postProcess,map,i));
	}
	return ret;
}

function writeItem(item,done) {
	fs.outputFile(item.filePath,item.content,done);
}

function _writeChunks(chunks,map,opts,callback) {
	chunks = stringifyChunks(chunks,opts.postProcess,map);
	
	var entry = map[opts.entry];
	
	var ret = [];
	
	var dir = path.dirname(opts.dest);
	var ext = path.extname(opts.dest);
	var base = path.basename(opts.dest,ext);
	
	var chunkGlobalVar = '"' + jsStringEscape(opts.browserGlobalVar) + '"';
	
	for (var i = 0; i < chunks.length; i++) {
		ret.push({
			content:"window[" + chunkGlobalVar + "]"
				+ " = "
				+ "window[" + chunkGlobalVar + "]"
				+ " || {};"
				+ "\n"
				+ "window[" + chunkGlobalVar + "]['" + i + "'] = " + chunks[i] + ";\n",
			filePath:(i === 0) ? opts.dest : (dir + path.sep + base + i + ext)
		});
	}
	
	if (opts.includeBootstrap) {
		var urlDir = path.dirname(opts.urlDest);
		var urlExt = path.extname(opts.urlDest);
		var urlBase = path.basename(opts.urlDest,urlExt);
		
		if (urlBase + urlExt === opts.urlDest) {
			var srcBefore = '"' + jsStringEscape(urlBase) + '"';
		} else {
			var srcBefore = '"' + jsStringEscape(urlDir+"/"+urlBase) + '"';
		}
		
		var replacements = {
			entryChunk:'"' + entry[0] + '"',
			entryModule:'"' + entry[1] + '"',
			srcBefore:srcBefore,
			srcAfter:'"' + jsStringEscape(urlExt) + '"',
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
	
	async.each(ret,writeItem,callback);
}

function writeChunks() {
	var args = Array.prototype.slice.call(arguments);
	var chunks, map, settings, callback;
	var len = args.length;
	for (var i = 0; i < len; ++i) {
		if (args[i] instanceof Array) {
			chunks = args[i];
		} else if (typeof args[i] === "function") {
			callback = args[i];
		} else if (Object.getPrototypeOf(args[i]) === Object.prototype) {
			if (typeof settings === "undefined") {
				settings = args[i];
			} else {
				map = args[i];
			}
		}
	}
	if (!map) {
		map = {};
		var len = chunks.length;
		for (var i = 0; i < len; ++i) {
			var len2 = chunks[i].length;
			for (var j = 0; j < len2; ++j) {
				map[chunks[i][j].filePath] = [i,j];
			}
		}
	}
	callback = callback || noop;
	_writeChunks(chunks,map,settings,callback);
}

module.exports = writeChunks;