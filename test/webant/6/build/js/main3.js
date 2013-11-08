window.__CHUNKS__['3'] = {
"0":function(require,module,exports) {
/**
 * Taken verbatim from medikoo's node webmake module (https://github.com/medikoo/modules-webmake)
 **/
//@@css/addStylesheet: 4
var style, add;

//@@css/addStylesheet: 5
if (document.createStyleSheet) {
    // IE
    //@@css/addStylesheet: 7
    if (document.styleSheets.length > 29) {
        //@@css/addStylesheet: 8
        style = document.styleSheets[document.styleSheets.length - 1];
    } else //@@css/addStylesheet: 9
    {
        //@@css/addStylesheet: 10
        style = document.createStyleSheet();
    }
    //@@css/addStylesheet: 12
    add = function(css) {
        style.cssText += css;
    };
} else //@@css/addStylesheet: 13
{
    //@@css/addStylesheet: 14
    style = document.getElementsByTagName("head")[0].appendChild(//@@css/addStylesheet: 15
    document.createElement("style"));
    //@@css/addStylesheet: 16
    style.setAttribute("type", "text/css");
    //@@css/addStylesheet: 17
    add = function(css) {
        style.appendChild(document.createTextNode(css));
    };
}

//@@css/addStylesheet: 19
module.exports = add;
}};
