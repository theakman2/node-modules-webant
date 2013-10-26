var getConfig = require("./getConfig.js");
var parse = require("./parse.js");
var write = require("./write.js");

function webant(config,callback) {	
	if (typeof callback !== "function") {
		callback = function(){};
	}
	
	if (!config.jsEntryPath) {
		callback("Path to entry script not defined.");
		return;
	}
	
	var settings = getConfig(config);
	
	parse(settings,function(err,data){
		if (err) {
			callback(err);
			return;
		}
		
		write(data,settings,callback);
	});
}

webant.parse = parse;
webant.write = write;

module.exports = webant;