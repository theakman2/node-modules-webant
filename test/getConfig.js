var path = require("path");

var getConfig = require("../lib/getConfig.js");

exports["test getConfig"] = function(assert) {
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    destPath:"/path/to/build/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	assert.deepEqual(
		rawConfig,
		{
			entry:"/path/to/src/js/main.js",
			destPath:"/path/to/build/main.js"
		},
		"Original configuration object should not have been mutated."
	);
};

exports["test getConfig 2"] = function(assert) {
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    destPath:"/path/to/build/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	assert.deepEqual(
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
};

exports["test getConfig 2"] = function(assert) {
	var rawConfig = {
	    entry:"/path/to/src/js/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	assert.deepEqual(
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
};

exports["test getConfig 3"] = function(assert) {
	var rawConfig = {
	    entry:"/path/to/src/js/main.js",
	    urlDestPath:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	assert.deepEqual(
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
};

exports["test getConfig 4"] = function(assert) {
	var rawConfig = {
	    entry:"/path/to/src/js/main",
	    urlDestPath:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	assert.deepEqual(
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
};

exports["test getConfig 5"] = function(assert) {
	var rawConfig = {
	    entry:"/path/to/src/js/main",
	    destPath:"/path/to/build/js/main",
	    urlDestPath:"foo"
	};
	
	var settings = getConfig(rawConfig);
	
	assert.deepEqual(
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
};