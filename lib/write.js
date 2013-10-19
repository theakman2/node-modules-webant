var path = require("path");

var fs = require("fs-extra");
var async = require("async");
var handlebars = require("handlebars");

function write(settings,callback) {
	var tasks = {};
	
	if (settings.jsDestPath) {
		tasks.outputJs = function(cb){
			fs.outputFile(settings.jsDestPath,settings.internalJs,cb);
		};
	}
	
	if (settings.cssDestPath) {
		tasks.outputCss = function(cb){
			fs.outputFile(settings.cssDestPath,settings.internalCss,cb);
		};
	}
	
	if (settings.htmlDestPath && (settings.htmlEntryContent || settings.htmlDestPath)) {
		if (settings.htmlEntryContent) {
			tasks.getHtmlEntryContent = function(cb) {
				cb(null,settings.htmlEntryContent);
			};
		} else {
			tasks.getHtmlEntryContent = function(cb) {
				fs.readFile(settings.htmlEntryPath,function(err,contents){
					if (err) {
						cb(err);
						return;
					}
					cb(null,contents.toString());
					return;
				});
			};
		}
		
		tasks.outputHtml = ["getHtmlEntryContent",function(cb,results){
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
				(handlebars.compile(results.getHtmlEntryContent))({
					internalJs:settings.internalJs,
					internalCss:settings.internalCss,
					externalJs:settings.externalJs,
					externalCss:settings.externalCss,
					relJsPath:relJsPath,
					relCssPath:relCssPath
				}),
				cb
			);
		}];
	}
	
	async.auto(tasks,callback);
}

module.exports = write;