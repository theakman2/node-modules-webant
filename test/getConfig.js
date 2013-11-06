var test = require("tap").test;

var path = require("path");

var getConfig = require("../lib/getConfig.js");

test("getConfig 1",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    destPath:"/path/to/build/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		rawConfig,
		{
			entry:"/path/to/src/js/main.js",
			destPath:"/path/to/build/main.js"
		},
		"Original configuration object should not have been mutated."
	);
	
	t.end();
});

test("getConfig 2",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    destPath:"/path/to/build/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:"/path/to/src/js/main.js",
			destPath:"/path/to/build/main.%ID%.js",
			urlDestPath:"main.%ID%.js",
			mode:"normal",
			aliases:{},
			defaultExtension:".js",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				less:{},
				scss:{},
				stylus:{},
				text:{}
		    }
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 3",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:"/path/to/src/js/main.js",
			destPath:"/path/to/src/js/main.%ID%.js",
			urlDestPath:"main.%ID%.js",
			mode:"normal",
			aliases:{},
			defaultExtension:".js",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				less:{},
				scss:{},
				stylus:{},
				text:{}
		    }
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 4",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    urlDestPath:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:"/path/to/src/js/main.js",
			destPath:"/path/to/src/js/main.%ID%.js",
			urlDestPath:"foo",
			mode:"normal",
			aliases:{},
			defaultExtension:".js",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				less:{},
				scss:{},
				stylus:{},
				text:{}
		    }
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 5",function(t) {
	var rawConfig = {
	    entry:"/path/to/src/js/main",
	    urlDestPath:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:"/path/to/src/js/main",
			destPath:"/path/to/src/js/main.%ID%",
			urlDestPath:"foo",
			mode:"normal",
			aliases:{},
			defaultExtension:".js",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				less:{},
				scss:{},
				stylus:{},
				text:{}
		    }
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 6",function(t) {
	var rawConfig = {
	    entry:"/path/to/src/js/main",
	    destPath:"/path/to/build/js/main",
	    urlDestPath:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:"/path/to/src/js/main",
			destPath:"/path/to/build/js/main.%ID%",
			urlDestPath:"foo",
			mode:"normal",
			aliases:{},
			defaultExtension:".js",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				less:{},
				scss:{},
				stylus:{},
				text:{}
		    }
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});