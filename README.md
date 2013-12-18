# node-modules-webant

_Bringing CommonJS-style requires to the browser and more._

__Require javascript__

````javascript
/**
 * path/to/foo.js
 * Export a simple function
 */
module.exports.sayHello = function() {
    alert("Hello!");
};
````

````javascript
/**
 * 'foo' contains the exports from ./path/to/foo.js
 */
var foo = require("./path/to/foo.js");
foo.sayHello(); // alerts "Hello!"
````

__Require javascript asynchronously__

````javascript
/**
 * 'foo' contains the exports from ./path/to/foo.js
 * Webant also attempts to place './path/to/foo.js' in a separate file and load it only when necessary.
 */
require("./path/to/foo.js",function(foo){
    foo.sayHello();
});
````

__Require multiple javascripts asynchronously__

````javascript
/**
 * 'foo' and 'bar' contain the exports from ./path/to/foo.js and ./path/to/bar.js respectively
 */
require(["./path/to/foo.js","./path/to/bar.js"],function(foo,bar){
    foo.sayHello();
    bar.sayGoodbye();
});
````

__Require HTML, CSS, handlebars templates, JSON, stylus, LESS, SCSS...__

````javascript
/**
 * A <style> tag is automatically injected into the DOM and populated with the contents from ../path/to/styles.css
 */
require("../path/to/styles.css");

/**
 * 'tmpl' is a pre-compiled Handlebars template ready to be passed a data object.
 */
var tmpl = require("../path/to/handlebars/template.hbs");

/**
 * 'html' is now a string
 */
var html = tmpl({name:"Alan"});

/**
 * 'json' now contains the contents of 'data.json' parsed as a javascript object
 */
var json = require("data.json");
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
  --entry, -e             Path to entry script relative to current directory.
                          [Required, unless --useConfig flag is set].
  --dest, -d              Path to where compiled output will be written.
  --urlDest, -u           URL at which the path specified for '--dest' can be
                          reached.
  --postProcess, -p       Post-processing to apply to compiled javascript. Can
                          be either 'compress' (compresses output), 'debug'
                          (adds file and line numbers to output) or 'none' (no
                          post-processing).
  --requireBase, -r       Resolve require paths relative to the supplied
                          directory instead of relative to the file containing
                          the require.
  --defaultExtension, -D  Default extension to append to a require path when no
                          extension is provided.
  --handlers, -H          Additional handlers to use. Can be set multiple
                          times. Example: -H coffee -H scss -H json
  --useConfig, -c         Path to a JSON configuration file which sets default
                          options. If this option is set but no path is
                          provided, the path is assumed to be
                          './webant-config.json'. [Required, unless --entry
                          option is provided]. [Additional options override
                          those found in the configuration file].
  --version, -v           Show version.
  --help, -h              Show help.
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
    "requireBase":"",
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

webant(opts,function(err,data){
    if (err) {
        // webant has encountered an error
    } else {
        // webant has written the compiled javascript successfully
        console.log(data.numModules + " modules encountered and " + data.numFiles + " files were written.");
    }
});
````

The `opts` parameter is an object that takes the same keys as the JSON configuration file mentioned above.

## Handlers

Handlers are NodeJS modules which take care of requiring different types of files. For example, webant has a built in CSS handler that makes it possible to require CSS files.

A number of handlers are built in to webant:

* [CSS](https://github.com/theakman2/node-modules-webant-handler-css)
* [Handlebars](https://github.com/theakman2/node-modules-webant-handler-hbs)
* [JavaScript](https://github.com/theakman2/node-modules-webant-handler-js)
* [JSON](https://github.com/theakman2/node-modules-webant-handler-json)
* [LESS](https://github.com/theakman2/node-modules-webant-handler-less)
* [Micro-templates](https://github.com/theakman2/node-modules-webant-handler-mtmpl)
* [SASS/SCSS](https://github.com/theakman2/node-modules-webant-handler-scss)
* [Stylus](https://github.com/theakman2/node-modules-webant-handler-stylus)
* [Text](https://github.com/theakman2/node-modules-webant-handler-text)

## Why webant?

There are already plenty of NodeJS modules available such as [webpack](https://github.com/webpack/webpack), [webmake](https://github.com/medikoo/modules-webmake) and [browserify](https://github.com/substack/node-browserify) that bundle javascript files for the web. Why another one? 

### Synchronous and asynchronous

Unlike webmake (v0.3) and browserify (v2.35), webant permits the use of both synchronous `require` calls (`var foo = require('foo.js');`) and asynchronous `require` calls (`require('foo.js',function(foo) { /* do something with foo */ });`).

When you `require` a module asynchronously, webant intelligently tries to include the module in a separate file so it isn't included in the initial javascript loaded on the page - perfect for large modules that are only infrequently needed.

### Simple to use

Webpack (v0.11) is a web bundling module with a lot of options and features. This makes the module very powerful, but also makes it difficult to learn.

Webant intentionally tries to keep things simple - the only variables webant introduces into your javascript code are `require`, `module` and `exports`, and these should be used in just the same way as they're used in NodeJS modules. The only exception is that webant augments the `require` function to allow for asynchronous module loading.

### Well tested

Webant is thoroughly tested with 170+ unit tests, most of which use a headless browser ([PhantomJS](http://phantomjs.org)) to ensure the module works in a browser environment as intended.

## Dynamic requires

Webant only supports `require` calls where the first parameter is either a string literal or an array literal where every element is a string literal. For example, the following are all supported:

````javascript
var foo = require('foo.js');
require('bar.js',function(bar){ bar.sayHello(); });
var items = require(['foo.js','bar.js']);
require(['foo.js','bar.js'],function(foo,bar){}); 
````

If webant encounters a `require` call where the first parameter is not a string literal or an array literal containing only string literals, an error will be thrown. This means `require` calls like these will throw errors:

````javascript
var foo = require('foo' + '.js'); // not allowed - will throw error

var name = "foo.js";
var foo = require(name); // not allowed - will throw error

function getTemplate(tmplName,callback) {
    require("../path/to/templates/" + tmplName + ".hbs",callback); // not allowed - will throw error
}

var item1 = "foo.js";
var item2 = "bar.js";

require([item1,item2]); // not allowed - will throw error
````

Webant may be augmented to support dynamic requires in future. 

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant)

Ensure [phantomjs](http://phantomjs.org) is installed and in your PATH, then run:

    $ npm test

## Acknowledgements

__[medikoo](https://github.com/medikoo), creator of [webmake](https://github.com/medikoo/modules-webmake)__

For the inspiration behind this module.

__[mishoo](https://github.com/mishoo), creator of [UglifyJS2](https://github.com/mishoo/UglifyJS2)__

The excellent javascript parser, minifier, compressor and beautifier that webant depends on for much of its functionality.
