var test = require("tap").test;

var path = require("path");

var parseConfig = require("../../lib/parseConfig.js");

var jsHandler = require("../../lib/util/jsHandler.js");

test("parseConfig 1",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    dest:"/path/to/build/main.js"
	};
	
	var settings = parseConfig(rawConfig);
	
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

test("parseConfig 2",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    dest:"/path/to/build/main.out.js"
	};
	
	var settings = parseConfig(rawConfig);
	
	delete settings.handlers;
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/build/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("parseConfig 3",function(t){
	var extraHandler = {
		extensions:[".foo"],
		handle:function(){
			return this.extensions[0];
		}
	};
	
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    handlers:[extraHandler]
	};
	
	var settings = parseConfig(rawConfig);
	var h = settings.handlers;
	delete settings.handlers;
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.strictEqual(
		h[".foo"](),
		".foo",
		"Handlers should have been merged in correctly."
	);
	
	t.end();
});

test("parseConfig 4",function(t){
	var foo = {
		extensions:[".bar",".baz"],
		handle:function(){
			return this.extensions[1];
		}
	};
	
	var bar = {
		handle:function(){},
		extensions:[".foo"]
	};
	
	function baz() {
		this._test = "testing";
	}
	
	baz.prototype = {
		handle:function(){
			return this._test;
		},
		extensions:[".qwe"]
	};
	
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    urlDest:"foo",
	    handlers:[jsHandler,foo,bar,baz]
	};
	
	var settings = parseConfig(rawConfig);
	
	var h = settings.handlers;
	
	delete settings.handlers;
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"foo",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
		    aliases:{}
		},
		"Defaults should have been merged in properly."
	);

	t.equivalent(
		Object.keys(h).sort(),
		[".bar",".baz",".foo",".js",".qwe"],
		"Handlers should have been merged in correctly."
	);
	
	t.strictEqual(
		h[".bar"](),
		".baz",
		"Handler's 'handle' method should have been bound correctly - .bar."
	);
	
	t.strictEqual(
		h[".qwe"](),
		"testing",
		"Handler's 'handle' method should have been bound correctly - .qwe."
	);
	
	t.end();
});

test("parseConfig 5",function(t){
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
	
	var settings = parseConfig(rawConfig);
	var h = settings.handlers;
	
	delete settings.handlers;
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"foo",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
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
	
	t.equivalent(
		Object.keys(h).sort(),
		[".bar",".baz",".foo",".js",".qwe"],
		"Handlers should have been merged in correctly."
	);
	
	t.end();
});

test("parseConfig 6",function(t) {
	t.throws(function(){
		parseConfig({});
	});

	t.throws(function(){
		parseConfig({
			entry:50
		});
	});
	
	t.throws(function(){
		parseConfig({
			entry:"path/to/src.js",
			dest:true
		});
	});
	
	t.throws(function(){
		parseConfig({
			entry:"path/to/src.js",
			dest:"path/to/dest.js",
			urlDest:[]
		});
	});
	
	t.throws(function(){
		parseConfig({
			entry:"path/to/src.js",
			dest:"path/to/dest.js",
			urlDest:"http://mysite.com/path/to/dest.js",
			postProcess:"RANDOM VALUE"
		});
	});
	
	t.end();
});

test("parseConfig 7",function(t) {
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    requireBase:"."
	};
	
	var settings = parseConfig(rawConfig);
	delete settings.handlers;
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			requireBase:process.cwd(),
			defaultExtension:".js",
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("parseConfig 8",function(t) {
	var rawConfig = {
	    entry:"/src/js/main.js",
	    defaultExtension:".coffee"
	};
	
	var settings = parseConfig(rawConfig);
	delete settings.handlers;
	t.equivalent(
		settings,
		{
			entry:path.resolve("/src/js/main.js"),
			dest:path.resolve("/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			requireBase:"",
			defaultExtension:".coffee",
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("parseConfig 9",function(t){
	var rawConfig = [
	                 "--entry",
	                 "/src/js/main.js",
	                 "--defaultExtension=.coffee",
	                 "--postProcess",
	                 "debug"
	                 ];
	
	var settings = parseConfig(rawConfig);
	delete settings.handlers;
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/src/js/main.js"),
			dest:path.resolve("/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"debug",
			requireBase:"",
			defaultExtension:".coffee",
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("parseConfig 10",function(t){
	var configFile = path.join(__dirname,"nested","webantconfig.json");
	
	var rawConfig = [
	                 "--r",
	                 "",
	                 "--useConfig",
	                 configFile,
	                 "--p=compress",
	                 ];
	
	var settings = parseConfig(rawConfig);
	delete settings.handlers;
	t.equivalent(
		settings,
		{
			entry:path.join(__dirname,"nested","foo","bar","baz.js"),
			dest:path.join(__dirname,"nested","foo","baz","out.js"),
			urlDest:"out.js",
			postProcess:"compress",
			requireBase:"",
			defaultExtension:".ts",
			aliases:{},
			useConfig:configFile
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("parseConfig 11",function(t){
	var rawConfig = "/path/to/src/js/main.js";
	
	var settings = parseConfig(rawConfig);
	delete settings.handlers;
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			aliases:{}
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});