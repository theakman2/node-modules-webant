var getConfig = require("./getConfig.js");
var parse = require("./parse.js");
var write = require("./write.js");

function webant(config,callback) {	
	if (typeof callback !== "function") {
		callback = function(){};
	}
	
	var settings;
	
	try {
		settings = getConfig(config);
	} catch(e) {
		callback(e);
		return;
	}
	
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