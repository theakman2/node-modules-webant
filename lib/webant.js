var getConfig = require("./getConfig.js");
var rawToAsts = require("./rawToAsts.js");
var astsToStrings = require("./astsToStrings.js");
var stringsToFiles = require("./stringsToFiles.js");

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
	
	rawToAsts(settings,function(err,data){
		if (err) {
			callback(err);
			return;
		}
		astsToStrings(data,settings,function(err,data){
			if (err) {
				callback(err);
				return;
			}
			stringsToFiles(data,settings.destPath,callback);
		});
	});
}

module.exports = webant;