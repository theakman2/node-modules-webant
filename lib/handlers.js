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
	if (!(handler.settings && typeof handler.settings === "object")) {
		handler.settings = {};
	}
	return handler;
}

function _get(data,into) {
	if (typeof data === "string") {
		var handler = fetch(data);
		if (into.indexOf(handler) === -1) {
			into.push(handler);
		}
	} else if (typeof data.willHandle === "function" && typeof data.handle === "function") {
		if (into.indexOf(data) === -1) {
			if (!(data.settings && typeof data.settings === "object")) {
				data.settings = {};
			}
			into.push(data);
		}
	} else if (Array.isArray(data)) {
		var len = data.length;
		for(var i = 0; i < len; i++) {
			_get(data[i],into);
		}
	} else if (data && (typeof data === "object")) {
		for (var key in data) {
			if (data.hasOwnProperty(key)) {
				var handler = fetch(key);
				extend(handler.settings,data[key]);
				if (into.indexOf(handler) === -1) {
					into.push(handler);
				}
			}
		}
	} else {
		throw new TypeError("Invalid parameter passed.");
	}
	return into;
}

function get(data,into) {
	into = into || [];
	return _get(data,into);
}

module.exports = {
	get:get,
	fetch:fetch
};