var fs = require("fs");
var path = require("path");

var uglify = require("uglify-js");
var jsStringEscape = require("js-string-escape");

var requireWalk = require("./util/requireWalk.js");

function getLocations(data) {
	var locations = {};
	for (var i = 0; i < data.length; i++) {
		var j = 0;
		for (var filePath in data[i]) {
			if (data[i].hasOwnProperty(filePath)) {
				locations[filePath] = {
					chunk:i,
					module:j.toString()
				};
				j++;
			}
		}
	}
	return locations;
}

function astToString(ast,locations,filePath,postProcess,requiresAsStrings) {
	postProcess = postProcess || "none";
	if (typeof requiresAsStrings === "undefined") {
		requiresAsStrings = false;
	}
	
	requireWalk(ast,function(node,idx,type){
		var loc = locations[node[idx].value];
		if (requiresAsStrings) {
			node[idx] = new uglify.AST_String({value:loc.module});
		} else {
			node[idx] = new uglify.AST_Array({
				elements:[
				          new uglify.AST_String({value:loc.chunk.toString()}),
				          new uglify.AST_String({value:loc.module})
				          ]
			});			
		}
	});
	
	switch (postProcess) {
		case "none":
			return ast.print_to_string({
				comments:true,
				beautify:true,
				bracketize:true,
				semicolons:true
			});
			break;
		case "debug":
			var lines = {};
            
            var walker = new uglify.TreeWalker(function(node){
        		if (!(node.start && (typeof node.start === "object"))) {
        			node.start = {};
        		}
        		
        		if (!node.start.hasOwnProperty("comments_before")) {
        			node.start.comments_before = [];
        		}
        		
                if (node.start.line && !lines.hasOwnProperty(node.start.line)) {
                    lines[node.start.line] = true;
                    node.start.comments_before.push({
                        value:filePath+": "+node.start.line,
                        type:'comment1'
                    });
                }
            });
            
            ast.walk(walker);
            
            return ast.print_to_string({
                comments:true,
                beautify:true,
                bracketize:true,
                semicolons:true
            });
            
			break;
		case "compress":
			ast.figure_out_scope();
			var compressed = ast.transform(uglify.Compressor());
			compressed.figure_out_scope();
			compressed.compute_char_frequency();
			compressed.mangle_names({
				except:["require","module","exports"]
			});
			return compressed.print_to_string();
			break;
	}
}

function astsToStrings(data,opts,callback) {
	var locations = getLocations(data);
	
	var dir = path.dirname(opts.dest);
	var ext = path.extname(opts.dest);
	var base = path.basename(opts.dest,ext);
	
	var numChunks = data.length;
	
	function _chunkToString(chunk) {
		var ret = "{\n";
		var i = 0;
		for (var filePath in chunk) {
			if (chunk.hasOwnProperty(filePath)) {
				var loc = locations[filePath];
				if (i !== 0) {
					ret += ",";
				}
				ret += '"'+jsStringEscape(loc.module)+"\":function(require,module,exports) {\n";
				ret += astToString(
					chunk[filePath],
					locations,
					filePath,
					opts.postProcess,
					numChunks === 1
				);
				ret += "\n";
				ret += "}";
				i++;
			}
		}
		ret += "}";
		return ret;
	}
	
	function chunkToString(chunk,chunkIdx) {
		return {
			content:"window.__CHUNKS__['" + chunkIdx.toString() + "'] = " + _chunkToString(chunk) + ";\n",
			filePath:dir + path.sep + base + chunkIdx.toString() + ext
		};
	}
	
	var entryLoc = locations[opts.entry];
	
	var chunks = [];
	
	for (var i = 0; i < numChunks; i++) {
		if (i !== entryLoc.chunk) {
			chunks.push(chunkToString(data[i],i));
		}
	}	
	
	var fileName = numChunks > 1 ? "webantMultiChunk" : "webantSingleChunk";
	
	fs.readFile(__dirname + "/public/dist/" + fileName + ".js",function(err,content){
		if (err) {
			callback(err);
			return;
		}
		content = content.toString();
		
		var urlDir = path.dirname(opts.urlDest);
		var urlExt = path.extname(opts.urlDest);
		var urlBase = path.basename(opts.urlDest,urlExt);
		
		if (urlBase + urlExt === opts.urlDest) {
			var srcBefore = '"' + jsStringEscape(urlBase) + '"';
		} else {
			var srcBefore = '"' + jsStringEscape(urlDir+"/"+urlBase) + '"';
		}
		
		var replacements = {
			entryChunk:'"' + jsStringEscape(entryLoc.chunk.toString()) + '"',
			entryModule:'"' + jsStringEscape(entryLoc.module) + '"',
			srcBefore:srcBefore,
			srcAfter:'"' + jsStringEscape(urlExt) + '"',
			entryChunkModules:_chunkToString(data[entryLoc.chunk]),
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
		
		chunks.push(bootstrap);
		
		callback(null,chunks);
	});
}

module.exports = astsToStrings;