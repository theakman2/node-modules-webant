window.__CHUNKS__['0'] = {
"0":function(require,module,exports) {
window.__global={},require(["1","0"],function(o){window.__global.f=o.msg;var i=require(["0","1"]);setTimeout(function(){window.__global.a=i()},1800),window.__global.data=require(["0","2"]).bar[1],setTimeout(function(){require(["0","3"]).foo(function(o,i){o.done(function(o){window.__global.b=i.msg+o,require(["3","0"],function(o){o(document).ready(function(){window.__global.height=o("body").first().height()})})})})},600)});
},"1":function(require,module,exports) {
function foo(){return val}var val=0;setTimeout(function(){require(["2","0"],function(){val=50})},1e3),val=require(["0","3"]).num,module.exports=foo;
},"2":function(require,module,exports) {
module.exports={foo:5,bar:["baz",12]};
},"3":function(require,module,exports) {
module.exports.num=20,module.exports.foo=function(o){require([["2","3"],["1","0"]],function(e,n){o(e,n)})},require(["0","4"]);
},"4":function(require,module,exports) {
require(["0","5"])("html body {\n  height: 134px; }\n");
},"5":function(require,module,exports) {
var style,add;document.createStyleSheet?(style=document.styleSheets.length>29?document.styleSheets[document.styleSheets.length-1]:document.createStyleSheet(),add=function(e){style.cssText+=e}):(style=document.getElementsByTagName("head")[0].appendChild(document.createElement("style")),style.setAttribute("type","text/css"),add=function(e){style.appendChild(document.createTextNode(e))}),module.exports=add;
}};
