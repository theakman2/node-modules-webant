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

### Including external CSS and javascript

Sometimes you'll want your application to include javascript or CSS files hosted externally. Webant has built-in support for requiring externally hosted javascript or CSS files via the comment-style:

```javascript
/* src/js/main.js */
//=>require //ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
```

For external `require`s to be included within your application, first create a handlebars template like the following:

```html
<!-- src/index.hbs -->
<!DOCTYPE html>
<html>
<head>

    {{#each externalCss}}
        <link rel="stylesheet" type="text/css" href="{{{this}}}" />
    {{/each}}

    {{#if internalCss}}
        {{#if relCssPath}}
            <link rel="stylesheet" type="text/css" href="{{{relCssPath}}}" />
        {{/if}}
    {{/if}}

    {{#each externalJs}}
        <script type="text/javascript" src="{{{this}}}"></script>
    {{/each}}

    {{#if internalJs}}
        {{#if relJsPath}}
            <script type="text/javascript" src="{{{relJsPath}}}"></script>
        {{/if}}
    {{/if}}
    
</head>
<body>

</body>
</html>
```

Now execute webant:

    $ webant src/js/main.js src/index.hbs build/js/out.js build/index.html

The handlebars template at `src/index.hbs` will be compiled into the output HTML file at `build/index.html`. The two variables `externalCss` and `externalJs` are arrays containing the URLs of all `require`s to external CSS and javascript files.

NB: the source handlebars template at `src/index.hbs` doesn't have to be named `index.hbs`. It can be named anything, although the file extension needs to be `hbs` or `handlebars`.

### Understanding the `index.hbs` template

Creating a handlebars template is necessary for including `require`s to external javascript and CSS files, but the template is used for more than that.

As well as the `externalCss` and `externalJs` variables mentioned in the previous section, several other variables are available within the template:

__internalJs__ *(string)* Contains all locally `require`d javascript code.

__internalCss__ *(string)* Contains all locally `require`d CSS.

__relCssPath__ *(string)* If an output CSS file has been declared, this is the relative path from the output HTML file to the output CSS file.

__relJsPath__ *(string)* The relative path from the output HTML file to the output javascript file.

This allows a certain degree of flexibility. For example, you could choose to include locally `require`d CSS interally:

```html
<!-- src/index.hbs -->
<!DOCTYPE html>
<html>
<head>

    {{#if internalCss}}
        <style type="text/css">
            {{{this}}}
        </style>
    {{/if}}

</head>
<body>

</body>
</html>
```

### Using webant with a configuration file 

It's possible to define a configuration file for use by webant. Configuration files are JSON files named `webant-config.json`, e.g.:

```javascript
// path/to/src/webant-config.json
{
    "jsEntryPath":"src/js/main.js",
    "jsDestPath":"build/js/out.js",
    "htmlEntryPath":"src/index.hbs",
    "htmlDestPath":"build/index.html",
    "cssDestPath":"build/css/main.css"
}
``` 

Now navigate to the directory housing the configuration file and run `webant` without any arguments:

    $ cd path/to/src
    $ webant

### Using webant programmatically

You may need to install webant locally for programmatic use. Navigate to your project root and run:

    $ npm install webant

#### Simple usage

```javascript
var webant = require("webant");

/**
 * The `settings` parameter is expected to be an object containing the same keys as the `webant-config.json` file mentioned previously. 
 */
webant(settings,function(err){
    if (err) {
        console.log("An error occurred.");
        process.exit();
    }
    console.log("Webant ran successfully.");
});
```

#### Advanced usage

```javascript
var webant = require("webant");
/**
 * The `settings` parameter can simply be an object containing the same keys as the `webant-config.json` file.
 * webant.parse will use only the keys it needs and ignore the others 
 */
webant.parse(settings,function(err,data){
    /*
     * 'data' is an object containing four keys - internalJs, internalCss, externalJs, externalCss
     * These are the same keys made available in the index.hbs template mentioned earlier.
     */
    if (err) {
        console.log("An error occurred at the parsing stage.");
        process.exit();
    }
    /**
     * The `outputSettings` parameter can simply be an object containing the same keys as the `webant-config.json` file.
     * webant.write will use only the keys it needs and ignore the others 
     */
    webant.write(data,outputSettings,function(err){
        if (err) {
            console.log("An error occurred at the writing stage.");
            process.exit();
        }
        console.log("Webant ran successfully.");
    });
});
```

## Tests [![Build Status](https://travis-ci.org/theakman2/node-modules-webant.png?branch=master)](https://travis-ci.org/theakman2/node-modules-webant)

    $ npm test

## Acknowledgements

__[medikoo](https://github.com/medikoo), creator of [webmake](https://github.com/medikoo/modules-webmake)__

For the inspiration behind this module.

__[mishoo](https://github.com/mishoo), creator of [UglifyJS2](https://github.com/mishoo/UglifyJS2)__

The excellent javascript parser, minifier, compressor and beautifier that webant depends on for much of its functionality.
