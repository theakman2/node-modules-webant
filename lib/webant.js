var parseConfig = require("./parseConfig.js");
var getRequireTree = require("./getRequireTree.js");
var chunkRequireTree = require("./chunkRequireTree.js");
var writeChunks = require("./writeChunks.js");

function noop() {}

function webant(config,callback) {
	var settings;
	
	try {
		settings = webant.parseConfig(config);
	} catch(e) {
		callback(e);
		return;
	}
	
	webant.getRequireTree(settings.entry,settings,function(err,tree){
		var map = {};
		var chunks = webant.chunkRequireTree(tree,map);
		webant.writeChunks(chunks,settings,map,callback);
	});
}
webant.parseConfig = parseConfig;
webant.getRequireTree = getRequireTree;
webant.chunkRequireTree = chunkRequireTree;
webant.writeChunks = writeChunks;

module.exports = webant;