var path = require("path");

var test = require("tap").test;

var Webant = require("../../lib/Webant.js");
var ConfigParser = require("../../lib/ConfigParser.js");

var jsHandler = require("../../lib/util/jsHandler.js");

function parseConfig(config) {
	var webant = new Webant(config);
	webant.parseConfig();
	return webant.settings;
}

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
			files:[{
				entry:path.resolve("/path/to/src/js/main.js"),
				dest:path.resolve("/path/to/build/main.out.js"),
				urlDest:"main.out.js",
			}],
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			aliases:{},
			includeBootstrap:path.resolve("/path/to/src/js/main.js"),
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"require",
			entryModules:[path.resolve("/path/to/src/js/main.js")]
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
			files:[{
				entry:path.resolve("/path/to/src/js/main.js"),
				dest:path.resolve("/path/to/src/js/main.out.js"),
				urlDest:"main.out.js",
			}],
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			aliases:{},
			includeBootstrap:path.resolve("/path/to/src/js/main.js"),
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"require",
			entryModules:[path.resolve("/path/to/src/js/main.js")]
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
			files:[{
				entry:path.resolve("/path/to/src/js/main.js"),
				dest:path.resolve("/path/to/src/js/main.out.js"),
				urlDest:"foo",
			}],
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
		    aliases:{},
			includeBootstrap:path.resolve("/path/to/src/js/main.js"),
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"require",
			entryModules:[path.resolve("/path/to/src/js/main.js")]
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
			files:[{
				entry:path.resolve("/path/to/src/js/main.js"),
				dest:path.resolve("/path/to/src/js/main.out.js"),
				urlDest:"foo",
			}],
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			aliases:{
				">>a":"/path/to/foo",
				">>e":"/foo/nar/ser",
				">>b":"/joan/wilson/kate",
				">>d":"/overrides/d",
				">>mypersonalalias":"/so/many/paths"
			},
			includeBootstrap:path.resolve("/path/to/src/js/main.js"),
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"require",
			entryModules:[path.resolve("/path/to/src/js/main.js")]
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
			files:[{
				entry:path.resolve("/path/to/src/js/main.js"),
				dest:path.resolve("/path/to/src/js/main.out.js"),
				urlDest:"main.out.js",
			}],
			postProcess:"none",
			requireBase:process.cwd(),
			defaultExtension:".js",
			aliases:{},
			includeBootstrap:path.resolve("/path/to/src/js/main.js"),
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"require",
			entryModules:[path.resolve("/path/to/src/js/main.js")]
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
			files:[{
				entry:path.resolve("/src/js/main.js"),
				dest:path.resolve("/src/js/main.out.js"),
				urlDest:"main.out.js",
			}],
			postProcess:"none",
			requireBase:"",
			defaultExtension:".coffee",
			aliases:{},
			includeBootstrap:path.resolve("/src/js/main.js"),
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"require",
			entryModules:[path.resolve("/src/js/main.js")]
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
	                 "debug",
	                 "--no-includeBootstrap",
	                 "--aliases.foo",
	                 "bar",
	                 "--aliases.baz=val",
	                 "--requireExpressionName=bar"
	                 ];
	
	var settings = parseConfig(rawConfig);
	delete settings.handlers;
	
	t.equivalent(
		settings,
		{
			files:[{
				entry:path.resolve("/src/js/main.js"),
				dest:path.resolve("/src/js/main.out.js"),
				urlDest:"main.out.js",
			}],
			postProcess:"debug",
			requireBase:"",
			defaultExtension:".coffee",
			aliases:{
				foo:"bar",
				baz:"val"
			},
			includeBootstrap:false,
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"bar",
			entryModules:[path.resolve("/src/js/main.js")]
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
			files:[{
				entry:path.join(__dirname,"nested","foo","bar","baz.js"),
				dest:path.join(__dirname,"nested","foo","baz","out.js"),
				urlDest:"out.js",
			}],
			postProcess:"compress",
			requireBase:"",
			defaultExtension:".ts",
			aliases:{},
			includeBootstrap:path.join(__dirname,"nested","foo","bar","baz.js"),
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"require",
			entryModules:[path.join(__dirname,"nested","foo","bar","baz.js")]
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
			files:[{
				entry:path.resolve("/path/to/src/js/main.js"),
				dest:path.resolve("/path/to/src/js/main.out.js"),
				urlDest:"main.out.js",
			}],
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			aliases:{},
			includeBootstrap:path.resolve("/path/to/src/js/main.js"),
			browserGlobalVar:"__MODULES__",
			requireExpressionName:"require",
			entryModules:[path.resolve("/path/to/src/js/main.js")]
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("parseConfig 12",function(t) {
	var rawConfig = {
	    entry:"/src/js/main.js",
	    defaultExtension:".coffee",
	    includeBootstrap:false,
	    browserGlobalVar:"foo",
	    entryModules:["foo/bar.js","baz/boosh.js"],
	    files:[{
	    	entry:"/src/js/contact.js"
	    }],
	    requireExpressionName:"foobar",
	};
	
	var settings = parseConfig(rawConfig);
	delete settings.handlers;
	t.equivalent(
		settings,
		{
			files:[{
				entry:path.resolve("/src/js/main.js"),
				dest:path.resolve("/src/js/main.out.js"),
				urlDest:"main.out.js",
			},{
				entry:path.resolve("/src/js/contact.js"),
				dest:path.resolve("/src/js/contact.out.js"),
				urlDest:"contact.out.js"
			}],
			postProcess:"none",
			requireBase:"",
			defaultExtension:".coffee",
			aliases:{},
			includeBootstrap:false,
			browserGlobalVar:"foo",
			requireExpressionName:"foobar",
			entryModules:[path.resolve("foo/bar.js"),path.resolve("baz/boosh.js")]
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});