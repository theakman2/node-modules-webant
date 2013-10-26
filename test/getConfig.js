var path = require("path");

var getConfig = require("../lib/getConfig.js");

exports["test getConfig"] = function(assert,done) {
	var rawConfig = {
	    jsEntryPath:"/path/to/src/js/main.js",
	    jsDestPath:"/path/to/build/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	assert.deepEqual(
		rawConfig,
		{
			jsEntryPath:"/path/to/src/js/main.js",
			jsDestPath:"/path/to/build/main.js"
		},
		"Original configuration object should not have been mutated."
	);
	
	assert.deepEqual(
		settings,
		{
			jsEntryPath:"/path/to/src/js/main.js",
			jsDestPath:"/path/to/build/main.js",
		    handlers:{
				css:{},
				external:{},
				hbs:{},
				js:{
					mode:"normal"
				},
				json:{},
				less:{},
				scss:{},
				stylus:{},
				text:{}
		    },
			requireAliases:{}
		},
		"Defaults should have been merged in properly and appropriate paths resolved."
	);
	
	done();
}