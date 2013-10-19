var path = require("path");

var fs = require("fs-extra");
var async = require("async");
var handlebars = require("handlebars");

function write(settings,callback) {
	var tasks = [];
	
	if (settings.jsDestPath) {
		tasks.push(function(cb){
			fs.outputFile(settings.jsDestPath,settings.internalJs,cb);
		});
	}
	
	if (settings.cssDestPath) {
		tasks.push(function(cb){
			fs.outputFile(settings.cssDestPath,settings.internalCss,cb);
		});
	}
	
	if (settings.htmlEntryContent && settings.htmlDestPath) {
		tasks.push(function(cb){
			var relCssPath = "";
			var relJsPath = "";
			
			if (settings.cssDestPath) {
				relCssPath = path.relative(
					path.dirname(settings.htmlDestPath),
					settings.cssDestPath
				).replace(/\\/g,"/");
			}
			
			if (settings.jsDestPath) {
				relJsPath = path.relative(
					path.dirname(settings.htmlDestPath),
					settings.jsDestPath
				).replace("/\\/g","/");
			}
			
			fs.outputFile(
				settings.htmlDestPath,
				(handlebars.compile(settings.htmlEntryContent))({
					internalJs:settings.internalJs,
					internalCss:settings.internalCss,
					externalJs:settings.externalJs,
					externalCss:settings.externalCss,
					relJsPath:relJsPath,
					relCssPath:relCssPath
				}),
				cb
			);
		});
	}
	
	async.parallel(tasks,callback);
}

module.exports = write;