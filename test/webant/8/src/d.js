require("styles2.styl");

module.exports.message = "test";

var $ = require("jquery-1.10.2.js");
$(document).ready(function(){
	window.__global.height = $("body").first().height();
	window.__global.width = $("body").first().width();
});