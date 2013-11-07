window.__CHUNKS__['0'] = {
"0":function(require,module,exports) {
var a = require([ "0", "1" ]);

var b = require([ "0", "2" ]);

window.__global = {
    a: a.msg,
    b: b.msg
};
},"1":function(require,module,exports) {
var c = require([ "0", "3" ]);

module.exports.msg = c.foo;
},"2":function(require,module,exports) {
var c = require([ "0", "3" ]);

var d = require([ "0", "5" ]);

module.exports.msg = c.foo + d;
},"3":function(require,module,exports) {
module.exports.foo = require([ "0", "4" ]);
},"4":function(require,module,exports) {
module.exports = 150;
},"5":function(require,module,exports) {
var c = require([ "0", "3" ]);

module.exports = 25;
}};
