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

NB: the appropriate handlers must be installed to `require` files other than javascript. Handlers are described below.

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

NB: the appropriate handlers must be installed to `require` files other than javascript. Handlers are described below.

## Installation

	$ npm install webant -g

## Usage

### Command line

```
Usage:
  webant --useConfig [options]
  webant --useConfig [path to config file] [options]
  webant --entry [path to entry script] [options]

Example:
  webant --entry src/js/main.js --dest build/js/main.js

Options:
  --entry, -e                  Path to entry script relative to current
                               directory. [Required, unless --useConfig flag is
                               set].
  --dest, -d                   Path to where compiled output will be written.
  --urlDest, -u                URL at which the path specified for '--dest' can
                               be reached. Can be absolute or relative.
                               Example: --urlDest js/main.js
  --postProcess, -p            Post-processing to apply to compiled javascript.
                               Can be either 'compress' (compresses output),
                               'debug' (adds file and line numbers to output)
                               or 'none' (no post-processing).
  --requireBase, -r            Resolve require paths relative to the supplied
                               directory instead of relative to the file
                               containing the require.
  --defaultExtension, -D       Default extension to append to a require path
                               when no extension is provided. Include the
                               starting period (e.g. '.ts'). Example: setting
                               `--defaultExtension .coffee` would mean that
                               `require('./path/to/file')` would look for
                               `./path/to/file.coffee`. Defaults to '.js'.
  --handlers, -H               Additional handlers to use. Can be set multiple
                               times. Example: -H coffee -H scss -H json
  --includeBootstrap, -i       The path to the file where the bootstrap code
                               will be included. This should be set to one of
                               the source files to be compiled. Webant will
                               then insert the bootstrap code into the compiled
                               version of the specified source file.
                               Alternatively set this to the empty string for
                               no bootstrap code to be included. Leave
                               undefined for the bootstrap code to be included
                               in the entry file specified via the `--entry`
                               key.
  --browserGlobalVar, -b       Name of the global variable used in the compiled
                               javascript. Defaults to '__MODULES__'.
  --aliases                    Parameters that can be used as part of `require`
                               calls. Example: passing `--aliases.foo=jquery
                               --aliases.baz=lib` would mean you could do
                               `require('../{baz}/{foo}.js')` in your scripts.
  --entryModules, -E           Path to entry modules. These are the modules
                               that are automatically loaded when the compiled
                               javascript is included in a webpage. This can be
                               set multiple times. Leave blank to default to
                               the entry script passed via the --entry key.
                               Example usage: -E path/to/src/1.js -E
                               path/to/src/2.js
  --requireExpressionName, -R  Name of the function used for requiring
                               javascript files. Defaults to 'require'.
  --useConfig, -c              Path to a JSON configuration file which sets
                               default options. If this option is set but no
                               path is provided, the path is assumed to be
                               './webant-config.json'. [Required, unless
                               --entry option is provided]. [Additional options
                               override those found in the configuration file].

  --version, -v                Show version.
  --help, -h                   Show help.
```

### Configuration file settings

If you pass the `--useConfig` option via the CLI, webant will assume the configuration file is a JSON file which looks something like this:

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
var Webant = require("webant");

var webant = new Webant(opts);

webant.build(function(err,data){
	if (err) {
		// webant has encountered an error
	} else {
		/**
		 * webant has successfully compiled and written the source files. 
		 */
		console.log("SUCCESS!");
		console.log("Data regarding what has been compiled:");
		console.log(data);
	}
});
````

The `opts` parameter is an object that takes the same keys as the JSON configuration file mentioned above.

## Handlers

By default, webant only allows you to `require` javascript files. You have to install the appropriate *handler* to `require` additional types of files.

Handlers are NodeJS modules which take care of requiring different types of files. For example, the JSON handler allows you to `require` JSON files.

A wide variety of handlers are officially being maintained:

#### CSS

* [CSS](https://github.com/theakman2/node-modules-webant-handler-css)
* [LESS](https://github.com/theakman2/node-modules-webant-handler-less)
* [SASS/SCSS](https://github.com/theakman2/node-modules-webant-handler-scss)
* [Stylus](https://github.com/theakman2/node-modules-webant-handler-stylus)

#### Templating

* [DustJS](https://github.com/theakman2/node-modules-webant-handler-dustjs)
* [Handlebars](https://github.com/theakman2/node-modules-webant-handler-hbs)
* [Micro-templates](https://github.com/theakman2/node-modules-webant-handler-mtmpl)

#### Other

* [JSON](https://github.com/theakman2/node-modules-webant-handler-json)
* [Text](https://github.com/theakman2/node-modules-webant-handler-text)

### Using Handlers

Handlers can be assigned to the `handlers` configuration key in three ways:

```javascript
{
	"handlers":[
		/**
		 * As a string.
		 * Webant calls `require("webant-handler-less")`.
		 */
		"less",
		
		/**
		 * As a two-element array.
		 * Webant calls `require("webant-handler-scss")` and sets the `compress` setting on the handler to `true`.  
		 */
		["scss",{"compress":true}],
		
		/**
		 * Inline, as an object containing an `extensions` property and a `handle` method.
		 * Webant will call the `handle` method on this object every time it encounters a `require` call to a file with the `.hbs` extension.
		 */
		{
			"extensions":".hbs",
			"handle":function(filePath,done){
				fs.readFile(filePath,function(err,contents){
					if (err) {
						done(err);
						return;
					}
					done(null,'module.exports = ' + Handlebars.compile(contents.toString()));
				});
			}
		}
	]
}
```

### Creating Custom Handlers

A webant handler is an object with an `extensions` property and a `handle` method defined.

Here is an example of a handler that allows you to `require` JSON files.

````javascript
var fs = require("fs");

module.exports = {
	/**
	 * A string or array of strings indicating the file extensions this handler is responsible for.
	 */
	extensions:".json",
	
	/**
	 * Called for every `require` call that this handler is responsible for.
	 * @param string filePath - The absolute file path of the require call.
	 * @param function done(error,javascript) - A callback to be called once ready. The first parameter of the callback is reserved for errors, and the second should be a string of javascript.
	 */
	handle:function(filePath,done){
		fs.readFile(filePath,function(e,c){
			if (e) {
				done(e);
				return;
			}
			done(null,"module.exports = "+c.toString().trim()+";");
		});
	}
};
````

## Why webant?

There are already plenty of NodeJS modules available such as [webpack](https://github.com/webpack/webpack), [webmake](https://github.com/medikoo/modules-webmake) and [browserify](https://github.com/substack/node-browserify) that bundle javascript files for the web. Why another one? 

### Synchronous and asynchronous

Unlike webmake (v0.3) and browserify (v2.35), webant permits the use of both synchronous `require` calls (`var foo = require('foo.js');`) and asynchronous `require` calls (`require('foo.js',function(foo) { /* do something with foo */ });`).

When you `require` a module asynchronously, webant intelligently tries to include the module in a separate file so it isn't included in the initial javascript loaded on the page - perfect for large modules that are only infrequently needed.

### Well tested

Webant is thoroughly tested with 250+ unit tests, most of which use a headless browser ([PhantomJS](http://phantomjs.org)) to ensure the module works in a browser environment as intended.

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

## Advanced techniques

### Multiple entry files

It is possible for webant to compile source files from multiple entry files as follows:

```javascript
var Webant = require("webant");

var opts = {
	files:[{
		entry:"/path/to/src/entry1.js",
		dest:"/path/to/build/entry1.out.js"
	},{
		entry:"/path/to/src/entry2.js",
		dest:"/path/to/build/entry2.out.js"
	}]
};

var webant = new Webant(opts);

webant.build(function(err,data){
	// ...
});
```

## Customising webant

To understand how webant can be customised, it's important to understand how webant works.

When you call `require("webant")` in your NodeJS code, you are getting the Webant class. To actually compile anything, you need to instantiate the Webant class and call the `build` method as follows:

```javascript
var Webant = require("webant");

var webant = new Webant(opts);
webant.build(function(err,data){
	// ...
});
``` 

When the `build` method is called, webant goes through five basic stages. Each of these stages is handled by a self-contained delegate class:

1. Normalise and validate the `opts` argument passed via the constructor. This is handled by the `ConfigParser` class.
2. Get a require tree representing which files require which other files. Handled by the `RequireTreeParser` class.
3. From the require tree representation, get another representation of how many distinct files ('chunks') need to be generated. Handled by the `Chunker` class.
4. From the chunked representation, get a representation of the final javascript code that needs to be saved. Handled by the `Stringifier` class.
5. Finally, write the final stringified representation. This is handled by the `Writer` class. 

The `ConfigParser`, `RequireTreeParser`, `Chunker`, `Stringifier` and `Writer` delegate classes are all accessible as properties on the main `Webant` class. For example:

```javascript
var Webant = require("webant");

var Stringifier = Webant.Stringifier;
var ConfigParser = Webant.ConfigParser;
```

Since the five delegate classes are publicly accessible as properties of the `Webant` class, it's easy to customise webant by re-defining these properties.

For example, you could customise the way in which webant writes compiled files by re-defining `Webant.Writer` as follows:

```javascript
var Webant = require("webant");

var Writer = Webant.Writer;

function MyCustomWriter() {
	Writer.apply(this,Array.prototype.slice.call(arguments));
}

MyCustomWriter.prototype = Object.create(Writer.prototype);

MyCustomWriter.prototype.write = function(dataToWrite,callback) {
	// my custom behaviour
};

Webant.Writer = MyCustomWriter;

var webant = new Webant(opts);

webant.build(function(err,data){
	/**
	 * Webant has compiled your source files using the `MyCustomWriter` class.
	 */
});
```

The example above affects all instances of Webant - i.e. it's a global change. It is however possible to customise only specific webant instances as follows:

```javascript
var Webant = require("webant");

var Writer = Webant.Writer;

function MyCustomWriter() {
	Writer.apply(this,Array.prototype.slice.call(arguments));
}

MyCustomWriter.prototype = Object.create(Writer.prototype);

MyCustomWriter.prototype.write = function(dataToWrite,callback) {
	// my custom behaviour
};

var webant = new Webant(opts);

webant.writer = new MyCustomWriter(webant);

webant.build(function(err,data){
	/**
	 * This has been compiled using the `MyCustomWriter` class...
	 */
});

var webant2 = new Webant(opts);

webant2.build(function(err,data){
	/**
	 * ...but this has been compiled using the default `Writer` class.
	 */
});
```

This instance-specific example takes advantage of two features:

1. Webant only instantiates the delegate classes when the `build` method is called.
2. The instantiated delegate classes follow a naming convention - simple lower-case the class' name. In other words, the `Writer` class is instantiated and attached to the webant instance under the property `writer`.
3. Delegate classes are always instantiated with the webant instance passed as the first parameter.

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant)

Ensure [phantomjs](http://phantomjs.org) is installed and in your PATH, then run:

	$ npm test

## Acknowledgements

__[medikoo](https://github.com/medikoo), creator of [webmake](https://github.com/medikoo/modules-webmake)__

For the inspiration behind this module.

__[mishoo](https://github.com/mishoo), creator of [UglifyJS2](https://github.com/mishoo/UglifyJS2)__

The excellent javascript parser, minifier, compressor and beautifier that webant depends on for much of its functionality.