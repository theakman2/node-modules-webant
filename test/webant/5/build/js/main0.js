window.__CHUNKS__['0'] = {
"0":function(require,module,exports) {
window.__global = {};

require([ "1", "0" ], function(f) {
    window.__global.f = f.msg;
    var a = require([ "0", "1" ]);
    setTimeout(function() {
        window.__global.a = a();
    }, 1800);
    setTimeout(function() {
        require([ "0", "2" ]).foo(function(d, f) {
            d.done(function(msg) {
                window.__global.b = f.msg + msg;
                require([ "4", "0" ], function($) {
                    $(document).ready(function() {
                        window.__global.height = $("body").first().height();
                    });
                });
            });
        });
    }, 600);
});
},"1":function(require,module,exports) {
var val = 0;

function foo() {
    return val;
}

setTimeout(function() {
    require([ "2", "0" ], function(c) {
        val = 50;
    });
}, 1e3);

val = require([ "0", "2" ]).num;

module.exports = foo;
},"2":function(require,module,exports) {
module.exports.num = 20;

module.exports.foo = function(cb) {
    require([ [ "2", "2" ], [ "1", "0" ] ], function(d, f) {
        cb(d, f);
    });
};

require([ "0", "3" ]);
},"3":function(require,module,exports) {
require([ "3", "0" ], function(add) {
    add("body {\n    height:571px;\n}\n");
});
}};
