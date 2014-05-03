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

function chunkRequireTree(tree) {
	var mappings = map(tree);
	var sameAsChunkMap = getSameAsChunkMap(mappings);
	
	var keys;
	var chunks = [];
	while(keys = Object.keys(sameAsChunkMap), keys.length) {
		var into = [];
		chunks.push(into);
		pushChunk(mappings[keys[0]],sameAsChunkMap,into);
	}
	
	return chunks;
}

module.exports = chunkRequireTree;