require("../foo/bar/g",function(g){
	window.__global.a = "aaa" + g;
});

module.exports = "a done";