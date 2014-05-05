var parseConfig = require("./parseConfig.js");
var getRequireTree = require("./getRequireTree.js");
var chunkRequireTree = require("./chunkRequireTree.js");
var stringifyChunks = require("./stringifyChunks.js");
var write = require("./write.js");

function webant(config,callback) {
	var settings;
	
	try {
		settings = webant.parseConfig(config);
	} catch(e) {
		callback(e);
		return;
	}
	
	webant.getRequireTree(settings.entry,settings,function(err,tree){
		var chunks = webant.chunkRequireTree(tree,settings.urlDest,settings.dest);
		webant.write(stringifyChunks(chunks,settings),callback);
	});
}
webant.parseConfig = parseConfig;
webant.getRequireTree = getRequireTree;
webant.chunkRequireTree = chunkRequireTree;
webant.stringifyChunks = stringifyChunks;
webant.write = write;

module.exports = webant;