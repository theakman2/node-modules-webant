# node-modules-webant

_Bringing CommonJS-style requires to the browser and more._

__Require javascript__

````javascript
// path/to/foo.js
module.exports.sayHello = function() {
    alert("Hello!");
};
````

````javascript
var foo = require("./path/to/foo.js");
foo.sayHello(); // alerts "Hello!"
````

__Require javascript asynchronously__

````javascript
require("./path/to/foo.js",function(foo){
    foo.sayHello();
});
````

__Require multiple javascripts asynchronously__

````javascript
require(["./path/to/foo.js","./path/to/bar.js"],function(foo,bar){
    foo.sayHello();
    bar.sayGoodbye();
});
````

__Require HTML, CSS, handlebars templates, JSON, stylus, LESS, SCSS...__

````javascript
require("../path/to/styles.css"); // <style> tag injected into the DOM
var tmpl = require("../path/to/handlebars/template.hbs");
var html = tmpl({name:"Alan"});
var json = require("data.json"); // JSON file parsed as javascript object 
alert(json.foo);
````

__Require files synchronously and asynchronously__

````javascript
require("../styles.scss");
if (rareCondition) {
    require(["path/to/huge/library.js","./template.hbs"],function(lib,tmpl){
        lib.doSomething();
        var html = tmpl({foo:"bar"});
        var data = require("../the/data.json");
        console.log(data.aKey);
    });
}
````

## Installation

    $ npm install webant -g

## Usage

### Command line

```
Usage:
  webant --useConfig [options]
  webant --useConfig [path to config file] [options]
  webant --entry [path to entry script] [options]

Options:
  --entry, -e        Path to entry script relative to current directory.
                     [Required, unless --useConfig flag is set].
  --dest, -d         Path to where compiled output will be written.
  --urlDest, -u      URL at which the path specified for '--dest' can be
                     reached.
  --postProcess, -p  Post-processing to apply to compiled javascript. Can be
                     either 'compress' (compresses output), 'debug' (adds file
                     and line numbers to output) or 'none' (no post-processing).

  --handlers, -H     Additional handlers to use. Can be set multiple times.
                     Example: -H coffee -H scss -H json
  --useConfig, -c    Path to a JSON configuration file which sets default
                     options. If this option is set but no path is provided,
                     the path is assumed to be './webant-config.json'.
                     [Required, unless --entry option is provided]. [Additional
                     options override those found in the configuration file].
  --version, -v      Show version.
  --help, -h         Show help.
```

Example:

    $ webant --entry src/js/main.js --dest build/js/main.js --urlDest http://mysite.com/assets/js/main.js
    
### Configuration file settings

If you pass the `--useConfig` option via the CLI, webant will assume the configuration file is a JSON file which looks like this:

```json
{
    "entry":"path/to/entry.js",
    "dest":"path/to/build.js",
    "urlDest":"http://mysite.com/assets/build.js",
    "postProcess":"compress",
    "handlers":["coffee","otherCustomHandler"]
}
```

The keys are the same as those provided by the CLI, except paths are relative to the configuration file as opposed to the current working directory.

### Programmatically

Install webant locally:

    $ npm install webant

Then use webant as follows:

````javascript
var webant = require("webant");

webant(opts,function(err){
    if (err) {
        // webant has encountered an error
    } else {
        // webant has written the compiled javascript successfully
    }
});
````

The `opts` parameter is an object that takes the same keys as the JSON configuration file mentioned above.

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant)

    Ensure [phantomjs](http://phantomjs.org) is installed and in your PATH, then run:

    $ npm test

## Acknowledgements

__[medikoo](https://github.com/medikoo), creator of [webmake](https://github.com/medikoo/modules-webmake)__

For the inspiration behind this module.

__[mishoo](https://github.com/mishoo), creator of [UglifyJS2](https://github.com/mishoo/UglifyJS2)__

The excellent javascript parser, minifier, compressor and beautifier that webant depends on for much of its functionality.
