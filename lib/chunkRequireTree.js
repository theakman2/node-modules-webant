var path = require("path");

function pushChunk(item,sameAsChunkMap,into) {
	var s = sameAsChunkMap[item.filePath];
	if (s) {
		delete sameAsChunkMap[item.filePath];
		into.push(item);
		var i = s.length;
		while(i--) {
			pushChunk(s[i],sameAsChunkMap,into);
		}
	}
}

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

function map(node,into) {
	into = into || {};
	if (!into.hasOwnProperty(node.filePath)) {
		into[node.filePath] = node;
		for (var i = 0, len = node.requires.length; i < len; ++i) {
			map(node.requires[i].data,into);
		}
	}
	return into;
}

function getSameAsChunkMap(mappings) {
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
}

function chunkRequireTree(tree,urlDest,dest) {
	var mappings = map(tree);
	var sameAsChunkMap = getSameAsChunkMap(mappings);
	
	var keys;
	var chunks = [];
	var idx = 0;
	while(keys = Object.keys(sameAsChunkMap), keys.length) {
		var into = [];
		idx = chunks.push({
			modules:into,
			urlDest:chunkIdxToUrl(idx,urlDest),
			fileDest:chunkIdxToFilePath(idx,dest)
		});
		pushChunk(mappings[keys[0]],sameAsChunkMap,into);
	}
	return chunks;
}

module.exports = chunkRequireTree;