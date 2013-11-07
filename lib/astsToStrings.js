var fs = require("fs");
var path = require("path");

var uglify = require("uglify-js");

var requireWalk = require("./util/requireWalk.js");
var makeString = require("./util/makeString.js");

function urlDestToSource(urlDest) {
	var urlDir = path.dirname(urlDest);
	var urlExt = path.extname(urlDest);
	var urlBase = path.basename(urlDest,urlExt);
	
	if (urlBase+urlExt === urlDest) {
		return makeString(urlBase) + " + chunkId + " + makeString(urlExt);
	} else {
		return makeString(urlDir+"/"+urlBase) + " + chunkId + " + makeString(urlExt);
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

function astToString(ast,locations) {
	requireWalk(ast,function(strNode,type,node,idx){
		var loc = locations[strNode.value];
		node[idx] = new uglify.AST_Array({
			elements:[
			          new uglify.AST_String({value:loc.chunk}),
			          new uglify.AST_String({value:loc.module})
			          ]
		});
	});
	return ast.print_to_string({
		comments:true,
		beautify:true,
		bracketize:true,
		semicolons:true
	})
}

function astsToStrings(data,opts,callback) {
	var locations = getLocations(data);
	
	var dir = path.dirname(opts.destPath);
	var ext = path.extname(opts.destPath);
	var base = path.basename(opts.destPath,ext);
	
	function chunkToString(chunk,chunkIdx) {
		var ret = "window.__CHUNKS__['"+chunkIdx.toString()+"'] = {\n";
		var i = 0;
		for (var filePath in chunk) {
			if (chunk.hasOwnProperty(filePath)) {
				var loc = locations[filePath];
				if (i !== 0) {
					ret += ",";
				}
				ret += makeString(loc.module)+":function(require,module,exports) {\n";
				ret += astToString(chunk[filePath],locations)+"\n";
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
			filePath:opts.destPath,
			content:content
				.replace(/%%%ENTRY_CHUNK%%%/g,makeString(entryLoc.chunk))
				.replace(/%%%ENTRY_MODULE%%%/g,makeString(entryLoc.module))
				.replace(/%%%SRC%%%/g,urlDestToSource(opts.urlDestPath))
		};
		
		chunks.push(bootstrap);
		
		callback(null,chunks);
	});
}

module.exports = astsToStrings;