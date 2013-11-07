var val = 0;

function foo() {
	return val;
}

setTimeout(function(){
	require("../c.js",function(c){
		val = 50;
	});
},1000);

val = require("../../nested1/b.js").num;

module.exports = foo;