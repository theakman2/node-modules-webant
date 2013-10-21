// require some text
var text = require("../../data/plain.txt");

// require some html
var html = require("../../data/snippetof.html");


// require external JS file with protocol and no query string/anchor
//=>require http://google.com/a.js



// require external JS file with protocol and query string but no anchor
//=>require http://localhost/path/to/b.js?hey=there



// require external JS file with protocol and query string and anchor
//=>require http://mysite.com/another/external/c.js?hey=there#pie


// require external JS file that has already been required
//=>require http://localhost/path/to/b.js?hey=there



// require external CSS file with protocol and no query string/anchor
//=>require http://localhost/path/to/some/css/a.css



// require external CSS file with protocol and query string but no anchor
//=>require http://www.yoursite.biz/assets/b.css



// require external CSS file with protocol and query string and anchor
//=>require http://www.another.site.co/assets/b.css



// require external CSS file that has already been required
//=>require http://localhost/path/to/some/css/a.css



module.exports.text = text;
module.exports.html = html;