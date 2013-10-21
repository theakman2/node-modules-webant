# node-modules-webant

_Bringing CommonJS-style requires to the browser and more._

Just like node-js, webant allows you to reference other files by inserting `require` calls and handles compiling referenced files together so it can be used in the browser.

Unlike node-js though, webant allows you to import CSS files, JSON files, handlebars files, HTML files, and many more, in addition to the standard javascript files.

## Quick Start

1. Install the package globally.

    $ npm install webant -g
    
2. Create a file named `webant-config.json` in your project root and define at least the following settings:

````json
{
    "jsEntryPath":"%%base%%/src/js/main.js",
    "jsDestPath":"%%base%%/build/main.js"
}
````

3. Navigate to the directory housing your `webant-config.json` and run `webant`:

    $ cd /path/to/project/root
    $ webant

## Tests

    $ npm test
    
## Acknowledgements

*[medikoo](https://github.com/medikoo), creator of [webmake](https://github.com/medikoo/modules-webmake)*

For the inspiration behind this module.

*[mishoo](https://github.com/mishoo), creator of [UglifyJS2](https://github.com/mishoo/UglifyJS2)*

The excellent javascript parser, minifier, compressor and beautifier that webant depends on for much of its functionality.