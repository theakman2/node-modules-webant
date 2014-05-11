var g = {};

require("b.js|sameAsChunk={curr}",function(b){
	g.msg = b.msg;
});

g.a = require("./a.js");

window.__global = g;