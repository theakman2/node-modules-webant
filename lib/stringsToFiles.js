var fs = require("fs-extra");
var async = require("async");

function stringsToFiles(data,callback) {
	function writeItem(item,done) {
		fs.outputFile(
			item.filePath,
			item.content,
			done
		);
	}
	
	async.each(data,writeItem,callback);
}

module.exports = stringsToFiles;