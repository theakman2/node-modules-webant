var path = require("path");

var uglify = require("uglify-js");
var fs = require("fs-extra");
var async = require("async");
var jsStringEscape = require("js-string-escape");

var stringifyNode = require("./util/stringifyNode.js");

function noop() {}

function stringifyChunk(chunk, isOnlyChunk, postProcess, map, chunkIdx) {
	var ret = "{";
	var i = chunk.length;
	while (i--) {
		var j = chunk[i].requires.length;
		while (j--) {
			var r = chunk[i].requires[j];
			if (isOnlyChunk) {
				r.nodeContainer[r.nodeIdx] = new uglify.AST_String({
					value:map[r.data.filePath][1].toString()
				});
			} else {
				r.nodeContainer[r.nodeIdx] = new uglify.AST_Array({
					elements : [ new uglify.AST_String({
						value : map[r.data.filePath][0].toString()
					}), new uglify.AST_String({
						value : map[r.data.filePath][1].toString()
					}) ]
				});
			}
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
		if (len > 1) {
			ret.push(stringifyChunk(chunks[i],false,postProcess,map,i));
		} else {
			ret.push(stringifyChunk(chunks[i],true,postProcess,map));
		}
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
	
	for (var i = 0; i < chunks.length; i++) {
		if (i !== entry[0]) {
			ret.push({
				content:"window.__CHUNKS__['" + i + "'] = " + chunks[i] + ";\n",
				filePath:dir + path.sep + base + i + ext
			});
		}
	}
	
	var fileName = chunks.length > 1 ? "webantMultiChunk" : "webantSingleChunk";
	var type = (opts.postProcess === "compress") ? "dist" : "src";
	fs.readFile(__dirname + "/public/" + type + "/" + fileName + ".js",function(err,c){
		if (err) {
			callback(err);
			return;
		}
		content = c.toString();
		
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
			entryChunkModules:chunks[entry[0]],
		};
		
		var bootstrap = {
			filePath:opts.dest,
			content:content.replace(/\$\$\$([^\$]+)\$\$\$/g,function(match,m1){
				switch(m1) {
					case "ENTRY_CHUNK":
						return replacements.entryChunk;
					case "ENTRY_MODULE":
						return replacements.entryModule;
					case "SRC_BEFORE":
						return replacements.srcBefore;
					case "SRC_AFTER":
						return replacements.srcAfter;
					case "ENTRY_CHUNK_MODULES":
						return replacements.entryChunkModules;
					default:
						throw new Error("Unknown magic keyword: " + m1);
				}
			})
		};
		
		ret.push(bootstrap);
		async.each(ret,writeItem,callback);
	});
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