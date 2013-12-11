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
			postProcess:"none",
			defaultExtension:"",
			requireBase:"",
		    handlers:{
				css:{},
				hbs:{},
				mtmpl:{},
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
	    entry:"/path/to/src/js/main.js",
	    handlers:"coffee"
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"main.out.js",
			postProcess:"none",
			defaultExtension:"",
			requireBase:"",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				mtmpl:{},
				less:{},
				scss:{},
				stylus:{},
				text:{},
				coffee:{}
		    }
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 4",function(t){
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    urlDest:"foo",
	    handlers:["foo","bar","baz"]
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main.js"),
			dest:path.resolve("/path/to/src/js/main.out.js"),
			urlDest:"foo",
			postProcess:"none",
			defaultExtension:"",
			requireBase:"",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				mtmpl:{},
				less:{},
				scss:{},
				stylus:{},
				text:{},
				foo:{},
				bar:{},
				baz:{}
		    }
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 5",function(t) {
	var rawConfig = {
	    entry:"/path/to/src/js/main",
	    urlDest:"foo",
	    handlers:{
	    	foo:{
	    		arg1:5,
	    		arg2:"test"
	    	},
	    	bar:{},
	    	baz:{}
	    }
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main"),
			dest:path.resolve("/path/to/src/js/main.out"),
			urlDest:"foo",
			postProcess:"none",
			defaultExtension:"",
			requireBase:"",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				mtmpl:{},
				less:{},
				scss:{},
				stylus:{},
				text:{},
				foo:{
					arg1:5,
					arg2:"test"
				},
				bar:{},
				baz:{}
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
			postProcess:"none",
			defaultExtension:"",
			requireBase:"",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				mtmpl:{},
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

test("getConfig 7",function(t) {
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
	
	t.throws(function(){
		getConfig({
			entry:"path/to/src.js",
			dest:"path/to/dest.js",
			urlDest:"http://mysite.com/path/to/dest.js",
			postProcess:"normal",
			handlers:true
		});
	});
	
	t.throws(function(){
		getConfig({
			entry:"path/to/src.js",
			dest:"path/to/dest.js",
			urlDest:"http://mysite.com/path/to/dest.js",
			postProcess:"normal",
			handlers:34
		});
	});
	
	t.throws(function(){
		getConfig({
			entry:"path/to/src.js",
			dest:"path/to/dest.js",
			urlDest:"http://mysite.com/path/to/dest.js",
			postProcess:"normal",
			handlers:[6e3]
		});
	});
	
	t.end();
});

test("getConfig 8",function(t) {
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
			defaultExtension:"",
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				mtmpl:{},
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

test("getConfig 9",function(t) {
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
		    handlers:{
				css:{},
				hbs:{},
				js:{},
				json:{},
				mtmpl:{},
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