var test = require("tap").test;

var path = require("path");

var getConfig = require("../../lib/getConfig.js");

var jsHandler = require("../../lib/jsHandler.js");

test("getConfig 1",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    dest:"/path/to/build/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		rawConfig,
		{
			entry:"/path/to/src/js/main.js",
			dest:"/path/to/build/main.js"
		},
		"Original configuration object should not have been mutated."
	);
	
	t.end();
});

test("getConfig 2",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    dest:"/path/to/build/main.out.js"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/build/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			handlers:{".js":jsHandler},
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 3",function(t){
	var extraHandler = {
		extensions:[".foo"],
		handle:function(){}
	};
	
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    handlers:[extraHandler]
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			handlers:{
				".js":jsHandler,
				".foo":extraHandler
			},
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 4",function(t){
	var foo = {
		extensions:[".bar",".baz"],
		handle:function(){}
	};
	
	var bar = {
		handle:function(){},
		extensions:[".foo"]
	};
	
	var baz = {
		handle:function(){},
		extensions:[".qwe"]
	};
	
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    urlDest:"foo",
	    handlers:[jsHandler,foo,bar,baz]
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"foo",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			handlers:{
		    	".js":jsHandler,
		    	".bar":foo,
		    	".baz":foo,
		    	".foo":bar,
		    	".qwe":baz
		    },
		    aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 5",function(t){
	var foo = {
		extensions:[".bar",".baz"],
		handle:function(){},
		aliases:{
			">>a":"/path/to/foo",
			">>e":"/foo/nar/ser"
		}
	};
	
	var bar = {
		handle:function(){},
		extensions:[".foo"]
	};
	
	var baz = {
		handle:function(){},
		extensions:[".qwe"],
		aliases:{
			">>d":"/bob/smith/hones",
			">>b":"/joan/wilson/kate"
		}
	};
	
	var rawConfig = {
		entry:"/path/to/src/js/main.js",
		urlDest:"foo",
		handlers:[jsHandler,foo,bar,baz],
		aliases:{
			">>mypersonalalias":"/so/many/paths",
			">>d":"/overrides/d"
		}
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"foo",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			handlers:{
				".js":jsHandler,
				".bar":foo,
				".baz":foo,
				".foo":bar,
				".qwe":baz
				},
			aliases:{
				">>a":"/path/to/foo",
				">>e":"/foo/nar/ser",
				">>b":"/joan/wilson/kate",
				">>d":"/overrides/d",
				">>mypersonalalias":"/so/many/paths"
			}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 6",function(t) {
	t.throws(function(){
		getConfig({});
	});

	t.throws(function(){
		getConfig({
			entry:50
		});
	});
	
	t.throws(function(){
		getConfig({
			entry:"path/to/src.js",
			dest:true
		});
	});
	
	t.throws(function(){
		getConfig({
			entry:"path/to/src.js",
			dest:"path/to/dest.js",
			urlDest:[]
		});
	});
	
	t.throws(function(){
		getConfig({
			entry:"path/to/src.js",
			dest:"path/to/dest.js",
			urlDest:"http://mysite.com/path/to/dest.js",
			postProcess:"RANDOM VALUE"
		});
	});
	
	t.end();
});

test("getConfig 7",function(t) {
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    requireBase:"."
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			requireBase:process.cwd(),
			defaultExtension:".js",
			handlers:{".js":jsHandler},
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 8",function(t) {
	var rawConfig = {
	    entry:"/src/js/main.js",
	    defaultExtension:".coffee"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/src/js/main.js"),
			dest:path.resolve("/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			requireBase:"",
			defaultExtension:".coffee",
			handlers:{".js":jsHandler},
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});