var g = {};

setTimeout(function(){
	require("b",function(b){
		g.bjs = b;
	});
},800);

g.ajs = require("./a");

window.__global = g;