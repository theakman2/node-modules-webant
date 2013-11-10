require("d.js",function(d){
	window.__global.dMsg = d.message;
});

module.exports = require("./tmpl2.hbs")({message:"TWO"});