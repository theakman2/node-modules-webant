var uglify = require("uglify-js");

function requireWalk(ast,callback) {
	ast.walk(new uglify.TreeWalker(function(node){
		if ((node instanceof uglify.AST_Call) && (node.expression.name === "require")) {
			var loc = "file: " + node.start.file
				+ "; line: " + node.start.line
				+ "; col: " + node.start.col;
			
			if (!node.args.length) {
				throw new Error("'require' called without arguments. First argument must " +
						"be a string literal or an array of string literals. Location: " + loc);
			}
			
			if (
				!(node.args[0] instanceof uglify.AST_String)
				&& !(node.args[0] instanceof uglify.AST_Array)
			) {
				throw new Error("First argument of 'require' function call not a string literal " +
						"or an array of string literals. Location: " + loc);
			}
			
			if (node.args[0] instanceof uglify.AST_Array) {
				if (!node.args[0].elements.length) {
					throw new Error("First argument of 'require' function call is an empty " +
							"array. Must be a string literal or an array of string literals. " +
							"Location: " + loc);
				}
				for (var i = 0; i < node.args[0].elements.length; i++) {
					if (!(node.args[0].elements[i] instanceof uglify.AST_String)) {
						throw new Error("First argument of 'require' function call is an array " +
								"where index " + i + " is not a string literal. First argument of " +
								"'require' call must be a string literal or an array of string " +
								"literals. Location " + loc);
					}
				}
			}
			
			var type = node.args.length === 1 ? "sync" : "async";
			if (node.args[0] instanceof uglify.AST_Array) {
				for (var i = 0; i < node.args[0].elements.length; i++) {
					callback(node.args[0].elements,i,type);
				}
			} else {
				callback(node.args,0,type);
			}
		}
	}));
}

module.exports = requireWalk;