window.__CHUNKS__['0'] = {
"0":function(require,module,exports) {
window.__global={},require(["1","0"],function(o){window.__global.f=o.msg;var i=require(["0","1"]);setTimeout(function(){window.__global.a=i()},1800),window.__global.data=require(["0","2"]).bar[1],setTimeout(function(){require(["0","3"]).foo(function(o,i){o.done(function(o){window.__global.b=i.msg+o,require(["4","0"],function(o){o(document).ready(function(){window.__global.height=o("body").first().height(),window.__global.width=o("body").first().width()})})})})},600)});
},"1":function(require,module,exports) {
function foo(){return val}var val=0;setTimeout(function(){require(["2","0"],function(){val=50})},1e3),val=require(["0","3"]).num,module.exports=foo;
},"2":function(require,module,exports) {
module.exports={foo:5,bar:["baz",12]};
},"3":function(require,module,exports) {
module.exports.num=20,module.exports.foo=function(o){require([["2","3"],["1","0"]],function(e,i){o(e,i)})},require(["0","4"]);
},"4":function(require,module,exports) {
require(["3","0"],function(o){o("html body {\n  height: 134px; }\n")});
}};
