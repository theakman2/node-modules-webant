window.__global = {};

var a = require("a.js");

window.__global.aMsg = a;
window.__global.tmpl1 = require("tmpl1.hbs")({message:"EIGHT"});