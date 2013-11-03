// require some text
var text = require("../../data/plain.txt");

// require some html
var html = require("../../data/snippetof.html");

require("../_lib/handlebars.runtime.js",function(Handlebars){
	console.log(Handlebars);
});

module.exports.text = text;
module.exports.html = html;