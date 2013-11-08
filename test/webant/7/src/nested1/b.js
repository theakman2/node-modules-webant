module.exports.num = 20;

module.exports.foo = function(cb){
	require(["../nested2/nested2a/d.js","f.js"],function(d,f){
		cb(d,f);
	});	
};

require("styles.scss");