var fs = require("fs");
var path = require("path");
var url = require("url");

var makeString = require("./makeString.js");
var extend = require("./extend.js");

function Handler(settings) {
	Object.defineProperty(this,"defaultRequireTypes",{
		value:["function"],
		writable:false,
		configurable:false,
		enumerable:false
	});
	
	Object.defineProperty(this,"defaultFilePathType",{
		value:"internal",
		writable:false,
		configurable:false,
		enumerable:false
	});
	
	Object.defineProperty(this,"defaultExtensions",{
		value:undefined,
		writable:false,
		configurable:false,
		enumerable:false
	});
	
	this.settings = settings;
}

Handler.prototype.makeString = makeString;

Handler.prototype.willHandle = function(data,done) {
	var requireTypes = this.requireTypes || this.defaultRequireTypes;
	var filePathType = this.filePathType || this.defaultFilePathType;
	var extensions = this.extensions || this.defaultExtensions;
	
	if (data.requireType && (requireTypes.indexOf(data.requireType) === -1)) {
		done(null,false);
		return false;
	}
	
	var parsed = url.parse(data.filePath,false,true);
	
	var isExternal = parsed.host;
	
	if (isExternal && (filePathType === "internal")) {
		done(null,false);
		return false;
	}
	
	if (!isExternal && (filePathType === "external")) {
		done(null,false);
		return false;
	}
	
	if (isExternal) {
		var ext = parsed.pathname.substring(parsed.pathname.lastIndexOf("."));
	} else {
		var ext = path.extname(data.filePath);
	}
	
	if (extensions.indexOf(ext) === -1) {
		done(null,false);
		return false;
	}
	
	done(null,true);
	return true;
};

Handler.prototype.handle = function(data,update,done) {
	var self = this;
	var filePathType = this.filePathType || this.defaultFilePathType;
	if (filePathType === "internal") {
		fs.readFile(data.filePath,function(err,contents){
			if (err) {
				done(err);
				return;
			}
			var newData = extend({content:contents.toString()},data);
			self.go(newData,update,done);
		});
	} else {
		this.go(data,update,done);
	}
};

module.exports = Handler;