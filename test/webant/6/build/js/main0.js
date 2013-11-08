window.__CHUNKS__['0'] = {
"0":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 1
window.__global = {};

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 3
require([ "1", "0" ], function(f) {
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 4
    window.__global.f = f.msg;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 5
    var a = require([ "0", "1" ]);
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 7
    setTimeout(function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 8
        window.__global.a = a();
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 9
    1800);
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 11
    setTimeout(function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 12
        require([ "0", "2" ]).foo(function(d, f) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 13
            d.done(function(msg) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 14
                window.__global.b = f.msg + msg;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 15
                require([ "4", "0" ], function($) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 16
                    $(document).ready(function() {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 17
                        window.__global.height = $("body").first().height();
                    });
                });
            });
        });
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\main.js: 22
    600);
});
},"1":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 1
var val = 0;

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 3
function foo() {
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 4
    return val;
}

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 7
setTimeout(function() {
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 8
    require([ "2", "0" ], function(c) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 9
        val = 50;
    });
}, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 11
1e3);

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 13
val = require([ "0", "2" ]).num;

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested2\nested2a\a.js: 15
module.exports = foo;
},"2":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested1\b.js: 1
module.exports.num = 20;

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested1\b.js: 3
module.exports.foo = function(cb) {
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested1\b.js: 4
    require([ [ "2", "2" ], [ "1", "0" ] ], function(d, f) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested1\b.js: 5
        cb(d, f);
    });
};

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested1\b.js: 9
require([ "0", "3" ]);
},"3":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested1\styles.less: 1
require([ "3", "0" ], function(add) {
    add("html body {\n  height: 571px;\n}");
});
}};
