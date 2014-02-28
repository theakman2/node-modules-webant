function pushChunk(item,sameAsChunkMap,into,map,chunkIdx) {
	var s = sameAsChunkMap[item.filePath];
	if (s) {
		delete sameAsChunkMap[item.filePath];
		var moduleIdx = into.push(item) - 1;
		if (map) {
			map[item.filePath] = [chunkIdx,moduleIdx];
		}
		var i = s.length;
		while(i--) {
			pushChunk(s[i],sameAsChunkMap,into,map,chunkIdx);
		}
	}
}

function chunkRequireTree(tree,map) {	
	var sameAsChunkMap = {};
	
	for (var fp in tree) {
		if (tree[fp].filePath) {
			var p = tree[fp];
			sameAsChunkMap[p.filePath] = sameAsChunkMap[p.filePath] || [];
			for (var i = 0; i < p.requires.length; ++i) {
				var r = p.requires[i];
				var c = r.data;
				sameAsChunkMap[c.filePath] = sameAsChunkMap[c.filePath] || [];
				if (r.sameAsChunk) {
					var s = tree[r.sameAsChunk];
					sameAsChunkMap[s.filePath] = sameAsChunkMap[s.filePath] || [];
					sameAsChunkMap[c.filePath].push(s);
					sameAsChunkMap[s.filePath].push(c);
				}
			}
		}
	}
	
	var keys;
	var chunks = [];
	while(keys = Object.keys(sameAsChunkMap), keys.length) {
		var into = [];
		var chunkIdx = chunks.push(into) - 1;
		pushChunk(tree[keys[0]],sameAsChunkMap,into,map,chunkIdx);
	}
	
	return chunks;
}

module.exports = chunkRequireTree;