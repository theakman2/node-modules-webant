var page = require("webpage").create();

page.open("./build/index.html",function(status){
	setTimeout(function(){
		var g = page.evaluate(function(){
			return window.__global;
		});
		console.log(JSON.stringify(g));
		phantom.exit();
	},3000);
});