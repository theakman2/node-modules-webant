window.__global = {};

var a = require("a.js");

window.__global.aMsg = a;
window.__global.tmpl1 = require("tmpl1.hbs")({message:"EIGHT"});

var $ = require("jquery-1.10.2.js");
$(document).ready(function(){
	window.__global.height = $("body").first().height();
	window.__global.width = $("body").first().width();
});