var test = require("nested/test.js");

//=>require ../scss/1.css

var sink = require("./nested/kitchensink.js");

//=>require //cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore.js

__global.foo = test.foo();
__global.bar = test.bar();
__global.tmpl = test.tmpl({name:"Alan"});
__global.data = require("../data/test.json");
__global.text = sink.text;
__global.html = sink.html;