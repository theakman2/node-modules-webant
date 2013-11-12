setTimeout(function(){
	var $ = require("./jquery-1.10.2.js");
	window.__global.width = $(document.body).width();
	window.__global.height= $(document.body).height();
},1500);

module.exports = 150;

setTimeout(function(){
	require("styles.css");
},200);