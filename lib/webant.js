var validateConfig = require("./validateConfig.js");
var getConfig = require("./getConfig.js");
var getHandlers = require("./getHandlers.js");
var getRequireAliases = require("./getRequireAliases.js");
var Requirements = require("./Requirements.js");
var Parser = require("./Parser.js");
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
	
	writeStream.write("Configuration validated.\n");
	
	var settings = getConfig(config);
	
	writeStream.write("Configuration processing complete.\n");
	
	var handlers = getHandlers(settings.handlers);
	
	writeStream.write("Handlers successfully retrieved.\n");
	
	var requireAliases = getRequireAliases(settings,handlers);
	
	writeStream.write("Require aliases successfully retrieved.\n");
	
	var requirements = new Requirements();
	
	var parser = new Parser(handlers,requireAliases,requirements);
	
	parser.parse({type:"internalJs",filePath:settings.jsEntryPath},function(err){
		if (err) {
			writeStream.write(err.toString());
			callback(err);
			return;
		}
		
		writeStream.write("Entry script successfully parsed.\n");
		
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
				writeStream.write("Compilation successful.\n");
				callback(null);
			}
		);
	});
}

webant({
	jsEntryPath:"%%base%%/test/playground/main.js",
	jsDestPath:"%%base%%/test/playground/OUT.JS"
},process.stdout);

module.exports = webant;