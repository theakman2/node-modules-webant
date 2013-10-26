var path = require("path");

var fs = require("fs-extra");
var async = require("async");
var handlebars = require("handlebars");

function write(data,output,callback) {
	var tasks = {};
	
	if (output.jsDestPath) {
		tasks.outputJs = function(cb){
			fs.outputFile(output.jsDestPath,data.internalJs,cb);
		};
	}
	
	if (output.cssDestPath) {
		tasks.outputCss = function(cb){
			fs.outputFile(output.cssDestPath,data.internalCss,cb);
		};
	}
	
	if (output.htmlDestPath && (output.htmlEntryContent || output.htmlDestPath)) {
		if (output.htmlEntryContent) {
			tasks.getHtmlEntryContent = function(cb) {
				cb(null,output.htmlEntryContent);
			};
		} else {
			tasks.getHtmlEntryContent = function(cb) {
				fs.readFile(output.htmlEntryPath,function(err,contents){
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
			
			if (output.cssDestPath) {
				relCssPath = path.relative(
					path.dirname(output.htmlDestPath),
					output.cssDestPath
				).replace(/\\/g,"/");
			}
			
			if (output.jsDestPath) {
				relJsPath = path.relative(
					path.dirname(output.htmlDestPath),
					output.jsDestPath
				).replace(/\\/g,"/");
			}
			
			fs.outputFile(
				output.htmlDestPath,
				(handlebars.compile(results.getHtmlEntryContent))({
					internalJs:data.internalJs,
					internalCss:data.internalCss,
					externalJs:data.externalJs,
					externalCss:data.externalCss,
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