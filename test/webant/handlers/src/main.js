var g = {};

g.a = require("./a.dust")({name:"Bob"});
g.b = require("./b.txt");

window.__global = g;