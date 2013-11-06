var path = require("path");

var extend = require("./util/extend.js");

function getConfig(config) {
	var settings = {
		entry:"",
		destPath:"",
		urlDestPath:"",
		mode:"normal",
		aliases:{},
		defaultExtension:".js",
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
	
	return settings;
}

module.exports = getConfig;