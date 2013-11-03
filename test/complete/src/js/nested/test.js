require('../../scss/2.scss');
require('../../scss/3.less');
require('../../scss/4.styl');
this.foo = function() {
	return "foo";
};

require(["../../views/1.hbs","../../views/1.hbs"],function(tmpl1,tmpl2){
	console.log("I'm a fool!");
});

module.exports.bar = function() {
	return "bar";
};

exports.tmpl = null;