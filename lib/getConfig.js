var path = require("path");

var extend = require("./extend.js");

function getConfig(config) {
	var settings = {
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
	};
	
	extend(settings,config);
	
	if (!settings.jsEntryPath) {
		throw new Error("Path to entry script not defined.");
	}
	
	if (settings.htmlEntryPath && !settings.htmlDestPath) {
		throw new Error("Path to handlebars input defined but destination not defined.");
	}
	
	if (settings.htmlDestPath && !settings.htmlEntryPath) {
		throw new Error("Path to html destination defined but path to handlebars input not defined.");
	}
	
	if (!settings.jsDestPath && !settings.htmlDestPath) {
		throw new Error("No outputs defined - specify a javascript destination path or a html destination path.");
	}
	
	return settings;
}

module.exports = getConfig;