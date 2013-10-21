//=>require ../../scss/2.scss
//=>require ../../scss/3.less
//=>require ../../scss/4.styl

this.foo = function() {
	return "foo";
};

var template = require("../../views/1.hbs");

module.exports.bar = function() {
	return "bar";
};

exports.tmpl = template;