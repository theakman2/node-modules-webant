# node-modules-webant
[![Build Status](https://travis-ci.org/theakman2/node-modules-webant.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant)

_Bringing CommonJS-style requires to the browser and more._

Just like node-js, webant allows you to reference other files by inserting `require` calls and handles compiling referenced files together so it can be used in the browser.

Unlike node-js though, webant allows you to import CSS files, JSON files, handlebars files, HTML files, and many more, in addition to the standard javascript files.

## Quick Start

* Install the package globally.

    $ npm install webant -g
    
* Create a file named `webant-config.json` in your project root and define at least the following settings:

````json
{
    "jsEntryPath":"%%base%%/src/js/main.js",
    "jsDestPath":"%%base%%/build/main.js"
}
````

* Navigate to the directory housing your `webant-config.json` and run `webant`:

    $ cd /path/to/project/root
    $ webant

## Tests

    $ npm test
    
## Acknowledgements

__[medikoo](https://github.com/medikoo), creator of [webmake](https://github.com/medikoo/modules-webmake)__

For the inspiration behind this module.

__[mishoo](https://github.com/mishoo), creator of [UglifyJS2](https://github.com/mishoo/UglifyJS2)__

The excellent javascript parser, minifier, compressor and beautifier that webant depends on for much of its functionality.
