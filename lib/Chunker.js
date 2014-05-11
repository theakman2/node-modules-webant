var path = require("path");

function Chunker(webant) {
	this.webant = webant;
}

Chunker.extnameRegex = /\.\w+$/;

Chunker.prototype = {
	_getUniqueDest:function(preferredFileDest,preferredUrlDest,doneMap) {
		var currFileDest = preferredFileDest;
		var currUrlDest = preferredUrlDest;
		
		var fileDestIdx = preferredFileDest.search(Chunker.extnameRegex);
		var urlDestIdx = preferredUrlDest.search(Chunker.extnameRegex);
		
		var j = 1;
		while(doneMap.hasOwnProperty(currFileDest)) {
			if (fileDestIdx > -1) {
				currFileDest = preferredFileDest.substring(0,fileDestIdx)
					+ j
					+ preferredFileDest.substring(fileDestIdx,preferredFileDest.length);
			} else {
				currFileDest = preferredFileDest + j;
			}
			if (urlDestIdx > -1) {
				currUrlDest = preferredUrlDest.substring(0,urlDestIdx)
					+ j
					+ preferredUrlDest.substring(urlDestIdx,preferredUrlDest.length);
			} else {
				currUrlDest = preferredUrlDest + j;
			}
			j++;
		}
		doneMap[currFileDest] = true;
		return {
			fileDest:currFileDest,
			urlDest:currUrlDest
		};
	},
	_includeDestinations:function(chunks) {
		var opts = this.webant.settings;
		
		var entryFiles = {};
		for (var i = 0, len = opts.files.length; i < len; ++i) {
			entryFiles[opts.files[i].entry] = {
				dest:opts.files[i].dest,
				urlDest:opts.files[i].urlDest
			};
		}
		
		var doneMap = {};
		for (var i = 0, len = chunks.length; i < len; ++i) {
			var fileDest = opts.files[0].dest;
			var urlDest = opts.files[0].urlDest;
			for (var j = 0, len2 = chunks[i].modules.length; j < len2; ++j) {
				var fp = chunks[i].modules[j].filePath;
				if (entryFiles.hasOwnProperty(fp)) {
					fileDest = entryFiles[fp].dest;
					urlDest = entryFiles[fp].urlDest;
					break;
				}
			}
			var dest = this._getUniqueDest(fileDest, urlDest, doneMap);
			chunks[i].urlDest = dest.urlDest;
			chunks[i].fileDest = dest.fileDest;
		}
	},
	_pushChunk:function(item,sameAsChunkMap,into) {
		var s = sameAsChunkMap[item.filePath];
		if (s) {
			delete sameAsChunkMap[item.filePath];
			into.push(item);
			var i = s.length;
			while(i--) {
				this._pushChunk(s[i],sameAsChunkMap,into);
			}
		}
	},
	_getSameAsChunkMap:function(mappings){
		var sameAsChunkMap = {};
		for (var fp in mappings) {
			if (mappings[fp].filePath) {
				var p = mappings[fp];
				sameAsChunkMap[p.filePath] = sameAsChunkMap[p.filePath] || [];
				for (var i = 0; i < p.requires.length; ++i) {
					var r = p.requires[i];
					var c = r.data;
					sameAsChunkMap[c.filePath] = sameAsChunkMap[c.filePath] || [];
					if (r.params.sameAsChunk) {
						var s = mappings[r.params.sameAsChunk];
						if (typeof s === "undefined") {
							var e = new Error("File '" + r.params.sameAsChunk + "' not found.");
							e.filePath = p.filePath;
							throw e;
						}
						sameAsChunkMap[s.filePath] = sameAsChunkMap[s.filePath] || [];
						sameAsChunkMap[c.filePath].push(s);
						sameAsChunkMap[s.filePath].push(c);
					}
				}
			}
		}
		return sameAsChunkMap;
	},
	_map:function(node,into) {
		into = into || {};
		if (Array.isArray(node)) {
			for (var i = 0, len = node.length; i < len; ++i) {
				this._map(node[i],into);
			}
		} else {
			if (!into.hasOwnProperty(node.filePath)) {
				into[node.filePath] = node;
				for (var i = 0, len = node.requires.length; i < len; ++i) {
					this._map(node.requires[i].data,into);
				}
			}
		}
		return into;
	},
	chunk:function(tree) {
		var mappings = this._map(tree);
		var sameAsChunkMap = this._getSameAsChunkMap(mappings);
		var keys;
		var chunks = [];
		while(keys = Object.keys(sameAsChunkMap), keys.length) {
			var into = [];
			chunks.push({
				modules:into
			});
			this._pushChunk(mappings[keys[0]],sameAsChunkMap,into);
		}
		
		this._includeDestinations(chunks);
		return chunks;
	}
};

module.exports = Chunker;