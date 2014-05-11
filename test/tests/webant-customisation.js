var fs = require("fs-extra");
var path = require("path");

var test = require("tap").test;

var Webant = require("../../lib/Webant.js");
var webantTest = require("../lib/webant.js").webantTest;

var base = path.join(__dirname,"..","webant","customisation");
var entry = path.join(base,"src","main.js");
var destBase = path.join(base,"build","js");
var dest = path.join(destBase,"main.js");

function MyStringifier() {
	Webant.Stringifier.apply(this,Array.prototype.slice.call(arguments));
}

MyStringifier.prototype = Object.create(Webant.Stringifier.prototype);

MyStringifier.prototype.stringify = function(chunks) {
	var ret = Webant.Stringifier.prototype.stringify.call(this,chunks);
	ret[0].content += "\nwindow.__global = window.__global || {}; window.__global.foo = 'TEST!';";
	return ret;
};

test("webant-customisation 1",function(t){
	var opts = {
		entry:entry,
		dest:dest,
		urlDest:"js/main.js"
	};
	
	var webant1 = new Webant(opts);
	
	webant1.stringifier = new MyStringifier(webant1);
	
	webantTest(base,webant1,t,{msg:"MWAHAHAH!",a:"I'm from a.js",foo:"TEST!"},function(){
		var opts = {
			entry:entry,
			dest:dest,
			urlDest:"js/main.js"
		};
		
		var webant2 = new Webant(opts);
		webantTest(base,webant2,t,{msg:"MWAHAHAH!",a:"I'm from a.js"},function(){
			t.end();
		});
	});
});