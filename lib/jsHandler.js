var fs = require("fs");
var path = require("path");
var url = require("url");

module.exports = {
	defaultSettings:{},
	willHandle:function(filePath,settings){
		if (url.parse(filePath,false,true).host) {
			return false;
		}
		if (filePath.indexOf("@@") === 0) {
			return false;
		}
		if (path.extname(filePath) !== ".js") {
			return false;
		}
		return true;
	},
	handle:function(filePath,settings,done){
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,c.toString());
		});
	}
};