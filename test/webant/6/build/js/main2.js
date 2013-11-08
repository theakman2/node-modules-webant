window.__CHUNKS__['2'] = {
"0":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\c.js: 1
var e = require([ "2", "1" ]);

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\c.js: 3
module.exports = "c.js";
},"1":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\e.js: 1
module.exports = "e.js";
},"2":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\d.js: 1
module.exports.done = function(cb) {
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\d.js: 2
    require([ "1", "1" ], function(g) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\d.js: 3
        var e = require([ "2", "1" ]);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\d.js: 4
        var c = require([ "2", "0" ]);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\d.js: 5
        cb(g({
            name: "bar"
        }) + e + c);
    });
};
}};
