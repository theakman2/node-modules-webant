function Chunker() {
	var data = {};
	
	function update(item,sameAsItem) {
		if (!data[item]) {
			data[item] = {};
		}
		if (typeof sameAsItem !== "undefined") {
			if (!data[sameAsItem]) {
				data[sameAsItem] = {};
			}
			data[item][sameAsItem] = true;
			data[sameAsItem][item] = true;
		}
	}
	
	function _getRelatedItems(key,traversed,into) {
		into[key] = true;
		for(var k in data[key]) {
			if (data[key].hasOwnProperty(k) && !traversed[k]) {
				traversed[k] = true;
				_getRelatedItems(k,traversed,into);
			}
		}
	}
	
	function getRelatedItems(key) {
		var traversed = {};
		var into = {};
				
		_getRelatedItems(key,traversed,into);
		
		return Object.keys(into);
	}
	
	function getChunks() {
		var chunks = {};
		var traversed = {};
		var counter = 0;
		for (var item in data) {
			if (data.hasOwnProperty(item)) {
				if (traversed.hasOwnProperty(item)) {
					continue;
				}
				var currChunks = getRelatedItems(item);
				for (var i = 0; i < currChunks.length; i++) {
					traversed[currChunks[i]] = true;
				}
				chunks[counter.toString()] = currChunks;
				counter++;
			}
		}
		return chunks
	}
	
	this.update = update;
	this.getChunks = getChunks;
	
}

module.exports = Chunker;