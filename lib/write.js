var fs = require("fs-extra");
var async = require("async");

function write(data,outputBase,callback) {
	function writeItem(item,done) {
		fs.outputFile(outputBase+item.chunkId+".js",item.content,done);
	}
	
	async.each(data,writeItem,callback);
}

module.exports = write;