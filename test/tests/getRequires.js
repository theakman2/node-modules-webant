var test = require("tap").test;
var uglify = require("uglify-js");

var getRequires = require("../../lib/util/getRequires.js");

test("getRequires 1",function(t){
	var contents = [
	                "require()",
	                "require('foo'+'.js')",
	                "require(foo)",
	                "require(40)",
	                "require({})",
	                "require(true)",
	                "require(false)",
	                "require(undefined)",
	                "require(null)",
	                "require([])",
	                "require(['bar'+'.js','baz.j'+'s'])",
	                "require([foo])",
	                "require(['sdfs',foo])",
	                "require('foo'+'.js',true)",
	                "require(foo,function(){})",
	                "require(40,'gsdgf')",
	                "require({},true)",
	                "require(true,function(){})",
	                "require(false,myFunc)",
	                "require(undefined,{})",
	                "require(null,[])",
	                "require([],true)",
	                "require(['bar'+'.js','baz.j'+'s'],function(){})",
	                "require([foo],'\"')",
	                "require(['sdfs',foo],function(){})",
	                ];
	
	contents.forEach(function(c){
		t.throws(function(){
			getRequires(uglify.parse(c));
		});
	});
	
	t.end();
});

test("getRequires 2",function(t){
	var ast = uglify.parse(
		"require('a');" +
		"require('b',function(){});" +
		"require(['c']);" +
		"require(['d','e']);" +
		"require(['f'],function(){});" +
		"require(['g','h'],function(){});"
	);
	
	var requires = getRequires(ast).map(function(r){
		return {
			v:r.value,
			t:r.type
		};
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