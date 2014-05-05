var fs = require("fs-extra");
var async = require("async");

function noop() {}

function writeItem(item,done) {
	fs.outputFile(item.filePath,item.content,done);
}

function Writer(webant) {
	this.webant = webant;
}

Writer.prototype.write = function(data,callback) {
	var _this = this;
	callback = callback || noop;
	async.each(data,writeItem,function(err){
		if (err) {
			callback(err);
		} else {
			callback(null,data);
		}
	});
};

module.exports = Writer;