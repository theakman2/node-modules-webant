var g = {};

setTimeout(function(){
	require("./a.js",function(a){
		g.ajs = a;
	});
},1000);

g.bjs = require("./b.js");

window.__global = g;