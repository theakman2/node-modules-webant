window.__global = {};

window.__global.main = {};

setTimeout(function(){
	var a = require("./nested/a");
	var b = require("nested/morenesting/b");
	window.__global.main.a = a;
	window.__global.main.b = b;
},1000);

window.__global.main.more = require(["c.js","./nested/morenesting/d.js"]);