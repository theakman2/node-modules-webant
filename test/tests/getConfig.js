var test = require("tap").test;

var path = require("path");

var getConfig = require("../../lib/getConfig.js");

var handlers = {
	css:require("webant-handler-css"),
	hbs:require("webant-handler-hbs"),
	json:require("webant-handler-json"),
	less:require("webant-handler-less"),
	scss:require("webant-handler-scss"),
	stylus:require("webant-handler-stylus"),
	text:require("webant-handler-text"),
	js:require("webant-handler-js"),
	mtmpl:require("webant-handler-mtmpl")
};

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
			handlers:[
			          handlers.css,
			          handlers.hbs,
			          handlers.json,
			          handlers.less,
			          handlers.scss,
			          handlers.stylus,
			          handlers.text,
			          handlers.js,
			          handlers.mtmpl
			          ]
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 3",function(t){
	var extraHandler = {
		handle:function(){},
		willHandle:function(){}
	};
	
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    handlers:extraHandler
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
			handlers:[
			          handlers.css,
			          handlers.hbs,
			          handlers.json,
			          handlers.less,
			          handlers.scss,
			          handlers.stylus,
			          handlers.text,
			          handlers.js,
			          handlers.mtmpl,
			          extraHandler
			          ]
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 4",function(t){
	var foo = {
		willHandle:function(){},
		handle:function(){}
	};
	
	var bar = {
		handle:function(){},
		willHandle:function(){}
	};
	
	var baz = {
		handle:function(){},
		willHandle:function(){}
	};
	
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    urlDest:"foo",
	    handlers:[foo,bar,baz]
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
			handlers:[
			          handlers.css,
			          handlers.hbs,
			          handlers.json,
			          handlers.less,
			          handlers.scss,
			          handlers.stylus,
			          handlers.text,
			          handlers.js,
			          handlers.mtmpl,
			          foo,
			          bar,
			          baz
			          ]
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 5",function(t){
	function f1(){};
	function f2(){};
	
	var foo = {
		willHandle:f1,
		handle:f2
	};
	
	var bar = {
		handle:f2,
		willHandle:f1
	};
	
	var baz = {
		handle:f1,
		willHandle:f2
	};
	
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    urlDest:"foo",
	    handlers:[
	              handlers.less,
	              foo,
	              bar,
	              baz,
	              bar,
	              "scss",
	              {
	            	  text:{
	            		  hey:"there"
	            	  }
	              }
	              ]
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
			handlers:[
			          handlers.css,
			          handlers.hbs,
			          handlers.json,
			          handlers.less,
			          handlers.scss,
			          handlers.stylus,
			          {
			        	  willHandle:handlers.text.willHandle,
			        	  handle:handlers.text.handle,
			        	  defaultSettings:{
			        		  hey:"there"
			        	  }
			          },
			          handlers.js,
			          handlers.mtmpl,
			          {
			        	  willHandle:f1,
			        	  handle:f2,
			        	  defaultSettings:{}
			          },
			          bar,
			          baz
			          ]
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});

test("getConfig 6",function(t) {
	var rawConfig = {
	    entry:"/path/to/src/js/main",
	    dest:"/path/to/build/js/main",
	    urlDest:"foo",
	    handlers:{
	    	hbs:{
	    		includeFoo:"barit"
	    	}
	    }
	};
	
	var settings = getConfig(rawConfig);
	
	t.equivalent(
		settings,
		{
			entry:path.resolve("/path/to/src/js/main"),
			dest:path.resolve("/path/to/build/js/main"),
			urlDest:"foo",
			postProcess:"none",
			defaultExtension:".js",
			requireBase:"",
			handlers:[
			          handlers.css,
			          {
			        	  willHandle:handlers.hbs.willHandle,
			        	  handle:handlers.hbs.handle,
			        	  defaultSettings:{
			        		  includeFoo:"barit"
			        	  }
			          },
			          handlers.json,
			          handlers.less,
			          handlers.scss,
			          handlers.stylus,
			          handlers.text,
			          handlers.js,
			          handlers.mtmpl
			          ]
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
			defaultExtension:".js",
			handlers:[
			          handlers.css,
			          handlers.hbs,
			          handlers.json,
			          handlers.less,
			          handlers.scss,
			          handlers.stylus,
			          handlers.text,
			          handlers.js,
			          handlers.mtmpl
			          ]
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
			handlers:[
			          handlers.css,
			          handlers.hbs,
			          handlers.json,
			          handlers.less,
			          handlers.scss,
			          handlers.stylus,
			          handlers.text,
			          handlers.js,
			          handlers.mtmpl
			          ]
		},
		"Defaults should have been merged in properly."
	);
	
	t.end();
});