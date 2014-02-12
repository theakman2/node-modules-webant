var webantTester = require("../lib/webant.js");

webantTester("kitchensink",4,{},function(obj,data,done){
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