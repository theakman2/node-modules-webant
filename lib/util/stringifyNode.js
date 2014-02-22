var uglify = require("uglify-js");

function stringifyNode(node, postProcess) {
	postProcess = postProcess || "none";
	
	switch (postProcess) {
		case "none":
			return node.ast.print_to_string({
				comments : true,
				beautify : true,
				bracketize : true,
				semicolons : true
			});
			break;
		case "debug":
			var lines = {};
			
			var walker = new uglify.TreeWalker(function(n) {
				if (!(n.start && (typeof n.start === "object"))) {
					n.start = {};
				}
				
				if (!n.start.hasOwnProperty("comments_before")) {
					n.start.comments_before = [];
				}
				
				if (n.start.line && !lines.hasOwnProperty(n.start.line)) {
					lines[n.start.line] = true;
					n.start.comments_before.push({
						value : node.filePath + ": " + n.start.line,
						type : 'comment1'
					});
				}
			});
			
			node.ast.walk(walker);
			
			return node.ast.print_to_string({
				comments : true,
				beautify : true,
				bracketize : true,
				semicolons : true
			});
			
			break;
		case "compress":
			node.ast.figure_out_scope();
			var compressed = node.ast.transform(uglify.Compressor());
			compressed.figure_out_scope();
			compressed.compute_char_frequency();
			compressed.mangle_names({
				except : [ "require", "module", "exports" ]
			});
			return compressed.print_to_string();
			break;
	}
}

module.exports = stringifyNode;