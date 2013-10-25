var path = require("path");

var getConfig = require("../lib/getConfig.js");

exports["test getConfig"] = function(assert,done) {
	var rawConfig = {
		base:__dirname,
	    jsEntryPath:"%%base%%/path/to/src/js/main.js",
	    jsDestPath:"%%base%%/path/to/build/main.js"
	};
	
	var settings = getConfig(rawConfig);
	
	assert.deepEqual(
		rawConfig,
		{
			base:__dirname,
			jsEntryPath:"%%base%%/path/to/src/js/main.js",
			jsDestPath:"%%base%%/path/to/build/main.js"
		},
		"Original configuration object should not have been mutated."
	);
	
	assert.deepEqual(
		settings,
		{
			base:__dirname,
			jsEntryPath:path.join(__dirname,"path","to","src","js","main.js"),
			jsDestPath:path.join(__dirname,"path","to","build","main.js"),
			handlers:{
				js:{
					debugBasePath:__dirname,
					mode:"normal"
				},
				css:{},
				external:{}
			},
			requireAliases:{}
		},
		"Defaults should have been merged in properly and appropriate paths resolved."
	);
	
	done();
}