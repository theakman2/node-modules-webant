window.__global = {};

window.__global.a = require("./a.js");

require("./b.js",function(b){
	window.__global.b = b;
});