var fs = require("fs");
var path = require("path");

var uglify = require("uglify-js");

function getRequires(contents) {
	var parsed = uglify.parse(contents);
	
	var requires = [];
	
	var walker = new uglify.TreeWalker(function(node){
		var v;
		
		if (
			node.start.comments_before
			&& node.start.comments_before.length
		) {
			node.start.comments_before.forEach(function(comment){
				if (comment.type == "comment1") {
					if (comment.value.indexOf("=>require") === 0) {
						var data = comment.value.substring(9).trim();
						if (requires.indexOf(data) === -1) {
							requires.push(data);
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
			requires.push(v);
		}
		
	});
	
	parsed.walk(walker);
	
	return requires;
}

module.exports = getRequires;