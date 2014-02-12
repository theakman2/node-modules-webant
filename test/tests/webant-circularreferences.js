var path = require("path");

var test = require("tap").test;

var webant = require("../../lib/webant.js");

test("circular references",function(t){
	webant({
		entry:path.join(__dirname,"..","webant","circularreferences","src","main.js"),
		dest:path.join(__dirname,"..","webant","circularreferences","build","js")
	},function(err,data){
		t.strictEqual(!!err,true,"webant should error on circular references");
		t.strictEqual(!!data,false,"webant should not provide any data when a circular reference is detected");
		t.end();
	});
});