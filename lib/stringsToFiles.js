var fs = require("fs-extra");
var async = require("async");

function destPathToFilePath(destPath,id) {
	return destPath.split("%ID%").map(function(str,i){
		if (i > 0) {
			return id+str;
		}
		return str;
	}).join("");
}

function stringsToFiles(data,destPath,callback) {
	function writeItem(item,done) {
		fs.outputFile(
			destPathToFilePath(destPath,item.chunkId),
			item.content,
			done
		);
	}
	
	async.each(data,writeItem,callback);
}

module.exports = stringsToFiles;