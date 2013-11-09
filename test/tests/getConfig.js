var test = require("tap").test;

var path = require("path");

var getConfig = require("../../lib/getConfig.js");

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
			mode:"normal",
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
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"main.out.js",
			mode:"normal",
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
	    urlDest:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"foo",
			mode:"normal",
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
	    urlDest:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main"),
			dest:path.resolve("/path/to/src/js/main.out"),
			urlDest:"foo",
			mode:"normal",
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
	    dest:"/path/to/build/js/main",
	    urlDest:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main"),
			dest:path.resolve("/path/to/build/js/main"),
			urlDest:"foo",
			mode:"normal",
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