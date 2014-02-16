var fs = require("fs");

module.exports = {
	extensions:[".js"],
	handle:function(filePath,done){
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,c.toString());
		});
	}
};