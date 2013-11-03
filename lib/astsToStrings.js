var fs = require("fs");

var async = require("async");

var SimpleHasher = require("./util/SimpleHasher.js");
var requireWalk = require("./util/requireWalk.js");
var makeString = require("./util/makeString.js");

function _chunkToString(data) {
	var ret = "";
	for (var i = 0; i < data.modules.length; i++) {
		ret += "window.__WEBANT__.modules["+makeString(data.modules[i].moduleId)+"] = " +
				"function(require,module,exports) {\n";
		ret += data.modules[i].content+"\n";
		ret += "};\n";
	}
	return ret;
}

function urlDestPathToJs(str) {
	return str.split("%ID%").map(function(str,i){
		if (i > 0) {
			return "chunkId + " + makeString(str);
		} else {
			return makeString(str);
		}
	}).join(" + ");
}

function astsToStrings(parsed,opts,callback) {
	var simpleHasher = new SimpleHasher();
	
	var moduleIdsToChunkIds = {};
	
	function chunkToString(data,callback) {
		var js = _chunkToString(data)+"\n"
			+ "window.__WEBANT__.loaded("+makeString(data.chunkId)+");\n";
		
		if (data.chunkId === entryChunkId) {
			fs.readFile(__dirname+"/public/webantMultiChunk.js",function(err,content){
				if (err) {
					callback(err);
					return;
				}
				content = content.toString()
					.replace(/%%%SRC%%%/g,urlDestPathToJs(opts.urlDestPath))
					.replace(/%%%ENTRY_MODULE_ID%%%/g,makeString(entryModuleId))
					.replace(/%%%MODULE_IDS_TO_CHUNK_IDS%%%/g,JSON.stringify(moduleIdsToChunkIds))
				js = content + "\n" + js;
				callback(null,{
					chunkId:data.chunkId,
					content:js
				});
			});
		} else {
			callback(null,{
				chunkId:data.chunkId,
				content:js
			});
		}
	}

	var data = [];
	
	for (var chunkId in parsed) {
		if (parsed.hasOwnProperty(chunkId)) {
			var datum = {
				chunkId:chunkId,
				modules:[]
			};
			for (var filePath in parsed[chunkId]) {
				if (parsed[chunkId].hasOwnProperty(filePath)) {
					var moduleId = simpleHasher.get(filePath);
					moduleIdsToChunkIds[moduleId] = chunkId;
					var ast = parsed[chunkId][filePath];
					requireWalk(ast,function(node,type){
						node.value = simpleHasher.get(node.value);
					});
					datum.modules.push({
						moduleId:moduleId,
						content:ast.print_to_string({
							comments:true,
							beautify:true,
							bracketize:true,
							semicolons:true
						})
					});
				}
			}
			data.push(datum);
		}
	}

	var entryModuleId = simpleHasher.get(opts.entry);
	var entryChunkId = moduleIdsToChunkIds[entryModuleId];
	
	async.map(data,chunkToString,callback);
	
}

module.exports = astsToStrings;