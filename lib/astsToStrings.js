var fs = require("fs");
var path = require("path");

var uglify = require("uglify-js");
var jsStringEscape = require("js-string-escape");

var requireWalk = require("./util/requireWalk.js");

function urlDestToSource(urlDest) {
	var urlDir = path.dirname(urlDest);
	var urlExt = path.extname(urlDest);
	var urlBase = path.basename(urlDest,urlExt);
	
	if (urlBase+urlExt === urlDest) {
		return '"' + jsStringEscape(urlBase) + '" + chunkId + "' + jsStringEscape(urlExt) + '"';
	} else {
		return '"' + jsStringEscape(urlDir+"/"+urlBase) + '" + chunkId + "' + jsStringEscape(urlExt) + '"';
	}
}

function getLocations(data) {
	var locations = {};
	for (var i = 0; i < data.length; i++) {
		var j = 0;
		for (var filePath in data[i]) {
			if (data[i].hasOwnProperty(filePath)) {
				locations[filePath] = {
					chunk:i.toString(),
					module:j.toString()
				};
				j++;
			}
		}
	}
	return locations;
}

function astToString(ast,locations,filePath,postProcess) {
	postProcess = postProcess || "none";
	
	requireWalk(ast,function(node,idx,type){
		var loc = locations[node[idx].value];
		node[idx] = new uglify.AST_Array({
			elements:[
			          new uglify.AST_String({value:loc.chunk}),
			          new uglify.AST_String({value:loc.module})
			          ]
		});
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
	
	function chunkToString(chunk,chunkIdx) {
		var ret = "window.__CHUNKS__['"+chunkIdx.toString()+"'] = {\n";
		var i = 0;
		for (var filePath in chunk) {
			if (chunk.hasOwnProperty(filePath)) {
				var loc = locations[filePath];
				if (i !== 0) {
					ret += ",";
				}
				ret += '"'+jsStringEscape(loc.module)+"\":function(require,module,exports) {\n";
				ret += astToString(chunk[filePath],locations,filePath,opts.postProcess)+"\n";
				ret += "}";
				i++;
			}
		}
		ret += "};\n";
		return {
			content:ret,
			filePath:dir+path.sep+base+chunkIdx.toString()+ext
		};
	}
	
	var chunks = data.map(chunkToString);
	
	var entryLoc = locations[opts.entry];
	
	fs.readFile(__dirname+"/public/webantMultiChunk.js",function(err,content){
		if (err) {
			callback(err);
			return;
		}
		content = content.toString();
		
		var bootstrap = {
			filePath:opts.dest,
			content:content
				.replace(/%%%ENTRY_CHUNK%%%/g,'"'+jsStringEscape(entryLoc.chunk)+'"')
				.replace(/%%%ENTRY_MODULE%%%/g,'"'+jsStringEscape(entryLoc.module)+'"')
				.replace(/%%%SRC%%%/g,urlDestToSource(opts.urlDest))
		};
		
		chunks.push(bootstrap);
		
		callback(null,chunks);
	});
}

module.exports = astsToStrings;