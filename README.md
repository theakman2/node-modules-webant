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

    $ webant [options]

```
  --entry, -e      Path to entry script relative to current directory.
  --dest, -d       Path to where compiled output will be written.
  --urldest, -u    The URL of 'dest'.
  --compress, -C   Compress compiled scripts.
  --debug, -D      Output line numbers of original files in compiled scripts.
  --handler, -H    Specify an additional handler to use. Can be used multiple
                   times.
  --useconfig, -c  Use the webant-config.json configuration in the current
                   directory.
  --version, -v    Print the version.
  --help, -h       Display usage.
```

Example:

    $ webant --entry src/js/main.js --dest build/js/main.js --urldest http://mysite.com/assets/js/main.js -C
    
### Command line - with configuration file

Create a JSON configuration file named `webant-config.json` in your project root. The configuration file should look like this:

````json
{
    "entry":"src/js/main.js",
    "dest":"build/js/main.js",
    "urlDest":"http://localhost/path/to/build/js/main.js",
    "mode":"normal"
}
````

Then navigate to your project root and run `webant` with the `-c` flag set:

    $ cd /path/to/project/root
    $ webant -c
    
As long as you run the `webant` command in the same directory as the configuration file, it will automatically be picked up.

### Configuration file settings

`entry` _(required)_

Path to the entry script relative to the configuration file's directory.

`dest`

Path to the main destination file relative to the configuration file's directory.

`urlDest`

URL path to the main destination file.

`mode`

Can be `normal`, `debug` or `compress`. Defaults to `normal`. Set to `debug` to output line numbers in the compiled scripts. Set to `compress` to compress the compiled scripts.

### Programmatically

Install Webant locally:

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

The `opts` parameter is an object with the same keys as the `webant-config.json` configuration file mentioned above.

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant)

    $ npm test

## Acknowledgements

__[medikoo](https://github.com/medikoo), creator of [webmake](https://github.com/medikoo/modules-webmake)__

For the inspiration behind this module.

__[mishoo](https://github.com/mishoo), creator of [UglifyJS2](https://github.com/mishoo/UglifyJS2)__

The excellent javascript parser, minifier, compressor and beautifier that webant depends on for much of its functionality.
