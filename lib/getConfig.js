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
//			css:{},
//			hbs:{},
//			json:{},
//			less:{},
//			scss:{},
//			stylus:{},
//			text:{},
			js:{}
		}
	};
	
	extend(true,settings,config);
	
	if (!settings.entry) {
		throw new Error("Path to entry script not defined.");
	}
	
	var ext = path.extname(settings.entry);
	var destFileName = path.basename(settings.entry,ext)+"%ID%."+ext;
	
	if (!settings.destPath) {
		settings.destPath = path.join(path.dirname(settings.entry),destFileName);
	}
	
	if (!settings.urlDestPath) {
		settings.urlDestPath = destFileName;
	}
	
	return settings;
}

module.exports = getConfig;