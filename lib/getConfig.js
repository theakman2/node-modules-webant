var path = require("path");

var extend = require("./extend.js");

function resolvePaths(obj,base) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (obj[key] && !Array.isArray(obj[key]) && (typeof obj[key] === "object")) {
				obj[key] = resolvePaths(obj[key],base);
			} else if (typeof obj[key] === "string" && (obj[key].indexOf("%%base%%") === 0)) {
				obj[key] = path.resolve(base,obj[key].replace(/^%%base%%[\/\\]*/,""));
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
			},
			css:{}
		}
	};
	
	extend(settings,config);
	
	resolvePaths(settings,settings.base);
	
	return settings;
}

module.exports = getConfig;