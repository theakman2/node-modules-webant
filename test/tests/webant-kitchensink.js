var path = require("path");

var webantTester = require("../lib/webant.js");

webantTester("kitchensink",["f.js","main.js","main1.js","main2.js"],{
	files:[{
		entry:path.join(__dirname,"..","webant","kitchensink","src","foo","f.js"),
		dest:path.join(__dirname,"..","webant","kitchensink","build","js","f.js"),
		urlDest:"js/f.js"
	}]
},function(obj,data,done){
	data.t.equivalent(obj,{
		main:{
			a:"a done",
			b:"b done",
			more:["ccce done","d done"]
		},
		a:"aaag done",
		c:"ccffg done",
		e:"ffg doneeee",
		g:"h doneggg1.1.0"
	});
	done();
});