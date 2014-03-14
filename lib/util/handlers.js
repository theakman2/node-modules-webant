var extend = require("extend");

var jsHandler = require("./jsHandler.js");

function fetch(str) {
	var handler;
	try {
		handler = require("webant-handler-" + str);
	} catch(e) {
		if (e.code !== "MODULE_NOT_FOUND") {
			throw e;
		}
		throw new Error("Handler '" + str + "' not found. " +
				"Are you sure the package 'webant-handler-" + str + "' is installed?");
	}
	if (typeof handler === "function") {
		handler = new handler();
	}
	return handler;
}

function push(handler,intoHandlers,intoAliases) {
	if (handler.extensions && (typeof handler.handle === "function")) {
		var exts = handler.extensions;
		if (!Array.isArray(exts)) {
			exts = [exts];
		}
		var j = exts.length;
		while(j--) {
			intoHandlers[exts[j]] = handler.handle.bind(handler);
		}
	}
	if (handler.aliases && (typeof handler.aliases === "object")) {
		extend(intoAliases,handler.aliases);
	}
}

function populate(data,intoHandlers,intoAliases) {
	push(jsHandler,intoHandlers,intoAliases);
	
	if (!data) {
		return;
	}
	
	if (!Array.isArray(data)) {
		data = [data];
	}
	
	for (var i = 0, len = data.length; i < len; ++i) {
		var handler = null;
		var settings = null;
		if (typeof data[i] === "string") {
			handler = fetch(data[i]);
		} else if (Array.isArray(data[i])) {
			handler = fetch(data[i][0]);
			settings = data[i][1];
		} else if (typeof data[i] === "function") {
			handler = new data[i]();
		} else if (typeof data[i] === "object") {
			handler = data[i];
		}
		
		if (handler) {
			if (!(handler.settings && typeof handler.settings === "object")) {
				handler.settings = {};
			}
			if (settings) {
				extend(handler.settings,settings);
			}
			push(handler,intoHandlers,intoAliases);
		}
	}
}

module.exports = {
	populate:populate,
	push:push,
	fetch:fetch
};