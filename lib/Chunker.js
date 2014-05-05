var path = require("path");

function Chunker(webant) {
	this.webant = webant;
}

Chunker.prototype = {
	includeDestinations:function(chunks) {
		var opts = this.webant.settings;
		
		var dir = path.dirname(opts.dest);
		var ext = path.extname(opts.dest);
		var base = path.basename(opts.dest,ext);
		
		var urlDir = path.dirname(opts.urlDest);
		var urlExt = path.extname(opts.urlDest);
		var urlBase = path.basename(opts.urlDest,urlExt);
		
		if (urlBase + urlExt === urlDest) {
			var srcBefore = urlBase;
		} else {
			var srcBefore = urlDir + "/" + urlBase;
		}
		
		var entryChunkDone = false;
		
		for (var i = 0, len = chunks.length; i < len; ++i) {
			var isEntryChunk = false;
			if (!entryChunkDone) {
				for (var j = 0, len2 = chunks[i].modules.length; j < len2; ++j) {
					if (chunks[i].modules[j].filePath === opts.entry) {
						isEntryChunk = true;
						break;
					}
				}
			}
			if (isEntryChunk) {
				entryChunkDone = true;
				var urlDest = opts.urlDest;
				var fileDest = opts.dest;
			} else {
				var urlDest = srcBefore + i + urlExt;
				var fileDest = dir + path.sep + base + i + ext;
			}
			chunks[i].urlDest = urlDest;
			chunks[i].fileDest = fileDest;
		}
	},
	pushChunk:function(item,sameAsChunkMap,into) {
		var s = sameAsChunkMap[item.filePath];
		if (s) {
			delete sameAsChunkMap[item.filePath];
			into.push(item);
			var i = s.length;
			while(i--) {
				this.pushChunk(s[i],sameAsChunkMap,into);
			}
		}
	},
	getSameAsChunkMap:function(mappings){
		var sameAsChunkMap = {};
		for (var fp in mappings) {
			if (mappings[fp].filePath) {
				var p = mappings[fp];
				sameAsChunkMap[p.filePath] = sameAsChunkMap[p.filePath] || [];
				for (var i = 0; i < p.requires.length; ++i) {
					var r = p.requires[i];
					var c = r.data;
					sameAsChunkMap[c.filePath] = sameAsChunkMap[c.filePath] || [];
					if (r.sameAsChunk) {
						var s = mappings[r.sameAsChunk];
						sameAsChunkMap[s.filePath] = sameAsChunkMap[s.filePath] || [];
						sameAsChunkMap[c.filePath].push(s);
						sameAsChunkMap[s.filePath].push(c);
					}
				}
			}
		}
		return sameAsChunkMap;
	},
	map:function(node,into) {
		into = into || {};
		if (!into.hasOwnProperty(node.filePath)) {
			into[node.filePath] = node;
			for (var i = 0, len = node.requires.length; i < len; ++i) {
				this.map(node.requires[i].data,into);
			}
		}
		return into;
	},
	chunk:function(tree) {
		var mappings = this.map(tree);
		var sameAsChunkMap = this.getSameAsChunkMap(mappings);
		
		var keys;
		var chunks = [];
		while(keys = Object.keys(sameAsChunkMap), keys.length) {
			var into = [];
			chunks.push({
				modules:into
			});
			this.pushChunk(mappings[keys[0]],sameAsChunkMap,into);
		}
		
		this.includeDestinations(chunks);
		return chunks;
	}
};

module.exports = Chunker;