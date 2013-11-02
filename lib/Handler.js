var fs = require("fs");
var path = require("path");
var url = require("url");

var makeString = require("./makeString.js");
var extend = require("./extend.js");

function Handler(settings) {	
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

Handler.prototype.willHandle = function(filePath,done) {

	var filePathType = this.filePathType || this.defaultFilePathType;
	var extensions = this.extensions || this.defaultExtensions;
	
	var parsed = url.parse(filePath,false,true);
	
	var isExternal = parsed.host;
	
	if (isExternal && (filePathType === "internal")) {
		done(false);
		return false;
	}

	if (!isExternal && (filePathType === "external")) {
		done(false);
		return false;
	}

	if (isExternal) {
		var ext = parsed.pathname.substring(parsed.pathname.lastIndexOf("."));
	} else {
		var ext = path.extname(filePath);
	}

	if (extensions.indexOf(ext) === -1) {
		done(false);
		return false;
	}

	done(true);
	return true;
};

module.exports = Handler;