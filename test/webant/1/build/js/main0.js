window.__CHUNKS__['0'] = {
"0":function(require,module,exports) {
var g = {};

g.msg = require([ "0", "1" ]).msg;

g.a = require([ "0", "2" ]);

window.__global = g;
},"1":function(require,module,exports) {
module.exports.msg = "MWAHAHAH!";
},"2":function(require,module,exports) {
module.exports = "I'm from a.js";
}};
