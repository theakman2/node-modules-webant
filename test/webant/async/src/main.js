var g = {};

g.cjs = require("./c.js");

setTimeout(function(){
	g.ajs = require("./a.js");
},1000);

g.bjs = require("./b.js");

window.__global = g;