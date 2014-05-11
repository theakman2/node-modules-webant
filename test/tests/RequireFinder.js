var path = require("path");

var test = require("tap").test;
var uglify = require("uglify-js");

var Webant = require("../../lib/Webant.js");
var RequireTreeParser = require("../../lib/RequireTreeParser.js");
var RequireFinder = require("../../lib/RequireFinder.js");

var dir = path.resolve("path/to");
var file = "entry.js";

var entry = dir + path.sep + file;

var webant = new Webant({
	entry:entry
});

webant.parseConfig();

var requireTreeParser = new RequireTreeParser(webant);
var requireFinder = new RequireFinder(requireTreeParser);

test("RequireFinder 1",function(t){
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
	
	contents.forEach(function(c,i){
		t.throws(function(){
			requireFinder.find(uglify.parse(c),entry);
		},"Require statement at index " + i + " should throw.");
	});
	
	t.end();
});

test("RequireFinder 1",function(t){
	var ast = uglify.parse(
		"require('a');" +
		"require('b|sameAsChunk={entry}',function(){});" +
		"require(['c']);" +
		"require(['d|come=on','e|foo=bar']);" +
		"require(['f'],function(){});" +
		"require(['g|test|key=val|foo=','h'],function(){});" +
		"require('i',function(){});" +
		"require('a|sameAsChunk=');" +
		"require('b|sameAsChunk={curr}',function(){})"
	);
	
	var requires = requireFinder.find(ast,entry).map(function(el){
		return {
			filePath:el.filePath,
			params:el.params
		};
	});
	
	t.equivalent(
		requires,
		[
		 {
			 filePath:dir + path.sep + "a.js",
			 params:{
				 sameAsChunk:entry
			 }
		 },
		 {
			 filePath:dir + path.sep + "b.js",
			 params:{
				 sameAsChunk:entry
			 }
		 },
		 {
			 filePath:dir + path.sep + "c.js",
			 params:{
				 sameAsChunk:entry
			 }
		 },
		 {
			 filePath:dir + path.sep + "d.js",
			 params:{
				 sameAsChunk:entry,
				 come:"on"
			 }
		 },
		 {
			 filePath:dir + path.sep + "e.js",
			 params:{
				 sameAsChunk:entry,
				 foo:"bar"
			 }
		 },
		 {
			 filePath:dir + path.sep + "f.js",
			 params:{}
		 },
		 {
			 filePath:dir + path.sep + "g.js",
			 params:{
				 test:null,
				 key:"val",
				 foo:""
			 }
		 },
		 {
			 filePath:dir + path.sep + "h.js",
			 params:{}
		 },
		 {
			 filePath:dir + path.sep + "i.js",
			 params:{}
		 },
		 {
			 filePath:dir + path.sep + "a.js",
			 params:{
				 sameAsChunk:""
			 }
		 },
		 {
			 filePath:dir + path.sep + "b.js",
			 params:{
				 sameAsChunk:entry
			 }
		 }
		 ]
	);
	
	t.end();
});