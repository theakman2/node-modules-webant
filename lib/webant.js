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
	
	rawToAsts(settings,function(err1,data1){
		if (err1) {
			callback(err1);
			return;
		}
		astsToStrings(data1,settings,function(err2,data2){
			if (err2) {
				callback(err2);
				return;
			}
			stringsToFiles(data2,settings.destPath,callback);
		});
	});
}

module.exports = webant;