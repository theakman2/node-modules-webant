var validateConfig = require("./validateConfig.js");
var getConfig = require("./getConfig.js");
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
	
	writeStream.write("Configuration validated.\n");
	
	var settings = getConfig(config);
	
	writeStream.write("Configuration processing complete.\n");
	
	parse(settings,function(err,data){
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
				internalJs:data.internalJs,
				internalCss:data.internalCss,
				externalJs:data.externalJs,
				externalCss:data.externalCss
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

Object.defineProperty(webant,"parse",{
	value:parse,
	writable:false,
	configurable:false,
	enumerable:true
});

module.exports = webant;