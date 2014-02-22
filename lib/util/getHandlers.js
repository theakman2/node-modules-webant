var extend = require("extend");

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
	if (typeof handler.handle !== "function" || !handler.extensions) {
		return null;
	}
	if (!(handler.settings && typeof handler.settings === "object")) {
		handler.settings = {};
	}
	return handler;
}

function get(data) {
	var into = {};
	if (!data) {
		return into;
	}
	if (!Array.isArray(data)) {
		data = [data];
	}
	var handler;
	for (var i = 0, len = data.length; i < len; ++i) {
		handler = null;
		if (typeof data[i] === "string") {
			handler = fetch(data[i]);
		} else if (Array.isArray(data[i])) {
			if (handler = fetch(data[i][0])) {
				extend(handler.settings,data[i][1]);
			}
		} else if (data[i].extensions && typeof data[i].handle === "function") {
			handler = data[i];
			if (!(handler.settings && typeof handler.settings === "object")) {
				handler.settings = {};
			}
		}
		if (handler) {
			var exts = handler.extensions;
			if (!Array.isArray(exts)) {
				exts = [exts];
			}
			var j = exts.length;
			while(j--) {
				into[exts[j]] = handler.handle;
			}
		}
	}
	return into;
}

module.exports = get;