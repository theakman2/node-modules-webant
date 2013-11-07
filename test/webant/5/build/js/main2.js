window.__CHUNKS__['2'] = {
"0":function(require,module,exports) {
var e = require([ "2", "1" ]);

module.exports = "c.js";
},"1":function(require,module,exports) {
module.exports = "e.js";
},"2":function(require,module,exports) {
module.exports.done = function(cb) {
    require([ "1", "1" ], function(g) {
        var e = require([ "2", "1" ]);
        var c = require([ "2", "0" ]);
        cb(g({
            name: "bar"
        }) + e + c);
    });
};
}};
