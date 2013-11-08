var path = require("path");

var extend = require("extend");

function getConfig(config) {
	var settings = {
		entry:"",
		dest:"",
		urlDest:"",
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
		}
	};
	
	extend(true,settings,config);
	
	if (!settings.entry) {
		throw new Error("Path to entry script not defined.");
	}
	
	settings.entry = path.resolve(settings.entry);
	
	if (!settings.dest) {
		var dir = path.dirname(settings.entry);
		var ext = path.extname(settings.entry);
		var base = path.basename(settings.entry,ext);
		settings.dest = dir+path.sep+base+".out"+ext;
	}
	
	settings.dest = path.resolve(settings.dest);
	
	if (!settings.urlDest) {
		settings.urlDest = path.basename(settings.dest);
	}
	
	return settings;
}

module.exports = getConfig;