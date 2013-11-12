var test = require("tap").test;
var uglify = require("uglify-js");

var requireWalk = require("../../lib/util/requireWalk.js");

test("requireWalk 1",function(t){
	var contents = [
	                "require()",
	                "require(foo)",
	                "require(40)",
	                "require({})",
	                "require(true)",
	                "require(false)",
	                "require(undefined)",
	                "require(null)",
	                "require([])",
	                "require([foo])",
	                "require(['sdfs',foo])",
	                "require(foo,function(){})",
	                "require(40,'gsdgf')",
	                "require({},true)",
	                "require(true,function(){})",
	                "require(false,myFunc)",
	                "require(undefined,{})",
	                "require(null,[])",
	                "require([],true)",
	                "require([foo],'\"')",
	                "require(['sdfs',foo],function(){})",
	                ];
	
	contents.forEach(function(c){
		t.throws(function(){
			requireWalk(uglify.parse(c),function(){});
		});
	});
	
	t.end();
});

test("requireWalk 2",function(t){
	var ast = uglify.parse(
		"require('a');" +
		"require('b',function(){});" +
		"require(['c']);" +
		"require(['d','e']);" +
		"require(['f'],function(){});" +
		"require(['g','h'],function(){});"
	);
	
	var requires = [];
	
	requireWalk(ast,function(node,idx,type){
		requires.push({
			v:node[idx].value,
			t:type
		});
	});
	
	t.equivalent(
		requires,
		[
		 {v:"a",t:"sync"},
		 {v:"b",t:"async"},
		 {v:"c",t:"sync"},
		 {v:"d",t:"sync"},
		 {v:"e",t:"sync"},
		 {v:"f",t:"async"},
		 {v:"g",t:"async"},
		 {v:"h",t:"async"}
		 ]
	);
	
	t.end();
});