var extend = require("./extend.js");

function SimpleHasher() {
	var hashes = {};
	
	function get(str) {
		if (!hashes.hasOwnProperty(str)) {
			hashes[str] = Object.keys(hashes).length.toString();
		}
		return hashes[str];
	}
	
	function getAll() {
		return extend({},hashes);
	}
	
	this.get = get;
	this.getAll = getAll;
}

module.exports = SimpleHasher;