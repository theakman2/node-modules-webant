var validateConfig = require("./validateConfig.js");
var getConfig = require("./getConfig.js");
var getHandlers = require("./getHandlers.js");
var Requirements = require("./requirements.js");
var parse = require("./parse.js");
var write = require("./write.js");

function webant(config,writeStream,callback) {
	if (!writeStream) {
		writeStream = {
			write:function(){},
			end:function(){}
		};
	}
	
	if (!callback) {
		callback = function(){};
	}
	
	validateConfig(config);
	var settings = getConfig(config);
	var handlers = getHandlers(settings.handlers);
	var requirements = new Requirements();
	
	parse({type:"internalJs",filePath:settings.jsEntryPath},handlers,requirements,function(err){
		if (err) {
			writeStream.write(err.toString());
			callback(err);
			return;
		}
		write(
			{
				jsDestPath:settings.jsDestPath,
				cssDestPath:settings.cssDestPath,
				htmlEntryPath:settings.htmlEntryPath,
				htmlDestPath:settings.htmlDestPath,
				internalJs:requirements.getInternalJs(),
				internalCss:requirements.getInternalCss(),
				externalJs:requirements.getExternalJs(),
				externalCss:requirements.getExternalCss()
			},
			function(err){
				if (err) {
					writeStream.write(err.toString());
					callback(err);
					return;
				}
				writeStream.write("Compilation successful.");
				callback(null);
			}
		);
	});
}

module.exports = webant;