var path = require("path");

var extend = require("extend");

var handlers = require("./util/handlers.js");
var yargs = require("./util/yargs.js");

function ConfigParser(webant) {
	this.webant = webant;
}

ConfigParser.prototype = {
	parse:function(){
		var config = this.webant.origConfig;
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
				browserGlobalVar:args.browserGlobalVar,
				entryModules:args.entryModules,
				aliases:args.aliases
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
		
		var settings = {};
		settings.files = [];
		
		if (config.entry) {
			settings.files.push({
				entry:config.entry,
				dest:config.dest,
				urlDest:config.urlDest
			});
		}
		
		if (Array.isArray(config.files)) {
			for (var i = 0, len = config.files.length; i < len; ++i) {
				settings.files.push({
					entry:config.files[i].entry,
					dest:config.files[i].dest,
					urlDest:config.files[i].urlDest
				});
			}
		}
		
		settings.postProcess = config.postProcess || "none";
		settings.requireBase = config.requireBase || "";
		settings.defaultExtension = config.defaultExtension || ".js";
		settings.includeBootstrap = config.includeBootstrap;
		settings.browserGlobalVar = config.browserGlobalVar || "__MODULES__";
		settings.entryModules = config.entryModules;
		settings.aliases = {};
		settings.handlers = {};
		
		handlers.populate(config.handlers,settings.handlers,settings.aliases);
		
		if (config.aliases && (typeof config.aliases === "object")) {
			extend(settings.aliases,config.aliases);
		}
		
		if (!settings.files.length) {
			throw new Error(
				"No entry files selected. Please define the 'entry' key or" +
				" the 'files' key."
			);
		}
		
		for (var i = 0, len = settings.files.length; i < len; ++i) {
			if (typeof settings.files[i].entry !== "string") {
				throw new Error(
					"The 'entry' key at index " + i + " of the 'files' key must be a string."
				);
			}
			settings.files[i].entry = path.resolve(
				resolveBase,
				settings.files[i].entry
			);
			if (typeof settings.files[i].dest === "undefined") {
				var dir = path.dirname(settings.files[i].entry);
				var ext = path.extname(settings.files[i].entry);
				var base = path.basename(settings.files[i].entry,ext);
				settings.files[i].dest = dir + path.sep + base + ".out" + ext;
			}
			if (typeof settings.files[i].dest !== "string") {
				throw new Error(
					"The 'dest' key at index " + i + " of the 'files' key must be a string."
				);
			}
			settings.files[i].dest = path.resolve(
				resolveBase,
				settings.files[i].dest
			);
			if (typeof settings.files[i].urlDest === "undefined") {
				settings.files[i].urlDest = path.basename(settings.files[i].dest);
			}
			if (typeof settings.files[i].urlDest !== "string") {
				throw new Error(
					"The 'urlDest' key at index " + i + " of the 'files' key must be a string."
				);
			}
		}
		
		if (!settings.browserGlobalVar) {
			throw new Error("Required key 'browserGlobalVar' key not defined.");
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
		
		if (typeof settings.includeBootstrap === "undefined") {
			settings.includeBootstrap = settings.files[0].entry;
		}
		
		if (typeof settings.entryModules === "undefined") {
			settings.entryModules = [settings.files[0].entry];
		}
		
		if (!Array.isArray(settings.entryModules)) {
			throw new Error("'entryModules' key must be an array of strings.");
		}
		
		for (var i = 0, len = settings.entryModules.length; i < len; ++i) {
			var module = settings.entryModules[i];
			if (typeof module !== "string") {
				throw new Error("'entryModules' key must be an array of strings.");
			}
			settings.entryModules[i] = path.resolve(resolveBase,module);
		}
		
		if (settings.requireBase) {
			settings.requireBase = path.resolve(resolveBase,settings.requireBase);
		}
		
		return settings;
	}
};

module.exports = ConfigParser;