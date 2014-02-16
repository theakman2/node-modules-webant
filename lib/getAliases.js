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
	return handler.aliases ? handler : null;
}

function get(data) {
	var into = {};
	if (!data || !Array.isArray(data)) {
		return into;
	}
	var handler;
	for (var i = 0, len = data.length; i < len; ++i) {
		handler = null;
		if (typeof data[i] === "string") {
			handler = fetch(data[i]);
		} else if (Array.isArray(data[i])) {
			handler = fetch(data[i][0]);
		} else if (data[i].aliases) {
			handler = data[i];
		}
		if (handler) {
			extend(into,handler.aliases);
		}
	}
	return into;
}

module.exports = get;