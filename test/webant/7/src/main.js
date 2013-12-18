window.__global = {};

require("./nested1/f.js",function(f){
	window.__global.f = f.msg;
	var a = require("./nested2/nested2a/a.js");
	
	setTimeout(function(){
		window.__global.a = a();
	},1800);
	
	window.__global.data = require("nested2/nested2a/data.json").bar[1];
	
	setTimeout(function(){
		require("nested1/b.js").foo(function(d,f){
			d.done(function(msg){
				window.__global.b = f.msg + msg;
				require("jquery-1.10.2.js",function($){
					$(document).ready(function(){
						window.__global.height = $("body").first().height();
						window.__global.width = $("body").first().width();
					});
				});
			});
		});
	},600);
	
	window.__global.custom = require("@@MYCUSTOMHANDLER");
});