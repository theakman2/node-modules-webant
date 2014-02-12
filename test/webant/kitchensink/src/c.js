var e = require("./nested/e");

require("foo/f",function(f){
	window.__global.c = "cc" + f;
});

module.exports = "ccc" + e;