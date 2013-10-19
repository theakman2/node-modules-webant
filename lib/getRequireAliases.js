var extend = require("./extend.js");

function getRequireAliasesFromSettings(settings,into) {
	for (var key in settings) {
		if (settings.hasOwnProperty(key)) {
			if (key === "requireAliases") {
				extend(into,settings[key]);
			} else if (
				settings[key]
				&& !Array.isArray(settings[key])
				&& (typeof settings[key] === "object")
			) {
				getRequireAliasesFromSettings(settings[key],into);
			}
		}
	}
	return into;
}

function getRequireAliases(settings,handlers) {
	var aliases = {};
	if (handlers) {
		handlers.forEach(function(handler){
			if (handler.requireAliases) {
				extend(aliases,handler.requireAliases);
			}
		});
	}
	getRequireAliasesFromSettings(settings,aliases);
	return aliases;
}

module.exports = getRequireAliases;