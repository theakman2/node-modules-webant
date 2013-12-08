var g = {};

g.msg = require("./b.js").msg;
g.a = require("./a.js");

window.__global = g;