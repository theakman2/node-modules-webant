var test = require("nested/test.js");

require('../scss/1.css');

var sink = require("./nested/kitchensink.js");

var __global = {};

__global.foo = test.foo();
__global.bar = test.bar();
__global.data = require("../data/test.json");
__global.text = sink.text;
__global.html = sink.html;

console.debug(__global);