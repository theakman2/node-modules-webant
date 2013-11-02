var fs = require("fs");

var async = require("async");

var SimpleHasher = require("./SimpleHasher.js");
var requireWalk = require("./requireWalk.js");
var makeString = require("./makeString.js");

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

function parsedToString(parsed,urlBase,callback) {
	var simpleHasher = new SimpleHasher();
	
	var moduleIdsToChunkIds = {};
	
	function chunkToString(data,callback) {
		if (data.chunkId === entryChunkId) {
			fs.readFile(__dirname+"/public/__WEBANT__.js",function(err,content){
				if (err) {
					callback(err);
					return;
				}
				content = content.toString()
					.replace("%%%URL_BASE%%%",makeString(urlBase))
					.replace("%%%ENTRY_MODULE_ID%%%",makeString(entryModuleId));
				callback(null,{
					chunkId:data.chunkId,
					content:content+"\n"
						+ "window.__WEBANT__.moduleIds2ChunkIds = "+JSON.stringify(moduleIdsToChunkIds)+"\n"
						+ _chunkToString(data)+"\n"
						+ "window.__WEBANT__.begin();\n"
				});
			});
		} else {
			callback(null,{
				chunkId:data.chunkId,
				content:_chunkToString(data)+"\n"
					+ "window.__WEBANT__.loaded("+makeString(data.chunkId)+");\n"
			});
		}
	}

	var data = [];
	
	for (var chunkId in parsed.data) {
		if (parsed.data.hasOwnProperty(chunkId)) {
			var datum = {
				chunkId:chunkId,
				modules:[]
			};
			for (var filePath in parsed.data[chunkId]) {
				if (parsed.data[chunkId].hasOwnProperty(filePath)) {
					var moduleId = simpleHasher.get(filePath);
					moduleIdsToChunkIds[moduleId] = chunkId;
					var ast = parsed.data[chunkId][filePath];
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

	var entryModuleId = simpleHasher.get(parsed.entry);
	var entryChunkId = moduleIdsToChunkIds[entryModuleId];
	
	async.map(data,chunkToString,callback);
	
}

module.exports = parsedToString;