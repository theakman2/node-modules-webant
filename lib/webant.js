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
		var numModules = 0;
		for (var i = 0; i < data.length; i++) {
			numModules += Object.keys(data[i]).length;
		}
		astsToStrings(data,settings,function(err,data){
			if (err) {
				callback(err);
				return;
			}
			var numFiles = Object.keys(data).length;
			stringsToFiles(data,function(err){
				if (err) {
					callback(err);
					return;
				}
				callback(null,{
					numModules:numModules,
					numFiles:numFiles
				});
			});
		});
	});
}

module.exports = webant;