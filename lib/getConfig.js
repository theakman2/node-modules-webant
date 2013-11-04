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
		}
	};
	
	extend(true,settings,config);
	
	if (!settings.entry) {
		throw new Error("Path to entry script not defined.");
	}
	
	settings.entry = path.resolve(settings.entry);
	
	if (!settings.destPath) {
		var parts = settings.entry.split(".");
		parts[parts.length > 1 ? parts.length-2 : 0] += ".%ID%";
		settings.destPath = parts.join(".");
	} else if (settings.destPath.indexOf("%ID%") === -1) {
		var parts = settings.destPath.split(".");
		parts[parts.length > 1 ? parts.length-2 : 0] += ".%ID%";
		settings.destPath = parts.join(".");
	}
	
	settings.destPath = path.resolve(settings.destPath);
	
	if (!settings.urlDestPath) {
		settings.urlDestPath = path.basename(settings.destPath);
	}
	
	return settings;
}

module.exports = getConfig;