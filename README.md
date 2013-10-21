# node-modules-webant

_Bringing CommonJS-style requires to the browser and more._

## Quick Start

Install the package globally.

    $ npm install webant -g
    
Create a file named `webant-config.json` in your project root and define at least the following settings:

````json
{
    "jsEntryPath":"%%base%%/src/js/main.js",
    "jsDestPath":"%%base%%/build/main.js"
}
````

Navigate to the directory housing your `webant-config.json` and run `webant`:

    $ cd /path/to/project/root
    $ webant

## Tests

    $ npm test