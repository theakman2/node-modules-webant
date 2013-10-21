var HandlerBase = require("./Handler.js");

function createHandler(Handler,settings) {
	var handlerBase = new HandlerBase(settings);
	
	Handler.prototype = handlerBase;
	Handler.prototype.constructor = Handler;
	
	return new Handler();
}

function getHandlers(handlerObj) {
	var handlers = [];
	for (var key in handlerObj) {
		if (handlerObj.hasOwnProperty(key)) {
			var Handler;
			try {
				Handler = require("webant-handler-"+key);
			} catch(e) {
				if (e.code !== "MODULE_NOT_FOUND") {
					throw e;
				}
				throw new Error("Handler '"+key+"' not found. " +
						"Are you sure the package 'webant-handler-"+key+"' is installed?");
			}
			handlers.push(createHandler(Handler,handlerObj[key]));
		}
	}
	return handlers;
}

module.exports = getHandlers;