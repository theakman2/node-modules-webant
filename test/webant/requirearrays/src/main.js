var exps = require(["./a.js","./b.js"]);

window.__global = {
	a:exps[0],
	b:exps[1]
};