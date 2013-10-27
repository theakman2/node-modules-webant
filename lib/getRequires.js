var fs = require("fs");
var path = require("path");

var uglify = require("uglify-js");

function getRequires(contents) {
	// fix so that uglify-js recognises comments at the end of a file
	contents += "\n'';\n";
	
	var parsed = uglify.parse(contents);
	
	var requires = [];
	
	var commentsProcessed = [];
	
	var walker = new uglify.TreeWalker(function(node){
		var v;
		
		if (
			node.start.comments_before
			&& node.start.comments_before.length
		) {
			node.start.comments_before.forEach(function(comment){
				if ((commentsProcessed.indexOf(comment) === -1) && (comment.type === "comment1")) {
					commentsProcessed.push(comment);
					if (comment.value.indexOf("=>require") === 0) {
						var data = comment.value.substring(9).trim();
						if (requires.indexOf(data) === -1) {
							requires.push({
								type:"comment",
								literal:data
							});
						}
					}
				}
			});
		}

		if (
			(node instanceof uglify.AST_Call)
			&& (node.expression.name === "require")
			&& node.args.length
			&& (v = node.args[0].value)
			&& (requires.indexOf(v) === -1)
		) {
			requires.push({
				type:"function",
				literal:v
			});
		}
		
	});
	
	parsed.walk(walker);
	
	return requires;
}

module.exports = getRequires;