window.__global = {};

var a = require("./nested/a");
var b = require("nested/morenesting/b");
var more = require(["c.js","./nested/morenesting/d.js"]);

window.__global.main = {
	a:a,
	b:b,
	more:more
};