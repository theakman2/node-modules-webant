require(["jquery-1.11.0.min.js","../../nested/morenesting/backbone.js"],function($,B){
	window.__global.g = $("#foo").html() + "ggg" + B.VERSION;
});

module.exports = "g done";