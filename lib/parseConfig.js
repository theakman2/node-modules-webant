var path = require("path");

var extend = require("extend");

var handlers = require("./util/handlers.js");
var yargs = require("./util/yargs.js");

function parseConfig(config) {
	var resolveBase = process.cwd();
	
	if (Array.isArray(config)) {
		var args = yargs.parse(config);
		config = {
			entry:args.entry,
			dest:args.dest,
			urlDest:args.urlDest,
			postProcess:args.postProcess,
			requireBase:args.requireBase,
			defaultExtension:args.defaultExtension,
			handlers:args.handlers,
			useConfig:args.useConfig,
			includeBootstrap:args.includeBootstrap,
			browserGlobalVar:args.browserGlobalVar
		};
	} else if (typeof config === "string") {
		config = {
			entry:config
		};
	}
	
	if (config.useConfig) {
		if (typeof config.useConfig === "string") {
			var configPath = path.resolve(config.useConfig);
		} else {
			var configPath = path.resolve("./webant-config.json");
		}
		resolveBase = path.dirname(configPath);
		config = extend(true,{},require(configPath),config);
	}
	
	var _handlers = {};
	var _aliases = {};
	
	handlers.populate(config.handlers,_handlers,_aliases);
	
	var settings = {
		entry:"",
		dest:"",
		urlDest:"",
		postProcess:"none",
		requireBase:"",
		defaultExtension:".js",
		aliases:_aliases,
		includeBootstrap:true,
		browserGlobalVar:"__CHUNKS__"
	};
	
	extend(true,settings,config);
	
	settings.handlers = _handlers;
	
	if (!settings.entry) {
		throw new Error("'entry' key not defined - path to entry script is required.");
	}
	
	if (!settings.browserGlobalVar) {
		throw new Error("Required key 'browserGlobalVar' key not defined.");
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
	
	if (typeof settings.browserGlobalVar !== "string") {
		throw new Error("'browserGlobalVar' must be a string.");
	}
	
	settings.includeBootstrap = !!settings.includeBootstrap;
	
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
	
	settings.entry = path.resolve(resolveBase,settings.entry);
	
	if (!settings.dest) {
		var dir = path.dirname(settings.entry);
		var ext = path.extname(settings.entry);
		var base = path.basename(settings.entry,ext);
		settings.dest = dir+path.sep+base+".out"+ext;
	}
	
	settings.dest = path.resolve(resolveBase,settings.dest);
	
	if (!settings.urlDest) {
		settings.urlDest = path.basename(settings.dest);
	}
	
	if (settings.requireBase) {
		settings.requireBase = path.resolve(resolveBase,settings.requireBase);
	}
	
	return settings;
}

module.exports = parseConfig;