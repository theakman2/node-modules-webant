window.__global = {};

require("a.js",function(a){
	window.__global.a = a;
});

require("b.js",function(b){
	window.__global.b = b;
});