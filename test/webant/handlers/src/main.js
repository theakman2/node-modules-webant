var g = {};

g.a = require("./{baz}.rand");
g.b = require("./{webantVar}");

window.__global = g;