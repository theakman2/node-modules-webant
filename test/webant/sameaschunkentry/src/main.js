window.__global = {};

var lib = require("lib.js|sameAsChunk={entry}");

window.__global.libmain = lib;

require("a.js",function(a){
	window.__global.a = a;
});