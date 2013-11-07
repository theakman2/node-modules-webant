window.__CHUNKS__['0'] = {
"0":function(require,module,exports) {
var g = {};

setTimeout(function() {
    require([ "1", "0" ], function(a) {
        g.ajs = a;
    });
}, 1e3);

g.bjs = require([ "0", "1" ]);

window.__global = g;
},"1":function(require,module,exports) {
module.exports = "I'm from b.js";
}};
