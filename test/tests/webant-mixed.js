var webantTester = require("../lib/webant.js");

webantTester("mixed",4,{},function(obj,data,done){
	data.t.equivalent(obj,{
		main:{
			a:"a done",
			b:"b done",
			more:["ccce done","d done"]
		},
		a:"aaag done",
		c:"ccffg done",
		e:"ffg doneeee",
		g:"h donegggi done"
	});
	done();
});