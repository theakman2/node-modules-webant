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
	
	if (settings.jsEntryPath && !settings.jsDestPath) {
        settings.jsDestPath = path.dirname(settings.jsEntryPath)
        	+ path.sep
        	+ path.basename(settings.jsEntryPath,path.extname(settings.jsEntryPath))
        	+ ".out.js";
	}
	
	if (settings.jsDestPath && settings.htmlEntryPath && !settings.htmlDestPath) {
		settings.htmlDestPath = path.dirname(settings.jsDestPath)
        	+ path.sep
        	+ path.basename(settings.htmlEntryPath,path.extname(settings.htmlEntryPath))
        	+ ".html";
	}
	
	return settings;
}

module.exports = getConfig;