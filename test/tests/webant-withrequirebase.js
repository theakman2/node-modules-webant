var path = require("path");

var webantTester = require("../lib/webant.js");

var requireBase = path.join(__dirname,"..","webant","withrequirebase","src");

webantTester("withrequirebase",1,{requireBase:requireBase},function(obj,data,done){
	data.t.equivalent(obj,{a:"AA",b:"BB",c:"CC"});
	done();
});