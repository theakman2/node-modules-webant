var path = require("path");

var extend = require("extend");

var getHandlers = require("./getHandlers.js");
var getAliases = require("./getAliases.js");

var jsHandler = require("./jsHandler.js");

function getConfig(config) {
	var _handlers = getHandlers(config.handlers);
	
	var i = jsHandler.extensions.length;
	while(i--) {
		_handlers[jsHandler.extensions[i]] = jsHandler;
	}
	
	var settings = {
		entry:"",
		dest:"",
		urlDest:"",
		postProcess:"none",
		requireBase:"",
		defaultExtension:".js",
		aliases:getAliases(config.handlers)
	};
	
	extend(true,settings,config);
	
	settings.handlers = _handlers;
	
	if (!settings.entry) {
		throw new Error("'entry' key not defined - path to entry script is required.");
	}
	
	if (typeof settings.entry !== "string") {
		throw new Error("'entry' key must be a string.");
	}
	
	if (typeof settings.dest !== "string") {
		throw new Error("'dest' key must be a string.");
	}
	
	if (typeof settings.urlDest !== "string") {
		throw new Error("'urlDest' key must be a string.");
	}
	
	if (typeof settings.requireBase !== "string") {
		throw new Error("'requireBase' key must be a string.");
	}
	
	if (typeof settings.defaultExtension !== "string") {
		throw new Error("'defaultExtension' key must be a string.");
	}
	
	if (
		(settings.postProcess !== "none")
		&& (settings.postProcess !== "debug")
		&& (settings.postProcess !== "compress")
	) {
		throw new Error("'postProcess' key must be 'none', 'debug' or 'compress'.");
	}
	
	if (!settings.handlers || (typeof settings.handlers !== "object")) {
		throw new Error("'handlers' key must be an object where the keys are names of handlers " +
				"and the values are options to be passed to the handlers.");
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
	
	if (settings.requireBase) {
		settings.requireBase = path.resolve(settings.requireBase);
	}
	
	return settings;
}

module.exports = getConfig;