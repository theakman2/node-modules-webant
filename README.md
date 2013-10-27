# node-modules-webant

_Bringing CommonJS-style requires to the browser and more._

Just like node-js, webant allows you to reference other files by inserting `require` calls and handles compiling referenced files together so it can be used in the browser.

Unlike node-js though, webant allows you to import CSS files, JSON files, handlebars files, HTML files, and many more, in addition to the standard javascript files.

## Quick Start

Install the package globally.

    $ npm install webant -g

Navigate to the directory housing your entry javascript file:

    $ cd /path/to/project/root
    
Run webant:

    $ webant src/js/main.js build/js/out.js

## Usage

### Including CSS

Webant recognises two types of require call:

```javascript
/* Standard function-style require call */
require('../path/to/file.js');
/* Comment-style require call */
//=>require ../path/to/styles.css
```

The comment-style require call can be used to `require` CSS files. All CSS `require`d this way will be added to an output CSS file if one is specified:

    $ cd /path/to/project/root
    $ webant src/js/main.js build/js/out.js build/css/out.css

In this example, the entry script at `src/js/main.js` will be parsed for dependencies and the resulting output compiled into `build/js/out.js`. In addition, all CSS files `require`d via the comment-style will be added to `build/css/out.css`.

### Including SCSS, LESS and stylus

Webant has built-in support for SCSS, LESS and stylus. Simply `require` files with the extension '.scss', '.less', '.stylus' or '.styl' via the comment-style and specify an output CSS file where the compiled CSS will be added.

```javascript
/* src/js/main.js */
//=>require ../path/to/styles.scss
//=>require ../path/to/morestyles.less
```

    $ webant src/js/main.js build/js/out.js build/css/out.css

### Including handlebars templates, JSON, text and HTML files

Webant has built-in support for handlebars, JSON, text and HTML `require`s. These files need to be `require`d via the standard function-style. Example:

```html
<!-- src/js/template.hbs --->
Hello, my name is {{name}}!
```

```javascript
// src/js/data/mydata.json
{
    "key1":[5,4,2]
}
```

```javascript
// src/js/main.js
var tmpl = require("./template.hbs");

var html = tmpl({name:"webant"}); // html is 'Hello, my name is webant!'

var data = require("./data/mydata.json");

console.log(data.key1[1]); // logs 4
```

    $ webant src/js/main.js build/js/out.js

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant)

    $ npm test

## Acknowledgements

__[medikoo](https://github.com/medikoo), creator of [webmake](https://github.com/medikoo/modules-webmake)__

For the inspiration behind this module.

__[mishoo](https://github.com/mishoo), creator of [UglifyJS2](https://github.com/mishoo/UglifyJS2)__

The excellent javascript parser, minifier, compressor and beautifier that webant depends on for much of its functionality.
