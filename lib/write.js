var fs = require("fs-extra");
var async = require("async");

var stringifyChunks = require("./stringifyChunks.js");

function noop() {}

function writeItem(item,done) {
	fs.outputFile(item.filePath,item.content,done);
}

function write(data,callback) {
	callback = callback || noop;
	async.each(data,writeItem,function(err){
		if (err) {
			callback(err);
		} else {
			callback(null,data);
		}
	});
}

module.exports = write;