var a = require("nested/a.js");

var b = require(["./nested/morenesting/b.js"]);

window.__global = {
	a:a.msg,
	b:b[0].msg
};