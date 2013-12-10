var path = require("path");

var extend = require("extend");

function handleHandlers(h,into) {
	if (typeof h === "string") {
		if (!into.hasOwnProperty(h)) {
			into[h] = {};
		}
		return;
    } else if (Array.isArray(h)) {
        for (var i = 0; i < h.length; i++) {
            handleHandlers(h[i],into);
        }
        return;
    } else if (typeof h === "object") {
        extend(true,into,h);
        return;
    } else {
    	throw new Error("'handlers' key must be a string, an object, or an array of " +
    			"strings or objects.");
    }
}

function getConfig(config) {
	var handlers = {
		css:{},
		hbs:{},
		json:{},
		less:{},
		scss:{},
		stylus:{},
		text:{},
		mtmpl:{},
		js:{}
	};
	
	if (typeof config.handlers !== "undefined") {
		handleHandlers(config.handlers,handlers);
	}
	
	var settings = {
		entry:"",
		dest:"",
		urlDest:"",
		postProcess:"none",
		requireBase:""
	};	
	
	extend(true,settings,config);
	
	settings.handlers = handlers;
	
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