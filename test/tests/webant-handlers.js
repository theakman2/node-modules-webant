var webantTester = require("../lib/webant.js");

webantTester("handlers",1,{handlers:[{
	aliases:{
		baz:"a"
	},
	extensions:[".rand"],
	handle:function(filePath,done) {
		done(null,"module.exports = 'foo!';")
	}
},"text",{
	aliases:{
		webantVar:"b.txt"
	}
}]},function(obj,data,done){
	data.t.equivalent(obj,{a:"foo!",b:"I'm a text file!"});
	done();
});