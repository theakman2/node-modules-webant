require(["../foo/f.js"],function(f){
	window.__global.e = f + "eee";
});

module.exports = "e done";