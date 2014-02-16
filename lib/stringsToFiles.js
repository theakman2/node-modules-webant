var fs = require("fs-extra");
var async = require("async");

function writeItem(item,done) {
	fs.outputFile(item.filePath,item.content,done);
}

function stringsToFiles(data,callback) {	
	async.each(data,writeItem,callback);
}

module.exports = stringsToFiles;