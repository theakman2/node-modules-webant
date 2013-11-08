var path = require("path");

var extend = require("extend");

function getConfig(config) {
	var settings = {
		entry:"",
		destPath:"",
		urlDestPath:"",
		mode:"normal",
		handlers:{
			css:{},
			hbs:{},
			json:{},
			less:{},
			scss:{},
			stylus:{},
			text:{},
			js:{}
		},
		includes:[]
	};
	
	extend(true,settings,config);
	
	if (!settings.entry) {
		throw new Error("Path to entry script not defined.");
	}
	
	settings.entry = path.resolve(settings.entry);
	
	if (!settings.destPath) {
		var dir = path.dirname(settings.entry);
		var ext = path.extname(settings.entry);
		var base = path.basename(settings.entry,ext);
		settings.destPath = dir+path.sep+base+".out"+ext;
	}
	
	settings.destPath = path.resolve(settings.destPath);
	
	if (!settings.urlDestPath) {
		settings.urlDestPath = path.basename(settings.destPath);
	}
	
	for (var i = 0; i < settings.includes.length; i++) {
		if (settings[i].hasOwnProperty("filePath")) {
			settings[i].filePath = path.resolve(settings[i].filePath);
		}
		if (settings[i].hasOwnProperty("sameChunkAs")) {
			settings[i].sameChunkAs = path.resolve(settings[i].sameChunkAs);
		}
	}
	
	return settings;
}

module.exports = getConfig;