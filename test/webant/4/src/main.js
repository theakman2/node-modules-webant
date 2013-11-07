window.__global = {};

require("./nested1/f.js",function(f){
	window.__global.f = f.msg;
	var a = require("./nested2/nested2a/a.js");
	
	setTimeout(function(){
		window.__global.a = a();
	},1800);
	
	setTimeout(function(){
		require("nested1/b.js").foo(function(d,f){
			d.done(function(msg){
				window.__global.b = f.msg + msg;
			});
		});		
	},600);
});