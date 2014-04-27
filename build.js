/**
 * Simple build script for this module.
 * At the moment, this just pre-compiles the templates in `lib/public/src`.
 * @todo Switch to grunt if this gets any more complicated.
 */

var fs = require("fs");

var mtmpl = require("mtmpl");
var uglify = require("uglify-js");

var bootstrapSrcFilePath = __dirname+"/lib/public/src/bootstrap.mtmpl";
var content = fs.readFileSync(bootstrapSrcFilePath).toString();
var precompiled = mtmpl.precompile(content);

fs.writeFileSync(__dirname+"/lib/public/dist/bootstrap.js","module.exports = " + precompiled);