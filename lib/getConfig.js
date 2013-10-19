var path = require("path");

var extend = require("./extend.js");

function resolvePaths(obj,base) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (obj[key] && !Array.isArray(obj[key]) && (typeof obj[key] === "object")) {
				obj[key] = resolvePaths(obj[key],base);
			} else if ((typeof obj[key] === "string") && key.match(/Path$/)) {
				obj[key] = path.resolve(base,obj[key]);
			}
		}
	}
	return obj;
}

function getConfig(config) {
	var settings = {
		base:process.cwd(),
		handlers:{
			js:{
				debugBasePath:"",
				mode:"normal"
			}
		}
	};
	
	if (
		config.hasOwnProperty("cssDestPath")
		&& config.hasOwnProperty("htmlEntryPath")
		&& config.hasOwnProperty("htmlDestPath")
	) {
		settings.handlers.externalCss = {};
	} else {
		settings.handlers.internalCss = {};
	}
	
	extend(settings,config);
	
	resolvePaths(settings,settings.base);
	
	return settings;
}

module.exports = getConfig;