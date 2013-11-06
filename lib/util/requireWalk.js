var uglify = require("uglify-js");

function requireWalk(ast,callback) {
	ast.walk(new uglify.TreeWalker(function(node){
		if (
			(node instanceof uglify.AST_Call)
			&& (node.expression.name === "require")
			&& node.args.length
			&& (node.args[0] instanceof uglify.AST_String || node.args[0] instanceof uglify.AST_Array)
		) {
			var type = node.args.length === 1 ? "sync" : "async";
			if (node.args[0] instanceof uglify.AST_Array) {
				for (var i = 0; i < node.args[0].elements.length; i++) {
					if (node.args[0].elements[i] instanceof uglify.AST_String) {
						for (var i = 0; i < node.args[0].elements.length; i++) {
							callback(node.args[0].elements[i],type,node.args[0].elements,i);
						}
					}
				}
			} else {
				callback(node.args[0],type,node.args,0);
			}
		}
	}));
}

module.exports = requireWalk;