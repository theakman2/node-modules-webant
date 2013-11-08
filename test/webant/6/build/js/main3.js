window.__CHUNKS__['3'] = {
"0":function(require,module,exports) {
/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 14
(function(window, undefined) {
    // Can't do this because several apps including ASP.NET trace
    // the stack via arguments.caller.callee and Firefox dies if
    // you try to trace through "use strict" call chains. (#13335)
    // Support: Firefox 18+
    //"use strict";
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 21
    var // The deferred used on DOM ready
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 23
    readyList, // A central reference to the root jQuery(document)
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 26
    rootjQuery, // Support: IE<10
    // For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 30
    core_strundefined = typeof undefined, // Use the correct document accordingly with window argument (sandbox)
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 33
    location = window.location, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 34
    document = window.document, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 35
    docElem = document.documentElement, // Map over jQuery in case of overwrite
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 38
    _jQuery = window.jQuery, // Map over the $ in case of overwrite
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 41
    _$ = window.$, // [[Class]] -> type pairs
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 44
    class2type = {}, // List of deleted data cache ids, so we can reuse them
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 47
    core_deletedIds = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 49
    core_version = "1.10.2", // Save a reference to some core methods
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 52
    core_concat = core_deletedIds.concat, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 53
    core_push = core_deletedIds.push, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 54
    core_slice = core_deletedIds.slice, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 55
    core_indexOf = core_deletedIds.indexOf, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 56
    core_toString = class2type.toString, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 57
    core_hasOwn = class2type.hasOwnProperty, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 58
    core_trim = core_version.trim, // Define a local copy of jQuery
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 61
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 63
        return new jQuery.fn.init(selector, context, rootjQuery);
    }, // Used for matching numbers
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 67
    core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, // Used for splitting on whitespace
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 70
    core_rnotwhite = /\S+/g, // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 73
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 78
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, // Match a standalone tag
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 81
    rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, // JSON RegExp
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 84
    rvalidchars = /^[\],:{}\s]*$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 85
    rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 86
    rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 87
    rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, // Matches dashed string for camelizing
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 90
    rmsPrefix = /^-ms-/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 91
    rdashAlpha = /-([\da-z])/gi, // Used by jQuery.camelCase as callback to replace()
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 94
    fcamelCase = function(all, letter) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 95
        return letter.toUpperCase();
    }, // The ready event handler
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 99
    completed = function(event) {
        // readyState === "complete" is good enough for us to call the dom ready in oldIE
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 102
        if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 103
            detach();
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 104
            jQuery.ready();
        }
    }, // Clean-up method for dom ready events
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 108
    detach = function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 109
        if (document.addEventListener) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 110
            document.removeEventListener("DOMContentLoaded", completed, false);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 111
            window.removeEventListener("load", completed, false);
        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 113
        {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 114
            document.detachEvent("onreadystatechange", completed);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 115
            window.detachEvent("onload", completed);
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 119
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 121
        jquery: core_version,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 123
        constructor: jQuery,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 124
        init: function(selector, context, rootjQuery) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 125
            var match, elem;
            // HANDLE: $(""), $(null), $(undefined), $(false)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 128
            if (!selector) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 129
                return this;
            }
            // Handle HTML strings
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 133
            if (typeof selector === "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 134
                if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 136
                    match = [ null, selector, null ];
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 138
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 139
                    match = rquickExpr.exec(selector);
                }
                // Match html or make sure no context is specified for #id
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 143
                if (match && (match[1] || !context)) {
                    // HANDLE: $(html) -> $(array)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 146
                    if (match[1]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 147
                        context = context instanceof jQuery ? context[0] : context;
                        // scripts is true for back-compat
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 150
                        jQuery.merge(this, jQuery.parseHTML(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 151
                        match[1], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 152
                        context && context.nodeType ? context.ownerDocument || context : document, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 153
                        true));
                        // HANDLE: $(html, props)
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 157
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 158
                            for (match in context) {
                                // Properties of context are called as methods if possible
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 160
                                if (jQuery.isFunction(this[match])) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 161
                                    this[match](context[match]);
                                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 164
                                {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 165
                                    this.attr(match, context[match]);
                                }
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 170
                        return this;
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 173
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 174
                        elem = document.getElementById(match[2]);
                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 178
                        if (elem && elem.parentNode) {
                            // Handle the case where IE and Opera return items
                            // by name instead of ID
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 181
                            if (elem.id !== match[2]) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 182
                                return rootjQuery.find(selector);
                            }
                            // Otherwise, we inject the element directly into the jQuery object
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 186
                            this.length = 1;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 187
                            this[0] = elem;
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 190
                        this.context = document;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 191
                        this.selector = selector;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 192
                        return this;
                    }
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 196
                    if (!context || context.jquery) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 197
                        return (context || rootjQuery).find(selector);
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 201
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 202
                        return this.constructor(context).find(selector);
                    }
                }
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 206
                if (selector.nodeType) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 207
                    this.context = this[0] = selector;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 208
                    this.length = 1;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 209
                    return this;
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 213
                    if (jQuery.isFunction(selector)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 214
                        return rootjQuery.ready(selector);
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 217
            if (selector.selector !== undefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 218
                this.selector = selector.selector;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 219
                this.context = selector.context;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 222
            return jQuery.makeArray(selector, this);
        },
        // Start with an empty selector
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 226
        selector: "",
        // The default length of a jQuery object is 0
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 229
        length: 0,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 231
        toArray: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 232
            return core_slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 237
        get: function(num) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 238
            return num == null ? // Return a 'clean' array
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 241
            this.toArray() : // Return just the object
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 244
            num < 0 ? this[this.length + num] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 249
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 252
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 255
            ret.prevObject = this;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 256
            ret.context = this.context;
            // Return the newly-formed element set
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 259
            return ret;
        },
        // Execute a callback for every element in the matched set.
        // (You can seed the arguments with an array of args, but this is
        // only used internally.)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 265
        each: function(callback, args) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 266
            return jQuery.each(this, callback, args);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 269
        ready: function(fn) {
            // Add the callback
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 271
            jQuery.ready.promise().done(fn);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 273
            return this;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 276
        slice: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 277
            return this.pushStack(core_slice.apply(this, arguments));
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 280
        first: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 281
            return this.eq(0);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 284
        last: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 285
            return this.eq(-1);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 288
        eq: function(i) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 289
            var len = this.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 290
            j = +i + (i < 0 ? len : 0);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 291
            return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 294
        map: function(callback) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 295
            return this.pushStack(jQuery.map(this, function(elem, i) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 296
                return callback.call(elem, i, elem);
            }));
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 300
        end: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 301
            return this.prevObject || this.constructor(null);
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 306
        push: core_push,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 307
        sort: [].sort,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 308
        splice: [].splice
    };
    // Give the init function the jQuery prototype for later instantiation
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 312
    jQuery.fn.init.prototype = jQuery.fn;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 314
    jQuery.extend = jQuery.fn.extend = function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 315
        var src, copyIsArray, copy, name, options, clone, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 316
        target = arguments[0] || {}, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 317
        i = 1, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 318
        length = arguments.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 319
        deep = false;
        // Handle a deep copy situation
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 322
        if (typeof target === "boolean") {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 323
            deep = target;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 324
            target = arguments[1] || {};
            // skip the boolean and the target
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 326
            i = 2;
        }
        // Handle case when target is a string or something (possible in deep copy)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 330
        if (typeof target !== "object" && !jQuery.isFunction(target)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 331
            target = {};
        }
        // extend jQuery itself if only one argument is passed
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 335
        if (length === i) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 336
            target = this;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 337
            --i;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 340
        for (;i < length; i++) {
            // Only deal with non-null/undefined values
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 342
            if ((options = arguments[i]) != null) {
                // Extend the base object
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 344
                for (name in options) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 345
                    src = target[name];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 346
                    copy = options[name];
                    // Prevent never-ending loop
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 349
                    if (target === copy) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 350
                        continue;
                    }
                    // Recurse if we're merging plain objects or arrays
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 354
                    if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 355
                        if (copyIsArray) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 356
                            copyIsArray = false;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 357
                            clone = src && jQuery.isArray(src) ? src : [];
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 359
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 360
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }
                        // Never move original objects, clone them
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 364
                        target[name] = jQuery.extend(deep, clone, copy);
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 367
                        if (copy !== undefined) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 368
                            target[name] = copy;
                        }
                    }
                }
            }
        }
        // Return the modified object
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 375
        return target;
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 378
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        // Non-digits removed to match rinlinejQuery
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 381
        expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 383
        noConflict: function(deep) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 384
            if (window.$ === jQuery) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 385
                window.$ = _$;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 388
            if (deep && window.jQuery === jQuery) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 389
                window.jQuery = _jQuery;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 392
            return jQuery;
        },
        // Is the DOM ready to be used? Set to true once it occurs.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 396
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 400
        readyWait: 1,
        // Hold (or release) the ready event
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 403
        holdReady: function(hold) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 404
            if (hold) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 405
                jQuery.readyWait++;
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 406
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 407
                jQuery.ready(true);
            }
        },
        // Handle when the DOM is ready
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 412
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 415
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 416
                return;
            }
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 420
            if (!document.body) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 421
                return setTimeout(jQuery.ready);
            }
            // Remember that the DOM is ready
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 425
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 428
            if (wait !== true && --jQuery.readyWait > 0) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 429
                return;
            }
            // If there are functions bound, to execute
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 433
            readyList.resolveWith(document, [ jQuery ]);
            // Trigger any bound ready events
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 436
            if (jQuery.fn.trigger) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 437
                jQuery(document).trigger("ready").off("ready");
            }
        },
        // See test/unit/core.js for details concerning isFunction.
        // Since version 1.3, DOM methods and functions like alert
        // aren't supported. They return false on IE (#2968).
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 444
        isFunction: function(obj) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 445
            return jQuery.type(obj) === "function";
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 448
        isArray: Array.isArray || function(obj) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 449
            return jQuery.type(obj) === "array";
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 452
        isWindow: function(obj) {
            /* jshint eqeqeq: false */
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 454
            return obj != null && obj == obj.window;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 457
        isNumeric: function(obj) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 458
            return !isNaN(parseFloat(obj)) && isFinite(obj);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 461
        type: function(obj) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 462
            if (obj == null) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 463
                return String(obj);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 465
            return typeof obj === "object" || typeof obj === "function" ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 466
            class2type[core_toString.call(obj)] || "object" : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 467
            typeof obj;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 470
        isPlainObject: function(obj) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 471
            var key;
            // Must be an Object.
            // Because of IE, we also have to check the presence of the constructor property.
            // Make sure that DOM nodes and window objects don't pass through, as well
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 476
            if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 477
                return false;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 480
            try {
                // Not own constructor property must be Object
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 482
                if (obj.constructor && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 483
                !core_hasOwn.call(obj, "constructor") && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 484
                !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 485
                    return false;
                }
            } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 487
            catch (e) {
                // IE8,9 Will throw exceptions on certain host objects #9897
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 489
                return false;
            }
            // Support: IE<9
            // Handle iteration over inherited properties before own properties.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 494
            if (jQuery.support.ownLast) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 495
                for (key in obj) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 496
                    return core_hasOwn.call(obj, key);
                }
            }
            // Own properties are enumerated firstly, so to speed up,
            // if last one is own, then all properties are own.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 502
            for (key in obj) {}
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 504
            return key === undefined || core_hasOwn.call(obj, key);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 507
        isEmptyObject: function(obj) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 508
            var name;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 509
            for (name in obj) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 510
                return false;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 512
            return true;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 515
        error: function(msg) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 516
            throw new Error(msg);
        },
        // data: string of html
        // context (optional): If specified, the fragment will be created in this context, defaults to document
        // keepScripts (optional): If true, will include scripts passed in the html string
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 522
        parseHTML: function(data, context, keepScripts) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 523
            if (!data || typeof data !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 524
                return null;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 526
            if (typeof context === "boolean") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 527
                keepScripts = context;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 528
                context = false;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 530
            context = context || document;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 532
            var parsed = rsingleTag.exec(data), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 533
            scripts = !keepScripts && [];
            // Single tag
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 536
            if (parsed) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 537
                return [ context.createElement(parsed[1]) ];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 540
            parsed = jQuery.buildFragment([ data ], context, scripts);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 541
            if (scripts) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 542
                jQuery(scripts).remove();
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 544
            return jQuery.merge([], parsed.childNodes);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 547
        parseJSON: function(data) {
            // Attempt to parse using the native JSON parser first
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 549
            if (window.JSON && window.JSON.parse) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 550
                return window.JSON.parse(data);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 553
            if (data === null) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 554
                return data;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 557
            if (typeof data === "string") {
                // Make sure leading/trailing whitespace is removed (IE can't handle it)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 560
                data = jQuery.trim(data);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 562
                if (data) {
                    // Make sure the incoming data is actual JSON
                    // Logic borrowed from http://json.org/json2.js
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 565
                    if (rvalidchars.test(data.replace(rvalidescape, "@").replace(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 566
                    rvalidtokens, "]").replace(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 567
                    rvalidbraces, ""))) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 569
                        return new Function("return " + data)();
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 574
            jQuery.error("Invalid JSON: " + data);
        },
        // Cross-browser xml parsing
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 578
        parseXML: function(data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 579
            var xml, tmp;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 580
            if (!data || typeof data !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 581
                return null;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 583
            try {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 584
                if (window.DOMParser) {
                    // Standard
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 585
                    tmp = new DOMParser();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 586
                    xml = tmp.parseFromString(data, "text/xml");
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 587
                {
                    // IE
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 588
                    xml = new ActiveXObject("Microsoft.XMLDOM");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 589
                    xml.async = "false";
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 590
                    xml.loadXML(data);
                }
            } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 592
            catch (e) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 593
                xml = undefined;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 595
            if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 596
                jQuery.error("Invalid XML: " + data);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 598
            return xml;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 601
        noop: function() {},
        // Evaluates a script in a global context
        // Workarounds based on findings by Jim Driscoll
        // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 606
        globalEval: function(data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 607
            if (data && jQuery.trim(data)) {
                // We use execScript on Internet Explorer
                // We use an anonymous function so that context is window
                // rather than jQuery in Firefox
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 611
                (window.execScript || function(data) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 612
                    window["eval"].call(window, data);
                })(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 613
                data);
            }
        },
        // Convert dashed to camelCase; used by the css and data modules
        // Microsoft forgot to hump their vendor prefix (#9572)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 619
        camelCase: function(string) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 620
            return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 623
        nodeName: function(elem, name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 624
            return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
        },
        // args is for internal usage only
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 628
        each: function(obj, callback, args) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 629
            var value, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 630
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 631
            length = obj.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 632
            isArray = isArraylike(obj);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 634
            if (args) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 635
                if (isArray) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 636
                    for (;i < length; i++) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 637
                        value = callback.apply(obj[i], args);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 639
                        if (value === false) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 640
                            break;
                        }
                    }
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 643
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 644
                    for (i in obj) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 645
                        value = callback.apply(obj[i], args);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 647
                        if (value === false) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 648
                            break;
                        }
                    }
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 654
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 655
                if (isArray) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 656
                    for (;i < length; i++) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 657
                        value = callback.call(obj[i], i, obj[i]);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 659
                        if (value === false) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 660
                            break;
                        }
                    }
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 663
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 664
                    for (i in obj) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 665
                        value = callback.call(obj[i], i, obj[i]);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 667
                        if (value === false) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 668
                            break;
                        }
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 674
            return obj;
        },
        // Use native String.trim function wherever possible
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 678
        trim: core_trim && !core_trim.call("﻿ ") ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 679
        function(text) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 680
            return text == null ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 681
            "" : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 682
            core_trim.call(text);
        } : // Otherwise use our own trimming functionality
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 686
        function(text) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 687
            return text == null ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 688
            "" : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 689
            (text + "").replace(rtrim, "");
        },
        // results is for internal usage only
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 693
        makeArray: function(arr, results) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 694
            var ret = results || [];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 696
            if (arr != null) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 697
                if (isArraylike(Object(arr))) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 698
                    jQuery.merge(ret, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 699
                    typeof arr === "string" ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 700
                    [ arr ] : arr);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 702
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 703
                    core_push.call(ret, arr);
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 707
            return ret;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 710
        inArray: function(elem, arr, i) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 711
            var len;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 713
            if (arr) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 714
                if (core_indexOf) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 715
                    return core_indexOf.call(arr, elem, i);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 718
                len = arr.length;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 719
                i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 721
                for (;i < len; i++) {
                    // Skip accessing in sparse arrays
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 723
                    if (i in arr && arr[i] === elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 724
                        return i;
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 729
            return -1;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 732
        merge: function(first, second) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 733
            var l = second.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 734
            i = first.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 735
            j = 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 737
            if (typeof l === "number") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 738
                for (;j < l; j++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 739
                    first[i++] = second[j];
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 741
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 742
                while (second[j] !== undefined) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 743
                    first[i++] = second[j++];
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 747
            first.length = i;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 749
            return first;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 752
        grep: function(elems, callback, inv) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 753
            var retVal, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 754
            ret = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 755
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 756
            length = elems.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 757
            inv = !!inv;
            // Go through the array, only saving the items
            // that pass the validator function
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 761
            for (;i < length; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 762
                retVal = !!callback(elems[i], i);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 763
                if (inv !== retVal) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 764
                    ret.push(elems[i]);
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 768
            return ret;
        },
        // arg is for internal usage only
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 772
        map: function(elems, callback, arg) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 773
            var value, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 774
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 775
            length = elems.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 776
            isArray = isArraylike(elems), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 777
            ret = [];
            // Go through the array, translating each of the items to their
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 780
            if (isArray) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 781
                for (;i < length; i++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 782
                    value = callback(elems[i], i, arg);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 784
                    if (value != null) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 785
                        ret[ret.length] = value;
                    }
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 790
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 791
                for (i in elems) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 792
                    value = callback(elems[i], i, arg);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 794
                    if (value != null) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 795
                        ret[ret.length] = value;
                    }
                }
            }
            // Flatten any nested arrays
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 801
            return core_concat.apply([], ret);
        },
        // A global GUID counter for objects
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 805
        guid: 1,
        // Bind a function to a context, optionally partially applying any
        // arguments.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 809
        proxy: function(fn, context) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 810
            var args, proxy, tmp;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 812
            if (typeof context === "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 813
                tmp = fn[context];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 814
                context = fn;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 815
                fn = tmp;
            }
            // Quick check to determine if target is callable, in the spec
            // this throws a TypeError, but we will just return undefined.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 820
            if (!jQuery.isFunction(fn)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 821
                return undefined;
            }
            // Simulated bind
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 825
            args = core_slice.call(arguments, 2);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 826
            proxy = function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 827
                return fn.apply(context || this, args.concat(core_slice.call(arguments)));
            };
            // Set the guid of unique handler to the same of original handler, so it can be removed
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 831
            proxy.guid = fn.guid = fn.guid || jQuery.guid++;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 833
            return proxy;
        },
        // Multifunctional method to get and set values of a collection
        // The value/s can optionally be executed if it's a function
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 838
        access: function(elems, fn, key, value, chainable, emptyGet, raw) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 839
            var i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 840
            length = elems.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 841
            bulk = key == null;
            // Sets many values
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 844
            if (jQuery.type(key) === "object") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 845
                chainable = true;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 846
                for (i in key) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 847
                    jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
                }
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 851
                if (value !== undefined) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 852
                    chainable = true;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 854
                    if (!jQuery.isFunction(value)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 855
                        raw = true;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 858
                    if (bulk) {
                        // Bulk operations run against the entire set
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 860
                        if (raw) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 861
                            fn.call(elems, value);
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 862
                            fn = null;
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 865
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 866
                            bulk = fn;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 867
                            fn = function(elem, key, value) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 868
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 873
                    if (fn) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 874
                        for (;i < length; i++) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 875
                            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                        }
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 880
            return chainable ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 881
            elems : // Gets
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 884
            bulk ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 885
            fn.call(elems) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 886
            length ? fn(elems[0], key) : emptyGet;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 889
        now: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 890
            return new Date().getTime();
        },
        // A method for quickly swapping in/out CSS properties to get correct calculations.
        // Note: this method belongs to the css module but it's needed here for the support module.
        // If support gets modularized, this method should be moved back to the css module.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 896
        swap: function(elem, options, callback, args) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 897
            var ret, name, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 898
            old = {};
            // Remember the old values, and insert the new ones
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 901
            for (name in options) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 902
                old[name] = elem.style[name];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 903
                elem.style[name] = options[name];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 906
            ret = callback.apply(elem, args || []);
            // Revert the old values
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 909
            for (name in options) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 910
                elem.style[name] = old[name];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 913
            return ret;
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 917
    jQuery.ready.promise = function(obj) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 918
        if (!readyList) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 920
            readyList = jQuery.Deferred();
            // Catch cases where $(document).ready() is called after the browser event has already occurred.
            // we once tried to use readyState "interactive" here, but it caused issues like the one
            // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 925
            if (document.readyState === "complete") {
                // Handle it asynchronously to allow scripts the opportunity to delay ready
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 927
                setTimeout(jQuery.ready);
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 930
                if (document.addEventListener) {
                    // Use the handy event callback
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 932
                    document.addEventListener("DOMContentLoaded", completed, false);
                    // A fallback to window.onload, that will always work
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 935
                    window.addEventListener("load", completed, false);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 938
                {
                    // Ensure firing before onload, maybe late but safe also for iframes
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 940
                    document.attachEvent("onreadystatechange", completed);
                    // A fallback to window.onload, that will always work
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 943
                    window.attachEvent("onload", completed);
                    // If IE and not a frame
                    // continually check to see if the document is ready
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 947
                    var top = false;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 949
                    try {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 950
                        top = window.frameElement == null && document.documentElement;
                    } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 951
                    catch (e) {}
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 953
                    if (top && top.doScroll) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 954
                        (function doScrollCheck() {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 955
                            if (!jQuery.isReady) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 957
                                try {
                                    // Use the trick by Diego Perini
                                    // http://javascript.nwbox.com/IEContentLoaded/
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 960
                                    top.doScroll("left");
                                } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 961
                                catch (e) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 962
                                    return setTimeout(doScrollCheck, 50);
                                }
                                // detach all dom ready events
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 966
                                detach();
                                // and execute any waiting functions
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 969
                                jQuery.ready();
                            }
                        })();
                    }
                }
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 975
        return readyList.promise(obj);
    };
    // Populate the class2type map
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 979
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 980
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 983
    function isArraylike(obj) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 984
        var length = obj.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 985
        type = jQuery.type(obj);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 987
        if (jQuery.isWindow(obj)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 988
            return false;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 991
        if (obj.nodeType === 1 && length) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 992
            return true;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 995
        return type === "array" || type !== "function" && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 996
        length === 0 || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 997
        typeof length === "number" && length > 0 && length - 1 in obj);
    }
    // All jQuery objects should point back to these
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1001
    rootjQuery = jQuery(document);
    /*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1012
    (function(window, undefined) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1014
        var i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1015
        support, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1016
        cachedruns, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1017
        Expr, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1018
        getText, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1019
        isXML, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1020
        compile, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1021
        outermostContext, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1022
        sortInput, // Local document vars
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1025
        setDocument, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1026
        document, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1027
        docElem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1028
        documentIsHTML, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1029
        rbuggyQSA, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1030
        rbuggyMatches, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1031
        matches, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1032
        contains, // Instance-specific data
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1035
        expando = "sizzle" + -new Date(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1036
        preferredDoc = window.document, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1037
        dirruns = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1038
        done = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1039
        classCache = createCache(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1040
        tokenCache = createCache(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1041
        compilerCache = createCache(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1042
        hasDuplicate = false, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1043
        sortOrder = function(a, b) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1044
            if (a === b) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1045
                hasDuplicate = true;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1046
                return 0;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1048
            return 0;
        }, // General-purpose constants
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1052
        strundefined = typeof undefined, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1053
        MAX_NEGATIVE = 1 << 31, // Instance methods
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1056
        hasOwn = {}.hasOwnProperty, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1057
        arr = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1058
        pop = arr.pop, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1059
        push_native = arr.push, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1060
        push = arr.push, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1061
        slice = arr.slice, // Use a stripped-down indexOf if we can't use a native one
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1063
        indexOf = arr.indexOf || function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1064
            var i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1065
            len = this.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1066
            for (;i < len; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1067
                if (this[i] === elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1068
                    return i;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1071
            return -1;
        }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1074
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1079
        whitespace = "[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/css3-syntax/#characters
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1081
        characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", // Loosely modeled on CSS identifier characters
        // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
        // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1086
        identifier = characterEncoding.replace("w", "w#"), // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1089
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1090
        "*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]", // Prefer arguments quoted,
        //   then not containing pseudos/brackets,
        //   then attribute selectors/non-parenthetical expressions,
        //   then anything else
        // These preferences are here to reduce the number of selectors
        //   needing tokenize in the PSEUDO preFilter
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1098
        pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1101
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1103
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1104
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1106
        rsibling = new RegExp(whitespace + "*[+~]"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1107
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1109
        rpseudo = new RegExp(pseudos), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1110
        ridentifier = new RegExp("^" + identifier + "$"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1112
        matchExpr = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1113
            ID: new RegExp("^#(" + characterEncoding + ")"),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1114
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1115
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1116
            ATTR: new RegExp("^" + attributes),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1117
            PSEUDO: new RegExp("^" + pseudos),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1118
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1119
            "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1120
            "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1121
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1124
            needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1125
            whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1128
        rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1131
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1133
        rinputs = /^(?:input|select|textarea|button)$/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1134
        rheader = /^h\d$/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1136
        rescape = /'|\\/g, // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1139
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1140
        funescape = function(_, escaped, escapedWhitespace) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1141
            var high = "0x" + escaped - 65536;
            // NaN means non-codepoint
            // Support: Firefox
            // Workaround erroneous numeric interpretation of +"0x"
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1145
            return high !== high || escapedWhitespace ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1146
            escaped : // BMP codepoint
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1148
            high < 0 ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1149
            String.fromCharCode(high + 65536) : // Supplemental Plane codepoint (surrogate pair)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1151
            String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        };
        // Optimize for push.apply( _, NodeList )
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1155
        try {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1156
            push.apply(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1157
            arr = slice.call(preferredDoc.childNodes), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1158
            preferredDoc.childNodes);
            // Support: Android<4.0
            // Detect silently failing push.apply
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1162
            arr[preferredDoc.childNodes.length].nodeType;
        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1163
        catch (e) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1164
            push = {
                apply: arr.length ? // Leverage slice if possible
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1167
                function(target, els) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1168
                    push_native.apply(target, slice.call(els));
                } : // Support: IE<9
                // Otherwise append directly
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1173
                function(target, els) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1174
                    var j = target.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1175
                    i = 0;
                    // Can't trust NodeList.length
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1177
                    while (target[j++] = els[i++]) {}
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1178
                    target.length = j - 1;
                }
            };
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1183
        function Sizzle(selector, context, results, seed) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1184
            var match, elem, m, nodeType, // QSA vars
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1186
            i, groups, old, nid, newContext, newSelector;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1188
            if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1189
                setDocument(context);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1192
            context = context || document;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1193
            results = results || [];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1195
            if (!selector || typeof selector !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1196
                return results;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1199
            if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1200
                return [];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1203
            if (documentIsHTML && !seed) {
                // Shortcuts
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1206
                if (match = rquickExpr.exec(selector)) {
                    // Speed-up: Sizzle("#ID")
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1208
                    if (m = match[1]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1209
                        if (nodeType === 9) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1210
                            elem = context.getElementById(m);
                            // Check parentNode to catch when Blackberry 4.6 returns
                            // nodes that are no longer in the document #6963
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1213
                            if (elem && elem.parentNode) {
                                // Handle the case where IE, Opera, and Webkit return items
                                // by name instead of ID
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1216
                                if (elem.id === m) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1217
                                    results.push(elem);
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1218
                                    return results;
                                }
                            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1220
                            {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1221
                                return results;
                            }
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1223
                        {
                            // Context is not a document
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1225
                            if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1226
                            contains(context, elem) && elem.id === m) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1227
                                results.push(elem);
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1228
                                return results;
                            }
                        }
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1233
                        if (match[2]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1234
                            push.apply(results, context.getElementsByTagName(selector));
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1235
                            return results;
                        } else {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1238
                            if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1239
                                push.apply(results, context.getElementsByClassName(m));
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1240
                                return results;
                            }
                        }
                    }
                }
                // QSA path
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1245
                if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1246
                    nid = old = expando;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1247
                    newContext = context;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1248
                    newSelector = nodeType === 9 && selector;
                    // qSA works strangely on Element-rooted queries
                    // We can work around this by specifying an extra ID on the root
                    // and working up from there (Thanks to Andrew Dupont for the technique)
                    // IE 8 doesn't work on object elements
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1254
                    if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1255
                        groups = tokenize(selector);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1257
                        if (old = context.getAttribute("id")) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1258
                            nid = old.replace(rescape, "\\$&");
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1259
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1260
                            context.setAttribute("id", nid);
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1262
                        nid = "[id='" + nid + "'] ";
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1264
                        i = groups.length;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1265
                        while (i--) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1266
                            groups[i] = nid + toSelector(groups[i]);
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1268
                        newContext = rsibling.test(selector) && context.parentNode || context;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1269
                        newSelector = groups.join(",");
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1272
                    if (newSelector) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1273
                        try {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1274
                            push.apply(results, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1275
                            newContext.querySelectorAll(newSelector));
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1277
                            return results;
                        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1278
                        catch (qsaError) {} //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1279
                        finally {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1280
                            if (!old) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1281
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
            // All others
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1289
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1298
        function createCache() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1299
            var keys = [];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1301
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1303
                if (keys.push(key += " ") > Expr.cacheLength) {
                    // Only keep the most recent entries
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1305
                    delete cache[keys.shift()];
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1307
                return cache[key] = value;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1309
            return cache;
        }
        /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1316
        function markFunction(fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1317
            fn[expando] = true;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1318
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1325
        function assert(fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1326
            var div = document.createElement("div");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1328
            try {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1329
                return !!fn(div);
            } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1330
            catch (e) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1331
                return false;
            } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1332
            finally {
                // Remove from its parent by default
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1334
                if (div.parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1335
                    div.parentNode.removeChild(div);
                }
                // release memory in IE
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1338
                div = null;
            }
        }
        /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1347
        function addHandle(attrs, handler) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1348
            var arr = attrs.split("|"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1349
            i = attrs.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1351
            while (i--) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1352
                Expr.attrHandle[arr[i]] = handler;
            }
        }
        /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1362
        function siblingCheck(a, b) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1363
            var cur = b && a, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1364
            diff = cur && a.nodeType === 1 && b.nodeType === 1 && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1365
            (~b.sourceIndex || MAX_NEGATIVE) - (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1366
            ~a.sourceIndex || MAX_NEGATIVE);
            // Use IE sourceIndex if available on both nodes
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1369
            if (diff) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1370
                return diff;
            }
            // Check if b follows a
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1374
            if (cur) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1375
                while (cur = cur.nextSibling) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1376
                    if (cur === b) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1377
                        return -1;
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1382
            return a ? 1 : -1;
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1389
        function createInputPseudo(type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1390
            return function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1391
                var name = elem.nodeName.toLowerCase();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1392
                return name === "input" && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1400
        function createButtonPseudo(type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1401
            return function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1402
                var name = elem.nodeName.toLowerCase();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1403
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1411
        function createPositionalPseudo(fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1412
            return markFunction(function(argument) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1413
                argument = +argument;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1414
                return markFunction(function(seed, matches) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1415
                    var j, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1416
                    matchIndexes = fn([], seed.length, argument), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1417
                    i = matchIndexes.length;
                    // Match elements found at the specified indexes
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1420
                    while (i--) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1421
                        if (seed[j = matchIndexes[i]]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1422
                            seed[j] = !(matches[j] = seed[j]);
                        }
                    }
                });
            });
        }
        /**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1433
        isXML = Sizzle.isXML = function(elem) {
            // documentElement is verified for cases where it doesn't yet exist
            // (such as loading iframes in IE - #4833)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1436
            var documentElement = elem && (elem.ownerDocument || elem).documentElement;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1437
            return documentElement ? documentElement.nodeName !== "HTML" : false;
        };
        // Expose support vars for convenience
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1441
        support = Sizzle.support = {};
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1448
        setDocument = Sizzle.setDocument = function(node) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1449
            var doc = node ? node.ownerDocument || node : preferredDoc, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1450
            parent = doc.defaultView;
            // If no document and documentElement is available, return
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1453
            if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1454
                return document;
            }
            // Set our document
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1458
            document = doc;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1459
            docElem = doc.documentElement;
            // Support tests
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1462
            documentIsHTML = !isXML(doc);
            // Support: IE>8
            // If iframe document is assigned to "document" variable and if iframe has been reloaded,
            // IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
            // IE6-8 do not support the defaultView property so parent will be undefined
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1468
            if (parent && parent.attachEvent && parent !== parent.top) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1469
                parent.attachEvent("onbeforeunload", function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1470
                    setDocument();
                });
            }
            /* Attributes
	---------------------------------------------------------------------- */
            // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1479
            support.attributes = assert(function(div) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1480
                div.className = "i";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1481
                return !div.getAttribute("className");
            });
            /* getElement(s)By*
	---------------------------------------------------------------------- */
            // Check if getElementsByTagName("*") returns only elements
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1488
            support.getElementsByTagName = assert(function(div) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1489
                div.appendChild(doc.createComment(""));
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1490
                return !div.getElementsByTagName("*").length;
            });
            // Check if getElementsByClassName can be trusted
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1494
            support.getElementsByClassName = assert(function(div) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1495
                div.innerHTML = "<div class='a'></div><div class='a i'></div>";
                // Support: Safari<4
                // Catch class over-caching
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1499
                div.firstChild.className = "i";
                // Support: Opera<10
                // Catch gEBCN failure to find non-leading classes
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1502
                return div.getElementsByClassName("i").length === 2;
            });
            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programatically-set names,
            // so use a roundabout getElementsByName test
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1509
            support.getById = assert(function(div) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1510
                docElem.appendChild(div).id = expando;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1511
                return !doc.getElementsByName || !doc.getElementsByName(expando).length;
            });
            // ID find and filter
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1515
            if (support.getById) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1516
                Expr.find["ID"] = function(id, context) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1517
                    if (typeof context.getElementById !== strundefined && documentIsHTML) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1518
                        var m = context.getElementById(id);
                        // Check parentNode to catch when Blackberry 4.6 returns
                        // nodes that are no longer in the document #6963
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1521
                        return m && m.parentNode ? [ m ] : [];
                    }
                };
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1524
                Expr.filter["ID"] = function(id) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1525
                    var attrId = id.replace(runescape, funescape);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1526
                    return function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1527
                        return elem.getAttribute("id") === attrId;
                    };
                };
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1530
            {
                // Support: IE6/7
                // getElementById is not reliable as a find shortcut
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1533
                delete Expr.find["ID"];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1535
                Expr.filter["ID"] = function(id) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1536
                    var attrId = id.replace(runescape, funescape);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1537
                    return function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1538
                        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1539
                        return node && node.value === attrId;
                    };
                };
            }
            // Tag
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1545
            Expr.find["TAG"] = support.getElementsByTagName ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1546
            function(tag, context) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1547
                if (typeof context.getElementsByTagName !== strundefined) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1548
                    return context.getElementsByTagName(tag);
                }
            } : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1551
            function(tag, context) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1552
                var elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1553
                tmp = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1554
                i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1555
                results = context.getElementsByTagName(tag);
                // Filter out possible comments
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1558
                if (tag === "*") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1559
                    while (elem = results[i++]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1560
                        if (elem.nodeType === 1) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1561
                            tmp.push(elem);
                        }
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1565
                    return tmp;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1567
                return results;
            };
            // Class
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1571
            Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1572
                if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1573
                    return context.getElementsByClassName(className);
                }
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */
            // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1583
            rbuggyMatches = [];
            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See http://bugs.jquery.com/ticket/13378
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1590
            rbuggyQSA = [];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1592
            if (support.qsa = rnative.test(doc.querySelectorAll)) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1595
                assert(function(div) {
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // http://bugs.jquery.com/ticket/12359
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1601
                    div.innerHTML = "<select><option selected=''></option></select>";
                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1605
                    if (!div.querySelectorAll("[selected]").length) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1606
                        rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    }
                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1612
                    if (!div.querySelectorAll(":checked").length) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1613
                        rbuggyQSA.push(":checked");
                    }
                });
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1617
                assert(function(div) {
                    // Support: Opera 10-12/IE8
                    // ^= $= *= and empty values
                    // Should not select anything
                    // Support: Windows 8 Native Apps
                    // The type attribute is restricted during .innerHTML assignment
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1624
                    var input = doc.createElement("input");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1625
                    input.setAttribute("type", "hidden");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1626
                    div.appendChild(input).setAttribute("t", "");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1628
                    if (div.querySelectorAll("[t^='']").length) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1629
                        rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    }
                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1634
                    if (!div.querySelectorAll(":enabled").length) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1635
                        rbuggyQSA.push(":enabled", ":disabled");
                    }
                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1639
                    div.querySelectorAll("*,:x");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1640
                    rbuggyQSA.push(",.*:");
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1644
            if (support.matchesSelector = rnative.test(matches = docElem.webkitMatchesSelector || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1645
            docElem.mozMatchesSelector || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1646
            docElem.oMatchesSelector || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1647
            docElem.msMatchesSelector)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1649
                assert(function(div) {
                    // Check to see if it's possible to do matchesSelector
                    // on a disconnected node (IE 9)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1652
                    support.disconnectedMatch = matches.call(div, "div");
                    // This should fail with an exception
                    // Gecko does not error, returns false instead
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1656
                    matches.call(div, "[s!='']:x");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1657
                    rbuggyMatches.push("!=", pseudos);
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1661
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1662
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            /* Contains
	---------------------------------------------------------------------- */
            // Element contains another
            // Purposefully does not implement inclusive descendent
            // As in, an element does not contain itself
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1670
            contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1671
            function(a, b) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1672
                var adown = a.nodeType === 9 ? a.documentElement : a, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1673
                bup = b && b.parentNode;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1674
                return a === bup || !!(bup && bup.nodeType === 1 && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1675
                adown.contains ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1676
                adown.contains(bup) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1677
                a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1680
            function(a, b) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1681
                if (b) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1682
                    while (b = b.parentNode) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1683
                        if (b === a) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1684
                            return true;
                        }
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1688
                return false;
            };
            /* Sorting
	---------------------------------------------------------------------- */
            // Document order sorting
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1695
            sortOrder = docElem.compareDocumentPosition ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1696
            function(a, b) {
                // Flag for duplicate removal
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1699
                if (a === b) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1700
                    hasDuplicate = true;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1701
                    return 0;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1704
                var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1706
                if (compare) {
                    // Disconnected nodes
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1708
                    if (compare & 1 || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1709
                    !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                        // Choose the first element that is related to our preferred document
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1712
                        if (a === doc || contains(preferredDoc, a)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1713
                            return -1;
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1715
                        if (b === doc || contains(preferredDoc, b)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1716
                            return 1;
                        }
                        // Maintain original order
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1720
                        return sortInput ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1721
                        indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1722
                        0;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1725
                    return compare & 4 ? -1 : 1;
                }
                // Not directly comparable, sort on existence of method
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1729
                return a.compareDocumentPosition ? -1 : 1;
            } : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1731
            function(a, b) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1732
                var cur, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1733
                i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1734
                aup = a.parentNode, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1735
                bup = b.parentNode, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1736
                ap = [ a ], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1737
                bp = [ b ];
                // Exit early if the nodes are identical
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1740
                if (a === b) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1741
                    hasDuplicate = true;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1742
                    return 0;
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1745
                    if (!aup || !bup) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1746
                        return a === doc ? -1 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1747
                        b === doc ? 1 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1748
                        aup ? -1 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1749
                        bup ? 1 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1750
                        sortInput ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1751
                        indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1752
                        0;
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1755
                        if (aup === bup) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1756
                            return siblingCheck(a, b);
                        }
                    }
                }
                // Otherwise we need full lists of their ancestors for comparison
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1760
                cur = a;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1761
                while (cur = cur.parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1762
                    ap.unshift(cur);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1764
                cur = b;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1765
                while (cur = cur.parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1766
                    bp.unshift(cur);
                }
                // Walk down the tree looking for a discrepancy
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1770
                while (ap[i] === bp[i]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1771
                    i++;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1774
                return i ? // Do a sibling check if the nodes have a common ancestor
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1776
                siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1779
                ap[i] === preferredDoc ? -1 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1780
                bp[i] === preferredDoc ? 1 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1781
                0;
            };
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1784
            return doc;
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1787
        Sizzle.matches = function(expr, elements) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1788
            return Sizzle(expr, null, null, elements);
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1791
        Sizzle.matchesSelector = function(elem, expr) {
            // Set document vars if needed
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1793
            if ((elem.ownerDocument || elem) !== document) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1794
                setDocument(elem);
            }
            // Make sure that attribute selectors are quoted
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1798
            expr = expr.replace(rattributeQuotes, "='$1']");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1800
            if (support.matchesSelector && documentIsHTML && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1801
            !rbuggyMatches || !rbuggyMatches.test(expr)) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1802
            !rbuggyQSA || !rbuggyQSA.test(expr))) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1804
                try {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1805
                    var ret = matches.call(elem, expr);
                    // IE 9's matchesSelector returns false on disconnected nodes
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1808
                    if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                    // fragment in IE 9
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1811
                    elem.document && elem.document.nodeType !== 11) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1812
                        return ret;
                    }
                } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1814
                catch (e) {}
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1817
            return Sizzle(expr, document, null, [ elem ]).length > 0;
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1820
        Sizzle.contains = function(context, elem) {
            // Set document vars if needed
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1822
            if ((context.ownerDocument || context) !== document) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1823
                setDocument(context);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1825
            return contains(context, elem);
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1828
        Sizzle.attr = function(elem, name) {
            // Set document vars if needed
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1830
            if ((elem.ownerDocument || elem) !== document) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1831
                setDocument(elem);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1834
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1836
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1837
            fn(elem, name, !documentIsHTML) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1838
            undefined;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1840
            return val === undefined ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1841
            support.attributes || !documentIsHTML ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1842
            elem.getAttribute(name) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1843
            (val = elem.getAttributeNode(name)) && val.specified ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1844
            val.value : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1845
            null : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1846
            val;
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1849
        Sizzle.error = function(msg) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1850
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1857
        Sizzle.uniqueSort = function(results) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1858
            var elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1859
            duplicates = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1860
            j = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1861
            i = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1864
            hasDuplicate = !support.detectDuplicates;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1865
            sortInput = !support.sortStable && results.slice(0);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1866
            results.sort(sortOrder);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1868
            if (hasDuplicate) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1869
                while (elem = results[i++]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1870
                    if (elem === results[i]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1871
                        j = duplicates.push(i);
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1874
                while (j--) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1875
                    results.splice(duplicates[j], 1);
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1879
            return results;
        };
        /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1886
        getText = Sizzle.getText = function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1887
            var node, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1888
            ret = "", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1889
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1890
            nodeType = elem.nodeType;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1892
            if (!nodeType) {
                // If no nodeType, this is expected to be an array
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1894
                for (;node = elem[i]; i++) {
                    // Do not traverse comment nodes
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1896
                    ret += getText(node);
                }
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1898
                if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (see #11153)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1901
                    if (typeof elem.textContent === "string") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1902
                        return elem.textContent;
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1903
                    {
                        // Traverse its children
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1905
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1906
                            ret += getText(elem);
                        }
                    }
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1909
                    if (nodeType === 3 || nodeType === 4) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1910
                        return elem.nodeValue;
                    }
                }
            }
            // Do not include comment or processing instruction nodes
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1914
            return ret;
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1917
        Expr = Sizzle.selectors = {
            // Can be adjusted by the user
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1920
            cacheLength: 50,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1922
            createPseudo: markFunction,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1924
            match: matchExpr,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1926
            attrHandle: {},
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1928
            find: {},
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1930
            relative: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1931
                ">": {
                    dir: "parentNode",
                    first: true
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1932
                " ": {
                    dir: "parentNode"
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1933
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1934
                "~": {
                    dir: "previousSibling"
                }
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1937
            preFilter: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1938
                ATTR: function(match) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1939
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1942
                    match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1944
                    if (match[2] === "~=") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1945
                        match[3] = " " + match[3] + " ";
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1948
                    return match.slice(0, 4);
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1951
                CHILD: function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1962
                    match[1] = match[1].toLowerCase();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1964
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1966
                        if (!match[3]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1967
                            Sizzle.error(match[0]);
                        }
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1972
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1973
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1976
                        if (match[3]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1977
                            Sizzle.error(match[0]);
                        }
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1980
                    return match;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1983
                PSEUDO: function(match) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1984
                    var excess, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1985
                    unquoted = !match[5] && match[2];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1987
                    if (matchExpr["CHILD"].test(match[0])) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1988
                        return null;
                    }
                    // Accept quoted arguments as-is
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1992
                    if (match[3] && match[4] !== undefined) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1993
                        match[2] = match[4];
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1996
                        if (unquoted && rpseudo.test(unquoted) && (// Get excess from tokenize (recursively)
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 1998
                        excess = tokenize(unquoted, true)) && (// advance to the next closing parenthesis
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2000
                        excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                            // excess is a negative index
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2003
                            match[0] = match[0].slice(0, excess);
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2004
                            match[2] = unquoted.slice(0, excess);
                        }
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2008
                    return match.slice(0, 3);
                }
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2012
            filter: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2014
                TAG: function(nodeNameSelector) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2015
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2016
                    return nodeNameSelector === "*" ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2017
                    function() {
                        return true;
                    } : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2018
                    function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2019
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2023
                CLASS: function(className) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2024
                    var pattern = classCache[className + " "];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2026
                    return pattern || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2027
                    (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2028
                    classCache(className, function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2029
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
                    });
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2033
                ATTR: function(name, operator, check) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2034
                    return function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2035
                        var result = Sizzle.attr(elem, name);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2037
                        if (result == null) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2038
                            return operator === "!=";
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2040
                        if (!operator) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2041
                            return true;
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2044
                        result += "";
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2046
                        return operator === "=" ? result === check : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2047
                        operator === "!=" ? result !== check : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2048
                        operator === "^=" ? check && result.indexOf(check) === 0 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2049
                        operator === "*=" ? check && result.indexOf(check) > -1 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2050
                        operator === "$=" ? check && result.slice(-check.length) === check : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2051
                        operator === "~=" ? (" " + result + " ").indexOf(check) > -1 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2052
                        operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2053
                        false;
                    };
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2057
                CHILD: function(type, what, argument, first, last) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2058
                    var simple = type.slice(0, 3) !== "nth", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2059
                    forward = type.slice(-4) !== "last", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2060
                    ofType = what === "of-type";
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2062
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2065
                    function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2066
                        return !!elem.parentNode;
                    } : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2069
                    function(elem, context, xml) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2070
                        var cache, outerCache, node, diff, nodeIndex, start, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2071
                        dir = simple !== forward ? "nextSibling" : "previousSibling", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2072
                        parent = elem.parentNode, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2073
                        name = ofType && elem.nodeName.toLowerCase(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2074
                        useCache = !xml && !ofType;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2076
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2079
                            if (simple) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2080
                                while (dir) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2081
                                    node = elem;
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2082
                                    while (node = node[dir]) {
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2083
                                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2084
                                            return false;
                                        }
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2088
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2090
                                return true;
                            }
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2093
                            start = [ forward ? parent.firstChild : parent.lastChild ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2096
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2098
                                outerCache = parent[expando] || (parent[expando] = {});
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2099
                                cache = outerCache[type] || [];
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2100
                                nodeIndex = cache[0] === dirruns && cache[1];
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2101
                                diff = cache[0] === dirruns && cache[2];
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2102
                                node = nodeIndex && parent.childNodes[nodeIndex];
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2104
                                while (node = ++nodeIndex && node && node[dir] || (// Fallback to seeking `elem` from the start
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2107
                                diff = nodeIndex = 0) || start.pop()) {
                                    // When found, cache indexes on `parent` and break
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2110
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2111
                                        outerCache[type] = [ dirruns, nodeIndex, diff ];
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2112
                                        break;
                                    }
                                }
                            } else {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2117
                                if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2118
                                    diff = cache[1];
                                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2121
                                {
                                    // Use the same loop as above to seek `elem` from the start
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2123
                                    while (node = ++nodeIndex && node && node[dir] || (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2124
                                    diff = nodeIndex = 0) || start.pop()) {
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2126
                                        if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                            // Cache the index of each encountered element
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2128
                                            if (useCache) {
                                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2129
                                                (node[expando] || (node[expando] = {}))[type] = [ dirruns, diff ];
                                            }
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2132
                                            if (node === elem) {
                                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2133
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2140
                            diff -= last;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2141
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2146
                PSEUDO: function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2151
                    var args, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2152
                    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2153
                    Sizzle.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2158
                    if (fn[expando]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2159
                        return fn(argument);
                    }
                    // But maintain support for old signatures
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2163
                    if (fn.length > 1) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2164
                        args = [ pseudo, pseudo, "", argument ];
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2165
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2166
                        markFunction(function(seed, matches) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2167
                            var idx, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2168
                            matched = fn(seed, argument), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2169
                            i = matched.length;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2170
                            while (i--) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2171
                                idx = indexOf.call(seed, matched[i]);
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2172
                                seed[idx] = !(matches[idx] = matched[i]);
                            }
                        }) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2175
                        function(elem) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2176
                            return fn(elem, 0, args);
                        };
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2180
                    return fn;
                }
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2184
            pseudos: {
                // Potentially complex pseudos
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2186
                not: markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2190
                    var input = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2191
                    results = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2192
                    matcher = compile(selector.replace(rtrim, "$1"));
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2194
                    return matcher[expando] ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2195
                    markFunction(function(seed, matches, context, xml) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2196
                        var elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2197
                        unmatched = matcher(seed, null, xml, []), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2198
                        i = seed.length;
                        // Match elements unmatched by `matcher`
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2201
                        while (i--) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2202
                            if (elem = unmatched[i]) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2203
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2207
                    function(elem, context, xml) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2208
                        input[0] = elem;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2209
                        matcher(input, null, xml, results);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2210
                        return !results.pop();
                    };
                }),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2214
                has: markFunction(function(selector) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2215
                    return function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2216
                        return Sizzle(selector, elem).length > 0;
                    };
                }),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2220
                contains: markFunction(function(text) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2221
                    return function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2222
                        return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2233
                lang: markFunction(function(lang) {
                    // lang value must be a valid identifier
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2235
                    if (!ridentifier.test(lang || "")) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2236
                        Sizzle.error("unsupported lang: " + lang);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2238
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2239
                    return function(elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2240
                        var elemLang;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2241
                        do {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2242
                            if (elemLang = documentIsHTML ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2243
                            elem.lang : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2244
                            elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2246
                                elemLang = elemLang.toLowerCase();
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2247
                                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                            }
                        } while (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2249
                        (elem = elem.parentNode) && elem.nodeType === 1);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2250
                        return false;
                    };
                }),
                // Miscellaneous
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2255
                target: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2256
                    var hash = window.location && window.location.hash;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2257
                    return hash && hash.slice(1) === elem.id;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2260
                root: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2261
                    return elem === docElem;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2264
                focus: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2265
                    return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2269
                enabled: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2270
                    return elem.disabled === false;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2273
                disabled: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2274
                    return elem.disabled === true;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2277
                checked: function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2280
                    var nodeName = elem.nodeName.toLowerCase();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2281
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2284
                selected: function(elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2287
                    if (elem.parentNode) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2288
                        elem.parentNode.selectedIndex;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2291
                    return elem.selected === true;
                },
                // Contents
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2295
                empty: function(elem) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
                    //   not comment, processing instructions, or others
                    // Thanks to Diego Perini for the nodeName shortcut
                    //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2301
                    for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2302
                        if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2303
                            return false;
                        }
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2306
                    return true;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2309
                parent: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2310
                    return !Expr.pseudos["empty"](elem);
                },
                // Element/input types
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2314
                header: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2315
                    return rheader.test(elem.nodeName);
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2318
                input: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2319
                    return rinputs.test(elem.nodeName);
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2322
                button: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2323
                    var name = elem.nodeName.toLowerCase();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2324
                    return name === "input" && elem.type === "button" || name === "button";
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2327
                text: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2328
                    var attr;
                    // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
                    // use getAttribute instead to test this case
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2331
                    return elem.nodeName.toLowerCase() === "input" && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2332
                    elem.type === "text" && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2333
                    (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
                },
                // Position-in-collection
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2337
                first: createPositionalPseudo(function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2338
                    return [ 0 ];
                }),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2341
                last: createPositionalPseudo(function(matchIndexes, length) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2342
                    return [ length - 1 ];
                }),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2345
                eq: createPositionalPseudo(function(matchIndexes, length, argument) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2346
                    return [ argument < 0 ? argument + length : argument ];
                }),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2349
                even: createPositionalPseudo(function(matchIndexes, length) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2350
                    var i = 0;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2351
                    for (;i < length; i += 2) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2352
                        matchIndexes.push(i);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2354
                    return matchIndexes;
                }),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2357
                odd: createPositionalPseudo(function(matchIndexes, length) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2358
                    var i = 1;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2359
                    for (;i < length; i += 2) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2360
                        matchIndexes.push(i);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2362
                    return matchIndexes;
                }),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2365
                lt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2366
                    var i = argument < 0 ? argument + length : argument;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2367
                    for (;--i >= 0; ) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2368
                        matchIndexes.push(i);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2370
                    return matchIndexes;
                }),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2373
                gt: createPositionalPseudo(function(matchIndexes, length, argument) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2374
                    var i = argument < 0 ? argument + length : argument;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2375
                    for (;++i < length; ) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2376
                        matchIndexes.push(i);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2378
                    return matchIndexes;
                })
            }
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2383
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        // Add button/input type pseudos
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2386
        for (i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2387
            Expr.pseudos[i] = createInputPseudo(i);
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2389
        for (i in {
            submit: true,
            reset: true
        }) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2390
            Expr.pseudos[i] = createButtonPseudo(i);
        }
        // Easy API for creating new setFilters
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2394
        function setFilters() {}
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2395
        setFilters.prototype = Expr.filters = Expr.pseudos;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2396
        Expr.setFilters = new setFilters();
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2398
        function tokenize(selector, parseOnly) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2399
            var matched, match, tokens, type, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2400
            soFar, groups, preFilters, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2401
            cached = tokenCache[selector + " "];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2403
            if (cached) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2404
                return parseOnly ? 0 : cached.slice(0);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2407
            soFar = selector;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2408
            groups = [];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2409
            preFilters = Expr.preFilter;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2411
            while (soFar) {
                // Comma and first run
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2414
                if (!matched || (match = rcomma.exec(soFar))) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2415
                    if (match) {
                        // Don't consume trailing commas as valid
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2417
                        soFar = soFar.slice(match[0].length) || soFar;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2419
                    groups.push(tokens = []);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2422
                matched = false;
                // Combinators
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2425
                if (match = rcombinators.exec(soFar)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2426
                    matched = match.shift();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2427
                    tokens.push({
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2428
                        value: matched,
                        // Cast descendant combinators to space
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2430
                        type: match[0].replace(rtrim, " ")
                    });
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2432
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2436
                for (type in Expr.filter) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2437
                    if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2438
                    match = preFilters[type](match)))) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2439
                        matched = match.shift();
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2440
                        tokens.push({
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2441
                            value: matched,
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2442
                            type: type,
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2443
                            matches: match
                        });
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2445
                        soFar = soFar.slice(matched.length);
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2449
                if (!matched) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2450
                    break;
                }
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2457
            return parseOnly ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2458
            soFar.length : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2459
            soFar ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2460
            Sizzle.error(selector) : // Cache the tokens
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2462
            tokenCache(selector, groups).slice(0);
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2465
        function toSelector(tokens) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2466
            var i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2467
            len = tokens.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2468
            selector = "";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2469
            for (;i < len; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2470
                selector += tokens[i].value;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2472
            return selector;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2475
        function addCombinator(matcher, combinator, base) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2476
            var dir = combinator.dir, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2477
            checkNonElements = base && dir === "parentNode", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2478
            doneName = done++;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2480
            return combinator.first ? // Check against closest ancestor/preceding element
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2482
            function(elem, context, xml) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2483
                while (elem = elem[dir]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2484
                    if (elem.nodeType === 1 || checkNonElements) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2485
                        return matcher(elem, context, xml);
                    }
                }
            } : // Check against all ancestor/preceding elements
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2491
            function(elem, context, xml) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2492
                var data, cache, outerCache, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2493
                dirkey = dirruns + " " + doneName;
                // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2496
                if (xml) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2497
                    while (elem = elem[dir]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2498
                        if (elem.nodeType === 1 || checkNonElements) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2499
                            if (matcher(elem, context, xml)) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2500
                                return true;
                            }
                        }
                    }
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2504
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2505
                    while (elem = elem[dir]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2506
                        if (elem.nodeType === 1 || checkNonElements) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2507
                            outerCache = elem[expando] || (elem[expando] = {});
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2508
                            if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2509
                                if ((data = cache[1]) === true || data === cachedruns) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2510
                                    return data === true;
                                }
                            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2512
                            {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2513
                                cache = outerCache[dir] = [ dirkey ];
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2514
                                cache[1] = matcher(elem, context, xml) || cachedruns;
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2515
                                if (cache[1] === true) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2516
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2525
        function elementMatcher(matchers) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2526
            return matchers.length > 1 ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2527
            function(elem, context, xml) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2528
                var i = matchers.length;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2529
                while (i--) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2530
                    if (!matchers[i](elem, context, xml)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2531
                        return false;
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2534
                return true;
            } : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2536
            matchers[0];
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2539
        function condense(unmatched, map, filter, context, xml) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2540
            var elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2541
            newUnmatched = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2542
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2543
            len = unmatched.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2544
            mapped = map != null;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2546
            for (;i < len; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2547
                if (elem = unmatched[i]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2548
                    if (!filter || filter(elem, context, xml)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2549
                        newUnmatched.push(elem);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2550
                        if (mapped) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2551
                            map.push(i);
                        }
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2557
            return newUnmatched;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2560
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2561
            if (postFilter && !postFilter[expando]) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2562
                postFilter = setMatcher(postFilter);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2564
            if (postFinder && !postFinder[expando]) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2565
                postFinder = setMatcher(postFinder, postSelector);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2567
            return markFunction(function(seed, results, context, xml) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2568
                var temp, i, elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2569
                preMap = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2570
                postMap = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2571
                preexisting = results.length, // Get initial elements from seed or context
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2574
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2577
                matcherIn = preFilter && (seed || !selector) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2578
                condense(elems, preMap, preFilter, context, xml) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2579
                elems, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2581
                matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2583
                postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2586
                [] : // ...otherwise use results directly
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2589
                results : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2590
                matcherIn;
                // Find primary matches
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2593
                if (matcher) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2594
                    matcher(matcherIn, matcherOut, context, xml);
                }
                // Apply postFilter
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2598
                if (postFilter) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2599
                    temp = condense(matcherOut, postMap);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2600
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2603
                    i = temp.length;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2604
                    while (i--) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2605
                        if (elem = temp[i]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2606
                            matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                        }
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2611
                if (seed) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2612
                    if (postFinder || preFilter) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2613
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2615
                            temp = [];
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2616
                            i = matcherOut.length;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2617
                            while (i--) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2618
                                if (elem = matcherOut[i]) {
                                    // Restore matcherIn since elem is not yet a final match
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2620
                                    temp.push(matcherIn[i] = elem);
                                }
                            }
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2623
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2627
                        i = matcherOut.length;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2628
                        while (i--) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2629
                            if ((elem = matcherOut[i]) && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2630
                            (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2632
                                seed[temp] = !(results[temp] = elem);
                            }
                        }
                    }
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2638
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2639
                    matcherOut = condense(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2640
                    matcherOut === results ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2641
                    matcherOut.splice(preexisting, matcherOut.length) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2642
                    matcherOut);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2644
                    if (postFinder) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2645
                        postFinder(null, results, matcherOut, xml);
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2646
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2647
                        push.apply(results, matcherOut);
                    }
                }
            });
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2653
        function matcherFromTokens(tokens) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2654
            var checkContext, matcher, j, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2655
            len = tokens.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2656
            leadingRelative = Expr.relative[tokens[0].type], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2657
            implicitRelative = leadingRelative || Expr.relative[" "], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2658
            i = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2661
            matchContext = addCombinator(function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2662
                return elem === checkContext;
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2663
            implicitRelative, true), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2664
            matchAnyContext = addCombinator(function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2665
                return indexOf.call(checkContext, elem) > -1;
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2666
            implicitRelative, true), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2667
            matchers = [ function(elem, context, xml) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2668
                return !leadingRelative && (xml || context !== outermostContext) || (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2669
                (checkContext = context).nodeType ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2670
                matchContext(elem, context, xml) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2671
                matchAnyContext(elem, context, xml));
            } ];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2674
            for (;i < len; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2675
                if (matcher = Expr.relative[tokens[i].type]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2676
                    matchers = [ addCombinator(elementMatcher(matchers), matcher) ];
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2677
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2678
                    matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                    // Return special upon seeing a positional matcher
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2681
                    if (matcher[expando]) {
                        // Find the next relative operator (if any) for proper handling
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2683
                        j = ++i;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2684
                        for (;j < len; j++) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2685
                            if (Expr.relative[tokens[j].type]) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2686
                                break;
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2689
                        return setMatcher(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2690
                        i > 1 && elementMatcher(matchers), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2691
                        i > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2693
                        tokens.slice(0, i - 1).concat({
                            value: tokens[i - 2].type === " " ? "*" : ""
                        })).replace(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2694
                        rtrim, "$1"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2695
                        matcher, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2696
                        i < j && matcherFromTokens(tokens.slice(i, j)), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2697
                        j < len && matcherFromTokens(tokens = tokens.slice(j)), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2698
                        j < len && toSelector(tokens));
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2701
                    matchers.push(matcher);
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2705
            return elementMatcher(matchers);
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2708
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            // A counter to specify which element is currently being matched
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2710
            var matcherCachedRuns = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2711
            bySet = setMatchers.length > 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2712
            byElement = elementMatchers.length > 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2713
            superMatcher = function(seed, context, xml, results, expandContext) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2714
                var elem, j, matcher, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2715
                setMatched = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2716
                matchedCount = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2717
                i = "0", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2718
                unmatched = seed && [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2719
                outermost = expandContext != null, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2720
                contextBackup = outermostContext, // We must always have either seed elements or context
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2722
                elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context), // Use integer dirruns iff this is the outermost matcher
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2724
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2726
                if (outermost) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2727
                    outermostContext = context !== document && context;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2728
                    cachedruns = matcherCachedRuns;
                }
                // Add elements passing elementMatchers directly to results
                // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2733
                for (;(elem = elems[i]) != null; i++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2734
                    if (byElement && elem) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2735
                        j = 0;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2736
                        while (matcher = elementMatchers[j++]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2737
                            if (matcher(elem, context, xml)) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2738
                                results.push(elem);
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2739
                                break;
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2742
                        if (outermost) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2743
                            dirruns = dirrunsUnique;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2744
                            cachedruns = ++matcherCachedRuns;
                        }
                    }
                    // Track unmatched elements for set filters
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2749
                    if (bySet) {
                        // They will have gone through all possible matchers
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2751
                        if (elem = !matcher && elem) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2752
                            matchedCount--;
                        }
                        // Lengthen the array for every element, matched or not
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2756
                        if (seed) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2757
                            unmatched.push(elem);
                        }
                    }
                }
                // Apply set filters to unmatched elements
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2763
                matchedCount += i;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2764
                if (bySet && i !== matchedCount) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2765
                    j = 0;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2766
                    while (matcher = setMatchers[j++]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2767
                        matcher(unmatched, setMatched, context, xml);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2770
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2772
                        if (matchedCount > 0) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2773
                            while (i--) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2774
                                if (!(unmatched[i] || setMatched[i])) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2775
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }
                        // Discard index placeholder values to get only actual matches
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2781
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2785
                    push.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2788
                    if (outermost && !seed && setMatched.length > 0 && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2789
                    matchedCount + setMatchers.length > 1) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2791
                        Sizzle.uniqueSort(results);
                    }
                }
                // Override manipulation of globals by nested matchers
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2796
                if (outermost) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2797
                    dirruns = dirrunsUnique;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2798
                    outermostContext = contextBackup;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2801
                return unmatched;
            };
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2804
            return bySet ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2805
            markFunction(superMatcher) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2806
            superMatcher;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2809
        compile = Sizzle.compile = function(selector, group) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2810
            var i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2811
            setMatchers = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2812
            elementMatchers = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2813
            cached = compilerCache[selector + " "];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2815
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2817
                if (!group) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2818
                    group = tokenize(selector);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2820
                i = group.length;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2821
                while (i--) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2822
                    cached = matcherFromTokens(group[i]);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2823
                    if (cached[expando]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2824
                        setMatchers.push(cached);
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2825
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2826
                        elementMatchers.push(cached);
                    }
                }
                // Cache the compiled function
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2831
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2833
            return cached;
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2836
        function multipleContexts(selector, contexts, results) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2837
            var i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2838
            len = contexts.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2839
            for (;i < len; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2840
                Sizzle(selector, contexts[i], results);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2842
            return results;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2845
        function select(selector, context, results, seed) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2846
            var i, tokens, token, type, find, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2847
            match = tokenize(selector);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2849
            if (!seed) {
                // Try to minimize operations if there is only one group
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2851
                if (match.length === 1) {
                    // Take a shortcut and set the context if the root selector is an ID
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2854
                    tokens = match[0] = match[0].slice(0);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2855
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2856
                    support.getById && context.nodeType === 9 && documentIsHTML && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2857
                    Expr.relative[tokens[1].type]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2859
                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2860
                        if (!context) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2861
                            return results;
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2863
                        selector = selector.slice(tokens.shift().value.length);
                    }
                    // Fetch a seed set for right-to-left matching
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2867
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2868
                    while (i--) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2869
                        token = tokens[i];
                        // Abort if we hit a combinator
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2872
                        if (Expr.relative[type = token.type]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2873
                            break;
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2875
                        if (find = Expr.find[type]) {
                            // Search, expanding context for leading sibling combinators
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2877
                            if (seed = find(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2878
                            token.matches[0].replace(runescape, funescape), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2879
                            rsibling.test(tokens[0].type) && context.parentNode || context)) //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2880
                            {
                                // If seed is empty or no tokens remain, we can return early
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2883
                                tokens.splice(i, 1);
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2884
                                selector = seed.length && toSelector(tokens);
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2885
                                if (!selector) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2886
                                    push.apply(results, seed);
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2887
                                    return results;
                                }
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2890
                                break;
                            }
                        }
                    }
                }
            }
            // Compile and execute a filtering function
            // Provide `match` to avoid retokenization if we modified the selector above
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2899
            compile(selector, match)(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2900
            seed, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2901
            context, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2902
            !documentIsHTML, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2903
            results, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2904
            rsibling.test(selector));
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2906
            return results;
        }
        // One-time assignments
        // Sort stability
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2912
        support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Support: Chrome<14
        // Always assume duplicates if they aren't passed to the comparison function
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2916
        support.detectDuplicates = hasDuplicate;
        // Initialize against the default document
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2919
        setDocument();
        // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2923
        support.sortDetached = assert(function(div1) {
            // Should return 1, but returns 4 (following)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2925
            return div1.compareDocumentPosition(document.createElement("div")) & 1;
        });
        // Support: IE<8
        // Prevent attribute/property "interpolation"
        // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2931
        if (!assert(function(div) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2932
            div.innerHTML = "<a href='#'></a>";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2933
            return div.firstChild.getAttribute("href") === "#";
        })) //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2934
        {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2935
            addHandle("type|href|height|width", function(elem, name, isXML) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2936
                if (!isXML) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2937
                    return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                }
            });
        }
        // Support: IE<9
        // Use defaultValue in place of getAttribute("value")
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2944
        if (!support.attributes || !assert(function(div) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2945
            div.innerHTML = "<input/>";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2946
            div.firstChild.setAttribute("value", "");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2947
            return div.firstChild.getAttribute("value") === "";
        })) //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2948
        {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2949
            addHandle("value", function(elem, name, isXML) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2950
                if (!isXML && elem.nodeName.toLowerCase() === "input") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2951
                    return elem.defaultValue;
                }
            });
        }
        // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2958
        if (!assert(function(div) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2959
            return div.getAttribute("disabled") == null;
        })) //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2960
        {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2961
            addHandle(booleans, function(elem, name, isXML) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2962
                var val;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2963
                if (!isXML) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2964
                    return (val = elem.getAttributeNode(name)) && val.specified ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2965
                    val.value : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2966
                    elem[name] === true ? name.toLowerCase() : null;
                }
            });
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2971
        jQuery.find = Sizzle;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2972
        jQuery.expr = Sizzle.selectors;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2973
        jQuery.expr[":"] = jQuery.expr.pseudos;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2974
        jQuery.unique = Sizzle.uniqueSort;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2975
        jQuery.text = Sizzle.getText;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2976
        jQuery.isXMLDoc = Sizzle.isXML;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2977
        jQuery.contains = Sizzle.contains;
    })(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2980
    window);
    // String to Object options format cache
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2982
    var optionsCache = {};
    // Convert String-formatted options into Object-formatted ones and store in cache
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2985
    function createOptions(options) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2986
        var object = optionsCache[options] = {};
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2987
        jQuery.each(options.match(core_rnotwhite) || [], function(_, flag) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2988
            object[flag] = true;
        });
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 2990
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3015
    jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3019
        options = typeof options === "string" ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3020
        optionsCache[options] || createOptions(options) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3021
        jQuery.extend({}, options);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3023
        var // Flag to know if list is currently firing
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3024
        firing, // Last fire value (for non-forgettable lists)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3026
        memory, // Flag to know if list was already fired
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3028
        fired, // End of the loop when firing
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3030
        firingLength, // Index of currently firing callback (modified by remove if needed)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3032
        firingIndex, // First callback to fire (used internally by add and fireWith)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3034
        firingStart, // Actual callback list
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3036
        list = [], // Stack of fire calls for repeatable lists
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3038
        stack = !options.once && [], // Fire callbacks
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3040
        fire = function(data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3041
            memory = options.memory && data;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3042
            fired = true;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3043
            firingIndex = firingStart || 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3044
            firingStart = 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3045
            firingLength = list.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3046
            firing = true;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3047
            for (;list && firingIndex < firingLength; firingIndex++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3048
                if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3049
                    memory = false;
                    // To prevent further calls using add
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3050
                    break;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3053
            firing = false;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3054
            if (list) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3055
                if (stack) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3056
                    if (stack.length) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3057
                        fire(stack.shift());
                    }
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3059
                    if (memory) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3060
                        list = [];
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3061
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3062
                        self.disable();
                    }
                }
            }
        }, // Actual Callbacks object
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3067
        self = {
            // Add a callback or a collection of callbacks to the list
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3069
            add: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3070
                if (list) {
                    // First, we save the current length
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3072
                    var start = list.length;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3073
                    (function add(args) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3074
                        jQuery.each(args, function(_, arg) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3075
                            var type = jQuery.type(arg);
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3076
                            if (type === "function") {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3077
                                if (!options.unique || !self.has(arg)) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3078
                                    list.push(arg);
                                }
                            } else {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3080
                                if (arg && arg.length && type !== "string") {
                                    // Inspect recursively
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3082
                                    add(arg);
                                }
                            }
                        });
                    })(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3085
                    arguments);
                    // Do we need to add the callbacks to the
                    // current firing batch?
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3088
                    if (firing) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3089
                        firingLength = list.length;
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3092
                        if (memory) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3093
                            firingStart = start;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3094
                            fire(memory);
                        }
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3097
                return this;
            },
            // Remove a callback from the list
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3100
            remove: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3101
                if (list) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3102
                    jQuery.each(arguments, function(_, arg) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3103
                        var index;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3104
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3105
                            list.splice(index, 1);
                            // Handle firing indexes
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3107
                            if (firing) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3108
                                if (index <= firingLength) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3109
                                    firingLength--;
                                }
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3111
                                if (index <= firingIndex) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3112
                                    firingIndex--;
                                }
                            }
                        }
                    });
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3118
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3122
            has: function(fn) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3123
                return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
            },
            // Remove all callbacks from the list
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3126
            empty: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3127
                list = [];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3128
                firingLength = 0;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3129
                return this;
            },
            // Have the list do nothing anymore
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3132
            disable: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3133
                list = stack = memory = undefined;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3134
                return this;
            },
            // Is it disabled?
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3137
            disabled: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3138
                return !list;
            },
            // Lock the list in its current state
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3141
            lock: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3142
                stack = undefined;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3143
                if (!memory) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3144
                    self.disable();
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3146
                return this;
            },
            // Is it locked?
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3149
            locked: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3150
                return !stack;
            },
            // Call all callbacks with the given context and arguments
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3153
            fireWith: function(context, args) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3154
                if (list && (!fired || stack)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3155
                    args = args || [];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3156
                    args = [ context, args.slice ? args.slice() : args ];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3157
                    if (firing) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3158
                        stack.push(args);
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3159
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3160
                        fire(args);
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3163
                return this;
            },
            // Call all the callbacks with the given arguments
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3166
            fire: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3167
                self.fireWith(this, arguments);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3168
                return this;
            },
            // To know if the callbacks have already been called at least once
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3171
            fired: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3172
                return !!fired;
            }
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3176
        return self;
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3178
    jQuery.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3180
        Deferred: function(func) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3181
            var tuples = [ // action, add listener, listener list, final state
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3183
            [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3184
            [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3185
            [ "notify", "progress", jQuery.Callbacks("memory") ] ], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3187
            state = "pending", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3188
            promise = {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3189
                state: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3190
                    return state;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3192
                always: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3193
                    deferred.done(arguments).fail(arguments);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3194
                    return this;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3196
                then: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3197
                    var fns = arguments;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3198
                    return jQuery.Deferred(function(newDefer) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3199
                        jQuery.each(tuples, function(i, tuple) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3200
                            var action = tuple[0], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3201
                            fn = jQuery.isFunction(fns[i]) && fns[i];
                            // deferred[ done | fail | progress ] for forwarding actions to newDefer
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3203
                            deferred[tuple[1]](function() {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3204
                                var returned = fn && fn.apply(this, arguments);
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3205
                                if (returned && jQuery.isFunction(returned.promise)) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3206
                                    returned.promise().done(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3207
                                    newDefer.resolve).fail(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3208
                                    newDefer.reject).progress(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3209
                                    newDefer.notify);
                                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3210
                                {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3211
                                    newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments);
                                }
                            });
                        });
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3215
                        fns = null;
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3220
                promise: function(obj) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3221
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3224
            deferred = {};
            // Keep pipe for back-compat
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3227
            promise.pipe = promise.then;
            // Add list-specific methods
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3230
            jQuery.each(tuples, function(i, tuple) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3231
                var list = tuple[2], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3232
                stateString = tuple[3];
                // promise[ done | fail | progress ] = list.add
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3235
                promise[tuple[1]] = list.add;
                // Handle state
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3238
                if (stateString) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3239
                    list.add(function() {
                        // state = [ resolved | rejected ]
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3241
                        state = stateString;
                    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3244
                    tuples[i ^ 1][2].disable, tuples[2][2].lock);
                }
                // deferred[ resolve | reject | notify ]
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3248
                deferred[tuple[0]] = function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3249
                    deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3250
                    return this;
                };
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3252
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3256
            promise.promise(deferred);
            // Call given func if any
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3259
            if (func) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3260
                func.call(deferred, deferred);
            }
            // All done!
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3264
            return deferred;
        },
        // Deferred helper
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3268
        when: function(subordinate) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3269
            var i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3270
            resolveValues = core_slice.call(arguments), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3271
            length = resolveValues.length, // the count of uncompleted subordinates
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3274
            remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3277
            deferred = remaining === 1 ? subordinate : jQuery.Deferred(), // Update function for both resolve and progress values
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3280
            updateFunc = function(i, contexts, values) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3281
                return function(value) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3282
                    contexts[i] = this;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3283
                    values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3284
                    if (values === progressValues) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3285
                        deferred.notifyWith(contexts, values);
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3286
                        if (!--remaining) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3287
                            deferred.resolveWith(contexts, values);
                        }
                    }
                };
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3292
            progressValues, progressContexts, resolveContexts;
            // add listeners to Deferred subordinates; treat others as resolved
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3295
            if (length > 1) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3296
                progressValues = new Array(length);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3297
                progressContexts = new Array(length);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3298
                resolveContexts = new Array(length);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3299
                for (;i < length; i++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3300
                    if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3301
                        resolveValues[i].promise().done(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3302
                        updateFunc(i, resolveContexts, resolveValues)).fail(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3303
                        deferred.reject).progress(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3304
                        updateFunc(i, progressContexts, progressValues));
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3305
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3306
                        --remaining;
                    }
                }
            }
            // if we're not waiting on anything, resolve the master
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3312
            if (!remaining) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3313
                deferred.resolveWith(resolveContexts, resolveValues);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3316
            return deferred.promise();
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3319
    jQuery.support = function(support) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3321
        var all, a, input, select, fragment, opt, eventName, isSupported, i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3322
        div = document.createElement("div");
        // Setup
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3325
        div.setAttribute("className", "t");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3326
        div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        // Finish early in limited (non-browser) environments
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3329
        all = div.getElementsByTagName("*") || [];
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3330
        a = div.getElementsByTagName("a")[0];
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3331
        if (!a || !a.style || !all.length) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3332
            return support;
        }
        // First batch of tests
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3336
        select = document.createElement("select");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3337
        opt = select.appendChild(document.createElement("option"));
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3338
        input = div.getElementsByTagName("input")[0];
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3340
        a.style.cssText = "top:1px;float:left;opacity:.5";
        // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3343
        support.getSetAttribute = div.className !== "t";
        // IE strips leading whitespace when .innerHTML is used
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3346
        support.leadingWhitespace = div.firstChild.nodeType === 3;
        // Make sure that tbody elements aren't automatically inserted
        // IE will insert them into empty tables
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3350
        support.tbody = !div.getElementsByTagName("tbody").length;
        // Make sure that link elements get serialized correctly by innerHTML
        // This requires a wrapper element in IE
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3354
        support.htmlSerialize = !!div.getElementsByTagName("link").length;
        // Get the style information from getAttribute
        // (IE uses .cssText instead)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3358
        support.style = /top/.test(a.getAttribute("style"));
        // Make sure that URLs aren't manipulated
        // (IE normalizes it by default)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3362
        support.hrefNormalized = a.getAttribute("href") === "/a";
        // Make sure that element opacity exists
        // (IE uses filter instead)
        // Use a regex to work around a WebKit issue. See #5145
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3367
        support.opacity = /^0.5/.test(a.style.opacity);
        // Verify style float existence
        // (IE uses styleFloat instead of cssFloat)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3371
        support.cssFloat = !!a.style.cssFloat;
        // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3374
        support.checkOn = !!input.value;
        // Make sure that a selected-by-default option has a working selected property.
        // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3378
        support.optSelected = opt.selected;
        // Tests for enctype support on a form (#6743)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3381
        support.enctype = !!document.createElement("form").enctype;
        // Makes sure cloning an html5 element does not cause problems
        // Where outerHTML is undefined, this still works
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3385
        support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        // Will be defined later
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3388
        support.inlineBlockNeedsLayout = false;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3389
        support.shrinkWrapBlocks = false;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3390
        support.pixelPosition = false;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3391
        support.deleteExpando = true;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3392
        support.noCloneEvent = true;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3393
        support.reliableMarginRight = true;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3394
        support.boxSizingReliable = true;
        // Make sure checked status is properly cloned
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3397
        input.checked = true;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3398
        support.noCloneChecked = input.cloneNode(true).checked;
        // Make sure that the options inside disabled selects aren't marked as disabled
        // (WebKit marks them as disabled)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3402
        select.disabled = true;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3403
        support.optDisabled = !opt.disabled;
        // Support: IE<9
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3406
        try {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3407
            delete div.test;
        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3408
        catch (e) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3409
            support.deleteExpando = false;
        }
        // Check if we can trust getAttribute("value")
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3413
        input = document.createElement("input");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3414
        input.setAttribute("value", "");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3415
        support.input = input.getAttribute("value") === "";
        // Check if an input maintains its value after becoming a radio
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3418
        input.value = "t";
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3419
        input.setAttribute("type", "radio");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3420
        support.radioValue = input.value === "t";
        // #11217 - WebKit loses check when the name is after the checked attribute
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3423
        input.setAttribute("checked", "t");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3424
        input.setAttribute("name", "t");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3426
        fragment = document.createDocumentFragment();
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3427
        fragment.appendChild(input);
        // Check if a disconnected checkbox will retain its checked
        // value of true after appended to the DOM (IE6/7)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3431
        support.appendChecked = input.checked;
        // WebKit doesn't clone checked state correctly in fragments
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3434
        support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE<9
        // Opera does not clone events (and typeof div.attachEvent === undefined).
        // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3439
        if (div.attachEvent) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3440
            div.attachEvent("onclick", function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3441
                support.noCloneEvent = false;
            });
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3444
            div.cloneNode(true).click();
        }
        // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
        // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3449
        for (i in {
            submit: true,
            change: true,
            focusin: true
        }) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3450
            div.setAttribute(eventName = "on" + i, "t");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3452
            support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3455
        div.style.backgroundClip = "content-box";
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3456
        div.cloneNode(true).style.backgroundClip = "";
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3457
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        // Support: IE<9
        // Iteration over object's inherited properties before its own.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3461
        for (i in jQuery(support)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3462
            break;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3464
        support.ownLast = i !== "0";
        // Run tests that need a body at doc ready
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3467
        jQuery(function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3468
            var container, marginDiv, tds, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3469
            divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3470
            body = document.getElementsByTagName("body")[0];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3472
            if (!body) {
                // Return for frameset docs that don't have a body
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3474
                return;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3477
            container = document.createElement("div");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3478
            container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3480
            body.appendChild(container).appendChild(div);
            // Support: IE8
            // Check if table cells still have offsetWidth/Height when they are set
            // to display:none and there are still other visible table cells in a
            // table row; if so, offsetWidth/Height are not reliable for use when
            // determining if an element has been hidden directly using
            // display:none (it is still safe to use offsets if a parent element is
            // hidden; don safety goggles and see bug #4512 for more information).
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3489
            div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3490
            tds = div.getElementsByTagName("td");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3491
            tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3492
            isSupported = tds[0].offsetHeight === 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3494
            tds[0].style.display = "";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3495
            tds[1].style.display = "none";
            // Support: IE8
            // Check if empty table cells still have offsetWidth/Height
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3499
            support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
            // Check box-sizing and margin behavior.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3502
            div.innerHTML = "";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3503
            div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            // Workaround failing boxSizing test due to offsetWidth returning wrong value
            // with some non-1 values of body zoom, ticket #13543
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3507
            jQuery.swap(body, body.style.zoom != null ? {
                zoom: 1
            } : {}, function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3508
                support.boxSizing = div.offsetWidth === 4;
            });
            // Use window.getComputedStyle because jsdom on node.js will break without it.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3512
            if (window.getComputedStyle) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3513
                support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3514
                support.boxSizingReliable = (window.getComputedStyle(div, null) || {
                    width: "4px"
                }).width === "4px";
                // Check if div with explicit width and no margin-right incorrectly
                // gets computed margin-right based on width of container. (#3333)
                // Fails in WebKit before Feb 2011 nightlies
                // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3520
                marginDiv = div.appendChild(document.createElement("div"));
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3521
                marginDiv.style.cssText = div.style.cssText = divReset;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3522
                marginDiv.style.marginRight = marginDiv.style.width = "0";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3523
                div.style.width = "1px";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3525
                support.reliableMarginRight = //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3526
                !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3529
            if (typeof div.style.zoom !== core_strundefined) {
                // Support: IE<8
                // Check if natively block-level elements act like inline-block
                // elements when setting their display to 'inline' and giving
                // them layout
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3534
                div.innerHTML = "";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3535
                div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3536
                support.inlineBlockNeedsLayout = div.offsetWidth === 3;
                // Support: IE6
                // Check if elements with layout shrink-wrap their children
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3540
                div.style.display = "block";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3541
                div.innerHTML = "<div></div>";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3542
                div.firstChild.style.width = "5px";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3543
                support.shrinkWrapBlocks = div.offsetWidth !== 3;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3545
                if (support.inlineBlockNeedsLayout) {
                    // Prevent IE 6 from affecting layout for positioned elements #11048
                    // Prevent IE from shrinking the body in IE 7 mode #12869
                    // Support: IE<8
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3549
                    body.style.zoom = 1;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3553
            body.removeChild(container);
            // Null elements to avoid leaks in IE
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3556
            container = div = tds = marginDiv = null;
        });
        // Null elements to avoid leaks in IE
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3560
        all = select = fragment = opt = a = input = null;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3562
        return support;
    }(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3563
    {});
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3565
    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3566
    rmultiDash = /([A-Z])/g;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3568
    function internalData(elem, name, data, pvt) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3569
        if (!jQuery.acceptData(elem)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3570
            return;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3573
        var ret, thisCache, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3574
        internalKey = jQuery.expando, // We have to handle DOM nodes and JS objects differently because IE6-7
        // can't GC object references properly across the DOM-JS boundary
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3578
        isNode = elem.nodeType, // Only DOM nodes need the global jQuery cache; JS object data is
        // attached directly to the object so GC can occur automatically
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3582
        cache = isNode ? jQuery.cache : elem, // Only defining an ID for JS objects if its cache already exists allows
        // the code to shortcut on the same path as a DOM node with no cache
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3586
        id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        // Avoid doing any more work than we need to when trying to get data on an
        // object that has no data at all
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3590
        if ((!id || !cache[id] || !pvt && !cache[id].data) && data === undefined && typeof name === "string") {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3591
            return;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3594
        if (!id) {
            // Only DOM nodes need a new unique ID for each element since their data
            // ends up in the global cache
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3597
            if (isNode) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3598
                id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++;
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3599
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3600
                id = internalKey;
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3604
        if (!cache[id]) {
            // Avoid exposing jQuery metadata on plain JS objects when the object
            // is serialized using JSON.stringify
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3607
            cache[id] = isNode ? {} : {
                toJSON: jQuery.noop
            };
        }
        // An object can be passed to jQuery.data instead of a key/value pair; this gets
        // shallow copied over onto the existing cache
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3612
        if (typeof name === "object" || typeof name === "function") {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3613
            if (pvt) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3614
                cache[id] = jQuery.extend(cache[id], name);
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3615
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3616
                cache[id].data = jQuery.extend(cache[id].data, name);
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3620
        thisCache = cache[id];
        // jQuery data() is stored in a separate object inside the object's internal data
        // cache in order to avoid key collisions between internal data and user-defined
        // data.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3625
        if (!pvt) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3626
            if (!thisCache.data) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3627
                thisCache.data = {};
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3630
            thisCache = thisCache.data;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3633
        if (data !== undefined) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3634
            thisCache[jQuery.camelCase(name)] = data;
        }
        // Check for both converted-to-camel and non-converted data property names
        // If a data property was specified
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3639
        if (typeof name === "string") {
            // First Try to find as-is property data
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3642
            ret = thisCache[name];
            // Test for null|undefined property data
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3645
            if (ret == null) {
                // Try to find the camelCased property
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3648
                ret = thisCache[jQuery.camelCase(name)];
            }
        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3650
        {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3651
            ret = thisCache;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3654
        return ret;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3657
    function internalRemoveData(elem, name, pvt) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3658
        if (!jQuery.acceptData(elem)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3659
            return;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3662
        var thisCache, i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3663
        isNode = elem.nodeType, // See jQuery.data for more information
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3666
        cache = isNode ? jQuery.cache : elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3667
        id = isNode ? elem[jQuery.expando] : jQuery.expando;
        // If there is already no cache entry for this object, there is no
        // purpose in continuing
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3671
        if (!cache[id]) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3672
            return;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3675
        if (name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3677
            thisCache = pvt ? cache[id] : cache[id].data;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3679
            if (thisCache) {
                // Support array or space separated string names for data keys
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3682
                if (!jQuery.isArray(name)) {
                    // try the string as a key before any manipulation
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3685
                    if (name in thisCache) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3686
                        name = [ name ];
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3687
                    {
                        // split the camel cased version by spaces unless a key with the spaces exists
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3690
                        name = jQuery.camelCase(name);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3691
                        if (name in thisCache) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3692
                            name = [ name ];
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3693
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3694
                            name = name.split(" ");
                        }
                    }
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3697
                {
                    // If "name" is an array of keys...
                    // When data is initially created, via ("key", "val") signature,
                    // keys will be converted to camelCase.
                    // Since there is no way to tell _how_ a key was added, remove
                    // both plain key and camelCase key. #12786
                    // This will only penalize the array argument path.
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3704
                    name = name.concat(jQuery.map(name, jQuery.camelCase));
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3707
                i = name.length;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3708
                while (i--) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3709
                    delete thisCache[name[i]];
                }
                // If there is no data left in the cache, we want to continue
                // and let the cache object itself get destroyed
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3714
                if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3715
                    return;
                }
            }
        }
        // See jQuery.data for more information
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3721
        if (!pvt) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3722
            delete cache[id].data;
            // Don't destroy the parent cache unless the internal data object
            // had been the only thing left in it
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3726
            if (!isEmptyDataObject(cache[id])) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3727
                return;
            }
        }
        // Destroy the cache
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3732
        if (isNode) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3733
            jQuery.cleanData([ elem ], true);
        } else {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3737
            if (jQuery.support.deleteExpando || cache != cache.window) {
                /* jshint eqeqeq: true */
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3739
                delete cache[id];
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3742
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3743
                cache[id] = null;
            }
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3747
    jQuery.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3748
        cache: {},
        // The following elements throw uncatchable exceptions if you
        // attempt to add expando properties to them.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3752
        noData: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3753
            applet: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3754
            embed: true,
            // Ban all objects except for Flash (which handle expandos)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3756
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3759
        hasData: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3760
            elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3761
            return !!elem && !isEmptyDataObject(elem);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3764
        data: function(elem, name, data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3765
            return internalData(elem, name, data);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3768
        removeData: function(elem, name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3769
            return internalRemoveData(elem, name);
        },
        // For internal use only.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3773
        _data: function(elem, name, data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3774
            return internalData(elem, name, data, true);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3777
        _removeData: function(elem, name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3778
            return internalRemoveData(elem, name, true);
        },
        // A method for determining if a DOM node can handle the data expando
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3782
        acceptData: function(elem) {
            // Do not set data on non-element because it will not be cleared (#8335).
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3784
            if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3785
                return false;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3788
            var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
            // nodes accept data unless otherwise specified; rejection can be conditional
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3791
            return !noData || noData !== true && elem.getAttribute("classid") === noData;
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3795
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3796
        data: function(key, value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3797
            var attrs, name, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3798
            data = null, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3799
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3800
            elem = this[0];
            // Special expections of .data basically thwart jQuery.access,
            // so implement the relevant behavior ourselves
            // Gets all values
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3806
            if (key === undefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3807
                if (this.length) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3808
                    data = jQuery.data(elem);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3810
                    if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3811
                        attrs = elem.attributes;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3812
                        for (;i < attrs.length; i++) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3813
                            name = attrs[i].name;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3815
                            if (name.indexOf("data-") === 0) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3816
                                name = jQuery.camelCase(name.slice(5));
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3818
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3821
                        jQuery._data(elem, "parsedAttrs", true);
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3825
                return data;
            }
            // Sets multiple values
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3829
            if (typeof key === "object") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3830
                return this.each(function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3831
                    jQuery.data(this, key);
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3835
            return arguments.length > 1 ? // Sets one value
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3838
            this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3839
                jQuery.data(this, key, value);
            }) : // Gets one value
            // Try to fetch any internally stored data first
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3844
            elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3847
        removeData: function(key) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3848
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3849
                jQuery.removeData(this, key);
            });
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3854
    function dataAttr(elem, key, data) {
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3857
        if (data === undefined && elem.nodeType === 1) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3859
            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3861
            data = elem.getAttribute(name);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3863
            if (typeof data === "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3864
                try {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3865
                    data = data === "true" ? true : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3866
                    data === "false" ? false : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3867
                    data === "null" ? null : // Only convert to a number if it doesn't change the string
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3869
                    +data + "" === data ? +data : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3870
                    rbrace.test(data) ? jQuery.parseJSON(data) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3871
                    data;
                } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3872
                catch (e) {}
                // Make sure we set the data so it isn't changed later
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3875
                jQuery.data(elem, key, data);
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3877
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3878
                data = undefined;
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3882
        return data;
    }
    // checks a cache object for emptiness
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3886
    function isEmptyDataObject(obj) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3887
        var name;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3888
        for (name in obj) {
            // if the public data object is empty, the private is still empty
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3891
            if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3892
                continue;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3894
            if (name !== "toJSON") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3895
                return false;
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3899
        return true;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3901
    jQuery.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3902
        queue: function(elem, type, data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3903
            var queue;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3905
            if (elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3906
                type = (type || "fx") + "queue";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3907
                queue = jQuery._data(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3910
                if (data) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3911
                    if (!queue || jQuery.isArray(data)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3912
                        queue = jQuery._data(elem, type, jQuery.makeArray(data));
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3913
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3914
                        queue.push(data);
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3917
                return queue || [];
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3921
        dequeue: function(elem, type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3922
            type = type || "fx";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3924
            var queue = jQuery.queue(elem, type), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3925
            startLength = queue.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3926
            fn = queue.shift(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3927
            hooks = jQuery._queueHooks(elem, type), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3928
            next = function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3929
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3933
            if (fn === "inprogress") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3934
                fn = queue.shift();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3935
                startLength--;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3938
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3942
                if (type === "fx") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3943
                    queue.unshift("inprogress");
                }
                // clear up the last queue stop function
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3947
                delete hooks.stop;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3948
                fn.call(elem, next, hooks);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3951
            if (!startLength && hooks) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3952
                hooks.empty.fire();
            }
        },
        // not intended for public consumption - generates a queueHooks object, or returns the current one
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3957
        _queueHooks: function(elem, type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3958
            var key = type + "queueHooks";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3959
            return jQuery._data(elem, key) || jQuery._data(elem, key, {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3960
                empty: jQuery.Callbacks("once memory").add(function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3961
                    jQuery._removeData(elem, type + "queue");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3962
                    jQuery._removeData(elem, key);
                })
            });
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3968
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3969
        queue: function(type, data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3970
            var setter = 2;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3972
            if (typeof type !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3973
                data = type;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3974
                type = "fx";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3975
                setter--;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3978
            if (arguments.length < setter) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3979
                return jQuery.queue(this[0], type);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3982
            return data === undefined ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3983
            this : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3984
            this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3985
                var queue = jQuery.queue(this, type, data);
                // ensure a hooks for this queue
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3988
                jQuery._queueHooks(this, type);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3990
                if (type === "fx" && queue[0] !== "inprogress") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3991
                    jQuery.dequeue(this, type);
                }
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3995
        dequeue: function(type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3996
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 3997
                jQuery.dequeue(this, type);
            });
        },
        // Based off of the plugin by Clint Helfers, with permission.
        // http://blindsignals.com/index.php/2009/07/jquery-delay/
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4002
        delay: function(time, type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4003
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4004
            type = type || "fx";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4006
            return this.queue(type, function(next, hooks) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4007
                var timeout = setTimeout(next, time);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4008
                hooks.stop = function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4009
                    clearTimeout(timeout);
                };
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4013
        clearQueue: function(type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4014
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4018
        promise: function(type, obj) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4019
            var tmp, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4020
            count = 1, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4021
            defer = jQuery.Deferred(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4022
            elements = this, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4023
            i = this.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4024
            resolve = function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4025
                if (!--count) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4026
                    defer.resolveWith(elements, [ elements ]);
                }
            };
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4030
            if (typeof type !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4031
                obj = type;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4032
                type = undefined;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4034
            type = type || "fx";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4036
            while (i--) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4037
                tmp = jQuery._data(elements[i], type + "queueHooks");
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4038
                if (tmp && tmp.empty) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4039
                    count++;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4040
                    tmp.empty.add(resolve);
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4043
            resolve();
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4044
            return defer.promise(obj);
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4047
    var nodeHook, boolHook, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4048
    rclass = /[\t\r\n\f]/g, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4049
    rreturn = /\r/g, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4050
    rfocusable = /^(?:input|select|textarea|button|object)$/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4051
    rclickable = /^(?:a|area)$/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4052
    ruseDefault = /^(?:checked|selected)$/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4053
    getSetAttribute = jQuery.support.getSetAttribute, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4054
    getSetInput = jQuery.support.input;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4056
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4057
        attr: function(name, value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4058
            return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4061
        removeAttr: function(name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4062
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4063
                jQuery.removeAttr(this, name);
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4067
        prop: function(name, value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4068
            return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4071
        removeProp: function(name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4072
            name = jQuery.propFix[name] || name;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4073
            return this.each(function() {
                // try/catch handles cases where IE balks (such as removing a property on window)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4075
                try {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4076
                    this[name] = undefined;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4077
                    delete this[name];
                } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4078
                catch (e) {}
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4082
        addClass: function(value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4083
            var classes, elem, cur, clazz, j, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4084
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4085
            len = this.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4086
            proceed = typeof value === "string" && value;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4088
            if (jQuery.isFunction(value)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4089
                return this.each(function(j) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4090
                    jQuery(this).addClass(value.call(this, j, this.className));
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4094
            if (proceed) {
                // The disjunction here is for better compressibility (see removeClass)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4096
                classes = (value || "").match(core_rnotwhite) || [];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4098
                for (;i < len; i++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4099
                    elem = this[i];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4100
                    cur = elem.nodeType === 1 && (elem.className ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4101
                    (" " + elem.className + " ").replace(rclass, " ") : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4102
                    " ");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4105
                    if (cur) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4106
                        j = 0;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4107
                        while (clazz = classes[j++]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4108
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4109
                                cur += clazz + " ";
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4112
                        elem.className = jQuery.trim(cur);
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4118
            return this;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4121
        removeClass: function(value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4122
            var classes, elem, cur, clazz, j, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4123
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4124
            len = this.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4125
            proceed = arguments.length === 0 || typeof value === "string" && value;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4127
            if (jQuery.isFunction(value)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4128
                return this.each(function(j) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4129
                    jQuery(this).removeClass(value.call(this, j, this.className));
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4132
            if (proceed) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4133
                classes = (value || "").match(core_rnotwhite) || [];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4135
                for (;i < len; i++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4136
                    elem = this[i];
                    // This expression is here for better compressibility (see addClass)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4138
                    cur = elem.nodeType === 1 && (elem.className ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4139
                    (" " + elem.className + " ").replace(rclass, " ") : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4140
                    "");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4143
                    if (cur) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4144
                        j = 0;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4145
                        while (clazz = classes[j++]) {
                            // Remove *all* instances
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4147
                            while (cur.indexOf(" " + clazz + " ") >= 0) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4148
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4151
                        elem.className = value ? jQuery.trim(cur) : "";
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4156
            return this;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4159
        toggleClass: function(value, stateVal) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4160
            var type = typeof value;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4162
            if (typeof stateVal === "boolean" && type === "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4163
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4166
            if (jQuery.isFunction(value)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4167
                return this.each(function(i) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4168
                    jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4172
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4173
                if (type === "string") {
                    // toggle individual class names
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4175
                    var className, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4176
                    i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4177
                    self = jQuery(this), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4178
                    classNames = value.match(core_rnotwhite) || [];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4180
                    while (className = classNames[i++]) {
                        // check each className given, space separated list
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4182
                        if (self.hasClass(className)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4183
                            self.removeClass(className);
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4184
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4185
                            self.addClass(className);
                        }
                    }
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4190
                    if (type === core_strundefined || type === "boolean") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4191
                        if (this.className) {
                            // store className if set
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4193
                            jQuery._data(this, "__className__", this.className);
                        }
                        // If the element has a class name or if we're passed "false",
                        // then remove the whole classname (if there was one, the above saved it).
                        // Otherwise bring back whatever was previously saved (if anything),
                        // falling back to the empty string if nothing was stored.
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4200
                        this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
                    }
                }
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4205
        hasClass: function(selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4206
            var className = " " + selector + " ", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4207
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4208
            l = this.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4209
            for (;i < l; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4210
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4211
                    return true;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4215
            return false;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4218
        val: function(value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4219
            var ret, hooks, isFunction, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4220
            elem = this[0];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4222
            if (!arguments.length) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4223
                if (elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4224
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4226
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4227
                        return ret;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4230
                    ret = elem.value;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4232
                    return typeof ret === "string" ? // handle most common string cases
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4234
                    ret.replace(rreturn, "") : // handle cases where value is null/undef or number
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4236
                    ret == null ? "" : ret;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4239
                return;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4242
            isFunction = jQuery.isFunction(value);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4244
            return this.each(function(i) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4245
                var val;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4247
                if (this.nodeType !== 1) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4248
                    return;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4251
                if (isFunction) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4252
                    val = value.call(this, i, jQuery(this).val());
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4253
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4254
                    val = value;
                }
                // Treat null/undefined as ""; convert numbers to string
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4258
                if (val == null) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4259
                    val = "";
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4260
                    if (typeof val === "number") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4261
                        val += "";
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4262
                        if (jQuery.isArray(val)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4263
                            val = jQuery.map(val, function(value) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4264
                                return value == null ? "" : value + "";
                            });
                        }
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4268
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4271
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4272
                    this.value = val;
                }
            });
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4278
    jQuery.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4279
        valHooks: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4280
            option: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4281
                get: function(elem) {
                    // Use proper attribute retrieval(#6932, #12072)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4283
                    var val = jQuery.find.attr(elem, "value");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4284
                    return val != null ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4285
                    val : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4286
                    elem.text;
                }
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4289
            select: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4290
                get: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4291
                    var value, option, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4292
                    options = elem.options, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4293
                    index = elem.selectedIndex, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4294
                    one = elem.type === "select-one" || index < 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4295
                    values = one ? null : [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4296
                    max = one ? index + 1 : options.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4297
                    i = index < 0 ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4298
                    max : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4299
                    one ? index : 0;
                    // Loop through all the selected options
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4302
                    for (;i < max; i++) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4303
                        option = options[i];
                        // oldIE doesn't update selected after form reset (#2551)
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4306
                        if ((option.selected || i === index) && (// Don't return options that are disabled or in a disabled optgroup
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4308
                        jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4309
                        !option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4312
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4315
                            if (one) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4316
                                return value;
                            }
                            // Multi-Selects return an array
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4320
                            values.push(value);
                        }
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4324
                    return values;
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4327
                set: function(elem, value) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4328
                    var optionSet, option, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4329
                    options = elem.options, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4330
                    values = jQuery.makeArray(value), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4331
                    i = options.length;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4333
                    while (i--) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4334
                        option = options[i];
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4335
                        if (option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4336
                            optionSet = true;
                        }
                    }
                    // force browsers to behave consistently when non-matching value is set
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4341
                    if (!optionSet) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4342
                        elem.selectedIndex = -1;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4344
                    return values;
                }
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4349
        attr: function(elem, name, value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4350
            var hooks, ret, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4351
            nType = elem.nodeType;
            // don't get/set attributes on text, comment and attribute nodes
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4354
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4355
                return;
            }
            // Fallback to prop when attributes are not supported
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4359
            if (typeof elem.getAttribute === core_strundefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4360
                return jQuery.prop(elem, name, value);
            }
            // All attributes are lowercase
            // Grab necessary hook if one is defined
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4365
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4366
                name = name.toLowerCase();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4367
                hooks = jQuery.attrHooks[name] || (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4368
                jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4371
            if (value !== undefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4373
                if (value === null) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4374
                    jQuery.removeAttr(elem, name);
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4376
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4377
                        return ret;
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4379
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4380
                        elem.setAttribute(name, value + "");
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4381
                        return value;
                    }
                }
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4384
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4385
                    return ret;
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4387
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4388
                    ret = jQuery.find.attr(elem, name);
                    // Non-existent attributes return null, we normalize to undefined
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4391
                    return ret == null ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4392
                    undefined : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4393
                    ret;
                }
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4397
        removeAttr: function(elem, value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4398
            var name, propName, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4399
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4400
            attrNames = value && value.match(core_rnotwhite);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4402
            if (attrNames && elem.nodeType === 1) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4403
                while (name = attrNames[i++]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4404
                    propName = jQuery.propFix[name] || name;
                    // Boolean attributes get special treatment (#10870)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4407
                    if (jQuery.expr.match.bool.test(name)) {
                        // Set corresponding property to false
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4409
                        if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4410
                            elem[propName] = false;
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4413
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4414
                            elem[jQuery.camelCase("default-" + name)] = //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4415
                            elem[propName] = false;
                        }
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4419
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4420
                        jQuery.attr(elem, name, "");
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4423
                    elem.removeAttribute(getSetAttribute ? name : propName);
                }
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4428
        attrHooks: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4429
            type: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4430
                set: function(elem, value) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4431
                    if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                        // Setting the type on a radio button after the value resets the value in IE6-9
                        // Reset value to default in case type is set after value during creation
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4434
                        var val = elem.value;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4435
                        elem.setAttribute("type", value);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4436
                        if (val) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4437
                            elem.value = val;
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4439
                        return value;
                    }
                }
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4445
        propFix: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4446
            "for": "htmlFor",
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4447
            "class": "className"
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4450
        prop: function(elem, name, value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4451
            var ret, hooks, notxml, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4452
            nType = elem.nodeType;
            // don't get/set properties on text, comment and attribute nodes
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4455
            if (!elem || nType === 3 || nType === 8 || nType === 2) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4456
                return;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4459
            notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4461
            if (notxml) {
                // Fix name and attach hooks
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4463
                name = jQuery.propFix[name] || name;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4464
                hooks = jQuery.propHooks[name];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4467
            if (value !== undefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4468
                return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4469
                ret : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4470
                elem[name] = value;
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4472
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4473
                return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4474
                ret : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4475
                elem[name];
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4479
        propHooks: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4480
            tabIndex: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4481
                get: function(elem) {
                    // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
                    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4485
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4487
                    return tabindex ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4488
                    parseInt(tabindex, 10) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4489
                    rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4490
                    0 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4491
                    -1;
                }
            }
        }
    });
    // Hooks for boolean attributes
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4498
    boolHook = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4499
        set: function(elem, value, name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4500
            if (value === false) {
                // Remove boolean attributes when set to false
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4502
                jQuery.removeAttr(elem, name);
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4503
                if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
                    // IE<8 needs the *property* name
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4505
                    elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4508
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4509
                    elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4512
            return name;
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4515
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4516
        var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4518
        jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4519
        function(elem, name, isXML) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4520
            var fn = jQuery.expr.attrHandle[name], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4521
            ret = isXML ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4522
            undefined : /* jshint eqeqeq: false */
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4524
            (jQuery.expr.attrHandle[name] = undefined) != //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4525
            getter(elem, name, isXML) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4527
            name.toLowerCase() : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4528
            null;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4529
            jQuery.expr.attrHandle[name] = fn;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4530
            return ret;
        } : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4532
        function(elem, name, isXML) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4533
            return isXML ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4534
            undefined : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4535
            elem[jQuery.camelCase("default-" + name)] ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4536
            name.toLowerCase() : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4537
            null;
        };
    });
    // fix oldIE attroperties
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4542
    if (!getSetInput || !getSetAttribute) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4543
        jQuery.attrHooks.value = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4544
            set: function(elem, value, name) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4545
                if (jQuery.nodeName(elem, "input")) {
                    // Does not return so that setAttribute is also used
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4547
                    elem.defaultValue = value;
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4548
                {
                    // Use nodeHook if defined (#1954); otherwise setAttribute is fine
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4550
                    return nodeHook && nodeHook.set(elem, value, name);
                }
            }
        };
    }
    // IE6/7 do not support getting/setting some attributes with get/setAttribute
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4557
    if (!getSetAttribute) {
        // Use this for any attribute in IE6/7
        // This fixes almost every IE6/7 issue
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4561
        nodeHook = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4562
            set: function(elem, value, name) {
                // Set the existing or create a new attribute node
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4564
                var ret = elem.getAttributeNode(name);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4565
                if (!ret) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4566
                    elem.setAttributeNode(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4567
                    ret = elem.ownerDocument.createAttribute(name));
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4571
                ret.value = value += "";
                // Break association with cloned elements by also using setAttribute (#9646)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4574
                return name === "value" || value === elem.getAttribute(name) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4575
                value : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4576
                undefined;
            }
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4579
        jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords = // Some attributes are constructed with empty-string values when not defined
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4581
        function(elem, name, isXML) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4582
            var ret;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4583
            return isXML ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4584
            undefined : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4585
            (ret = elem.getAttributeNode(name)) && ret.value !== "" ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4586
            ret.value : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4587
            null;
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4589
        jQuery.valHooks.button = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4590
            get: function(elem, name) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4591
                var ret = elem.getAttributeNode(name);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4592
                return ret && ret.specified ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4593
                ret.value : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4594
                undefined;
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4596
            set: nodeHook.set
        };
        // Set contenteditable to false on removals(#10429)
        // Setting to empty string throws an error as an invalid value
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4601
        jQuery.attrHooks.contenteditable = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4602
            set: function(elem, value, name) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4603
                nodeHook.set(elem, value === "" ? false : value, name);
            }
        };
        // Set width and height to auto instead of 0 on empty string( Bug #8150 )
        // This is for removals
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4609
        jQuery.each([ "width", "height" ], function(i, name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4610
            jQuery.attrHooks[name] = {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4611
                set: function(elem, value) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4612
                    if (value === "") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4613
                        elem.setAttribute(name, "auto");
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4614
                        return value;
                    }
                }
            };
        });
    }
    // Some attributes require a special call on IE
    // http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4624
    if (!jQuery.support.hrefNormalized) {
        // href/src property should get the full normalized URL (#10299/#12915)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4626
        jQuery.each([ "href", "src" ], function(i, name) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4627
            jQuery.propHooks[name] = {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4628
                get: function(elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4629
                    return elem.getAttribute(name, 4);
                }
            };
        });
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4635
    if (!jQuery.support.style) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4636
        jQuery.attrHooks.style = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4637
            get: function(elem) {
                // Return undefined in the case of empty string
                // Note: IE uppercases css property names, but if we were to .toLowerCase()
                // .cssText, that would destroy case senstitivity in URL's, like in "background"
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4641
                return elem.style.cssText || undefined;
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4643
            set: function(elem, value) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4644
                return elem.style.cssText = value + "";
            }
        };
    }
    // Safari mis-reports the default selected property of an option
    // Accessing the parent's selectedIndex property fixes it
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4651
    if (!jQuery.support.optSelected) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4652
        jQuery.propHooks.selected = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4653
            get: function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4654
                var parent = elem.parentNode;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4656
                if (parent) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4657
                    parent.selectedIndex;
                    // Make sure that it also works with optgroups, see #5701
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4660
                    if (parent.parentNode) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4661
                        parent.parentNode.selectedIndex;
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4664
                return null;
            }
        };
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4669
    jQuery.each([ //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4670
    "tabIndex", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4671
    "readOnly", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4672
    "maxLength", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4673
    "cellSpacing", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4674
    "cellPadding", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4675
    "rowSpan", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4676
    "colSpan", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4677
    "useMap", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4678
    "frameBorder", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4679
    "contentEditable" ], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4680
    function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4681
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // IE6/7 call enctype encoding
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4685
    if (!jQuery.support.enctype) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4686
        jQuery.propFix.enctype = "encoding";
    }
    // Radios and checkboxes getter/setter
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4690
    jQuery.each([ "radio", "checkbox" ], function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4691
        jQuery.valHooks[this] = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4692
            set: function(elem, value) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4693
                if (jQuery.isArray(value)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4694
                    return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
                }
            }
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4698
        if (!jQuery.support.checkOn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4699
            jQuery.valHooks[this].get = function(elem) {
                // Support: Webkit
                // "" is returned instead of "on" if a value isn't specified
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4702
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4706
    var rformElems = /^(?:input|select|textarea)$/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4707
    rkeyEvent = /^key/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4708
    rmouseEvent = /^(?:mouse|contextmenu)|click/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4709
    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4710
    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4712
    function returnTrue() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4713
        return true;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4716
    function returnFalse() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4717
        return false;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4720
    function safeActiveElement() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4721
        try {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4722
            return document.activeElement;
        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4723
        catch (err) {}
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4730
    jQuery.event = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4732
        global: {},
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4734
        add: function(elem, types, handler, data, selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4735
            var tmp, events, t, handleObjIn, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4736
            special, eventHandle, handleObj, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4737
            handlers, type, namespaces, origType, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4738
            elemData = jQuery._data(elem);
            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4741
            if (!elemData) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4742
                return;
            }
            // Caller can pass in an object of custom data in lieu of the handler
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4746
            if (handler.handler) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4747
                handleObjIn = handler;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4748
                handler = handleObjIn.handler;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4749
                selector = handleObjIn.selector;
            }
            // Make sure that the handler has a unique ID, used to find/remove it later
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4753
            if (!handler.guid) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4754
                handler.guid = jQuery.guid++;
            }
            // Init the element's event structure and main handler, if this is the first
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4758
            if (!(events = elemData.events)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4759
                events = elemData.events = {};
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4761
            if (!(eventHandle = elemData.handle)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4762
                eventHandle = elemData.handle = function(e) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4765
                    return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4766
                    jQuery.event.dispatch.apply(eventHandle.elem, arguments) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4767
                    undefined;
                };
                // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4770
                eventHandle.elem = elem;
            }
            // Handle multiple events separated by a space
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4774
            types = (types || "").match(core_rnotwhite) || [ "" ];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4775
            t = types.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4776
            while (t--) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4777
                tmp = rtypenamespace.exec(types[t]) || [];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4778
                type = origType = tmp[1];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4779
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4782
                if (!type) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4783
                    continue;
                }
                // If event changes its type, use the special event handlers for the changed type
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4787
                special = jQuery.event.special[type] || {};
                // If selector defined, determine special event api type, otherwise given type
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4790
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4793
                special = jQuery.event.special[type] || {};
                // handleObj is passed to all event handlers
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4796
                handleObj = jQuery.extend({
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4797
                    type: type,
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4798
                    origType: origType,
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4799
                    data: data,
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4800
                    handler: handler,
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4801
                    guid: handler.guid,
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4802
                    selector: selector,
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4803
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4804
                    namespace: namespaces.join(".")
                }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4805
                handleObjIn);
                // Init the event handler queue if we're the first
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4808
                if (!(handlers = events[type])) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4809
                    handlers = events[type] = [];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4810
                    handlers.delegateCount = 0;
                    // Only use addEventListener/attachEvent if the special events handler returns false
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4813
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        // Bind the global event handler to the element
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4815
                        if (elem.addEventListener) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4816
                            elem.addEventListener(type, eventHandle, false);
                        } else {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4818
                            if (elem.attachEvent) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4819
                                elem.attachEvent("on" + type, eventHandle);
                            }
                        }
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4824
                if (special.add) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4825
                    special.add.call(elem, handleObj);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4827
                    if (!handleObj.handler.guid) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4828
                        handleObj.handler.guid = handler.guid;
                    }
                }
                // Add to the element's handler list, delegates in front
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4833
                if (selector) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4834
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4835
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4836
                    handlers.push(handleObj);
                }
                // Keep track of which events have ever been used, for event optimization
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4840
                jQuery.event.global[type] = true;
            }
            // Nullify elem to prevent memory leaks in IE
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4844
            elem = null;
        },
        // Detach an event or set of events from an element
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4848
        remove: function(elem, types, handler, selector, mappedTypes) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4849
            var j, handleObj, tmp, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4850
            origCount, t, events, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4851
            special, handlers, type, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4852
            namespaces, origType, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4853
            elemData = jQuery.hasData(elem) && jQuery._data(elem);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4855
            if (!elemData || !(events = elemData.events)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4856
                return;
            }
            // Once for each type.namespace in types; type may be omitted
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4860
            types = (types || "").match(core_rnotwhite) || [ "" ];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4861
            t = types.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4862
            while (t--) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4863
                tmp = rtypenamespace.exec(types[t]) || [];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4864
                type = origType = tmp[1];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4865
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4868
                if (!type) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4869
                    for (type in events) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4870
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4872
                    continue;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4875
                special = jQuery.event.special[type] || {};
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4876
                type = (selector ? special.delegateType : special.bindType) || type;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4877
                handlers = events[type] || [];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4878
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4881
                origCount = j = handlers.length;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4882
                while (j--) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4883
                    handleObj = handlers[j];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4885
                    if ((mappedTypes || origType === handleObj.origType) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4886
                    !handler || handler.guid === handleObj.guid) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4887
                    !tmp || tmp.test(handleObj.namespace)) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4888
                    !selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4889
                        handlers.splice(j, 1);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4891
                        if (handleObj.selector) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4892
                            handlers.delegateCount--;
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4894
                        if (special.remove) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4895
                            special.remove.call(elem, handleObj);
                        }
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4902
                if (origCount && !handlers.length) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4903
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4904
                        jQuery.removeEvent(elem, type, elemData.handle);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4907
                    delete events[type];
                }
            }
            // Remove the expando if it's no longer used
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4912
            if (jQuery.isEmptyObject(events)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4913
                delete elemData.handle;
                // removeData also checks for emptiness and clears the expando if empty
                // so use it instead of delete
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4917
                jQuery._removeData(elem, "events");
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4921
        trigger: function(event, data, elem, onlyHandlers) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4922
            var handle, ontype, cur, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4923
            bubbleType, special, tmp, i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4924
            eventPath = [ elem || document ], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4925
            type = core_hasOwn.call(event, "type") ? event.type : event, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4926
            namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4928
            cur = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4931
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4932
                return;
            }
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4936
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4937
                return;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4940
            if (type.indexOf(".") >= 0) {
                // Namespaced trigger; create a regexp to match event type in handle()
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4942
                namespaces = type.split(".");
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4943
                type = namespaces.shift();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4944
                namespaces.sort();
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4946
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4949
            event = event[jQuery.expando] ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4950
            event : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4951
            new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4954
            event.isTrigger = onlyHandlers ? 2 : 3;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4955
            event.namespace = namespaces.join(".");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4956
            event.namespace_re = event.namespace ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4957
            new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4958
            null;
            // Clean up the event in case it is being reused
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4961
            event.result = undefined;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4962
            if (!event.target) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4963
                event.target = elem;
            }
            // Clone any incoming data and prepend the event, creating the handler arg list
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4967
            data = data == null ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4968
            [ event ] : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4969
            jQuery.makeArray(data, [ event ]);
            // Allow special events to draw outside the lines
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4972
            special = jQuery.event.special[type] || {};
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4973
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4974
                return;
            }
            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4979
            if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4981
                bubbleType = special.delegateType || type;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4982
                if (!rfocusMorph.test(bubbleType + type)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4983
                    cur = cur.parentNode;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4985
                for (;cur; cur = cur.parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4986
                    eventPath.push(cur);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4987
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4991
                if (tmp === (elem.ownerDocument || document)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4992
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }
            // Fire handlers on the event path
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4997
            i = 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 4998
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5000
                event.type = i > 1 ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5001
                bubbleType : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5002
                special.bindType || type;
                // jQuery handler
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5005
                handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5006
                if (handle) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5007
                    handle.apply(cur, data);
                }
                // Native handler
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5011
                handle = ontype && cur[ontype];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5012
                if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5013
                    event.preventDefault();
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5016
            event.type = type;
            // If nobody prevented the default action, do it now
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5019
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5021
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5022
                jQuery.acceptData(elem)) {
                    // Call a native DOM method on the target with the same name name as the event.
                    // Can't use an .isFunction() check here because IE6/7 fails that test.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5027
                    if (ontype && elem[type] && !jQuery.isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5030
                        tmp = elem[ontype];
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5032
                        if (tmp) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5033
                            elem[ontype] = null;
                        }
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5037
                        jQuery.event.triggered = type;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5038
                        try {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5039
                            elem[type]();
                        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5040
                        catch (e) {}
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5044
                        jQuery.event.triggered = undefined;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5046
                        if (tmp) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5047
                            elem[ontype] = tmp;
                        }
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5053
            return event.result;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5056
        dispatch: function(event) {
            // Make a writable jQuery.Event from the native event object
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5059
            event = jQuery.event.fix(event);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5061
            var i, ret, handleObj, matched, j, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5062
            handlerQueue = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5063
            args = core_slice.call(arguments), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5064
            handlers = (jQuery._data(this, "events") || {})[event.type] || [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5065
            special = jQuery.event.special[event.type] || {};
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5068
            args[0] = event;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5069
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5072
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5073
                return;
            }
            // Determine handlers
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5077
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5080
            i = 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5081
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5082
                event.currentTarget = matched.elem;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5084
                j = 0;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5085
                while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                    // Triggered event must either 1) have no namespace, or
                    // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5089
                    if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5091
                        event.handleObj = handleObj;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5092
                        event.data = handleObj.data;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5094
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5095
                        matched.elem, args);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5097
                        if (ret !== undefined) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5098
                            if ((event.result = ret) === false) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5099
                                event.preventDefault();
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5100
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5108
            if (special.postDispatch) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5109
                special.postDispatch.call(this, event);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5112
            return event.result;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5115
        handlers: function(event, handlers) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5116
            var sel, handleObj, matches, i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5117
            handlerQueue = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5118
            delegateCount = handlers.delegateCount, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5119
            cur = event.target;
            // Find delegate handlers
            // Black-hole SVG <use> instance trees (#13180)
            // Avoid non-left-click bubbling in Firefox (#3861)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5124
            if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
                /* jshint eqeqeq: false */
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5127
                for (;cur != this; cur = cur.parentNode || this) {
                    /* jshint eqeqeq: true */
                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5132
                    if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5133
                        matches = [];
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5134
                        for (i = 0; i < delegateCount; i++) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5135
                            handleObj = handlers[i];
                            // Don't conflict with Object.prototype properties (#13203)
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5138
                            sel = handleObj.selector + " ";
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5140
                            if (matches[sel] === undefined) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5141
                                matches[sel] = handleObj.needsContext ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5142
                                jQuery(sel, this).index(cur) >= 0 : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5143
                                jQuery.find(sel, this, null, [ cur ]).length;
                            }
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5145
                            if (matches[sel]) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5146
                                matches.push(handleObj);
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5149
                        if (matches.length) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5150
                            handlerQueue.push({
                                elem: cur,
                                handlers: matches
                            });
                        }
                    }
                }
            }
            // Add the remaining (directly-bound) handlers
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5157
            if (delegateCount < handlers.length) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5158
                handlerQueue.push({
                    elem: this,
                    handlers: handlers.slice(delegateCount)
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5161
            return handlerQueue;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5164
        fix: function(event) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5165
            if (event[jQuery.expando]) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5166
                return event;
            }
            // Create a writable copy of the event object and normalize some properties
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5170
            var i, prop, copy, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5171
            type = event.type, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5172
            originalEvent = event, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5173
            fixHook = this.fixHooks[type];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5175
            if (!fixHook) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5176
                this.fixHooks[type] = fixHook = //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5177
                rmouseEvent.test(type) ? this.mouseHooks : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5178
                rkeyEvent.test(type) ? this.keyHooks : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5179
                {};
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5181
            copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5183
            event = new jQuery.Event(originalEvent);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5185
            i = copy.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5186
            while (i--) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5187
                prop = copy[i];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5188
                event[prop] = originalEvent[prop];
            }
            // Support: IE<9
            // Fix target property (#1925)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5193
            if (!event.target) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5194
                event.target = originalEvent.srcElement || document;
            }
            // Support: Chrome 23+, Safari?
            // Target should not be a text node (#504, #13143)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5199
            if (event.target.nodeType === 3) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5200
                event.target = event.target.parentNode;
            }
            // Support: IE<9
            // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5205
            event.metaKey = !!event.metaKey;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5207
            return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
        },
        // Includes some event props shared by KeyEvent and MouseEvent
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5211
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5213
        fixHooks: {},
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5215
        keyHooks: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5216
            props: "char charCode key keyCode".split(" "),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5217
            filter: function(event, original) {
                // Add which for key events
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5220
                if (event.which == null) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5221
                    event.which = original.charCode != null ? original.charCode : original.keyCode;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5224
                return event;
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5228
        mouseHooks: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5229
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5230
            filter: function(event, original) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5231
                var body, eventDoc, doc, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5232
                button = original.button, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5233
                fromElement = original.fromElement;
                // Calculate pageX/Y if missing and clientX/Y available
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5236
                if (event.pageX == null && original.clientX != null) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5237
                    eventDoc = event.target.ownerDocument || document;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5238
                    doc = eventDoc.documentElement;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5239
                    body = eventDoc.body;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5241
                    event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5242
                    event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
                }
                // Add relatedTarget, if necessary
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5246
                if (!event.relatedTarget && fromElement) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5247
                    event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                }
                // Add which for click: 1 === left; 2 === middle; 3 === right
                // Note: button is not normalized, so don't use it
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5252
                if (!event.which && button !== undefined) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5253
                    event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5256
                return event;
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5260
        special: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5261
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5263
                noBubble: true
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5265
            focus: {
                // Fire native event if possible so blur/focus sequence is correct
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5267
                trigger: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5268
                    if (this !== safeActiveElement() && this.focus) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5269
                        try {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5270
                            this.focus();
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5271
                            return false;
                        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5272
                        catch (e) {}
                    }
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5279
                delegateType: "focusin"
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5281
            blur: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5282
                trigger: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5283
                    if (this === safeActiveElement() && this.blur) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5284
                        this.blur();
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5285
                        return false;
                    }
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5288
                delegateType: "focusout"
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5290
            click: {
                // For checkbox, fire native event so checked state will be right
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5292
                trigger: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5293
                    if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5294
                        this.click();
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5295
                        return false;
                    }
                },
                // For cross-browser consistency, don't fire native .click() on links
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5300
                _default: function(event) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5301
                    return jQuery.nodeName(event.target, "a");
                }
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5305
            beforeunload: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5306
                postDispatch: function(event) {
                    // Even when returnValue equals to undefined Firefox will still show alert
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5309
                    if (event.result !== undefined) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5310
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5316
        simulate: function(type, elem, event, bubble) {
            // Piggyback on a donor event to simulate a different one.
            // Fake originalEvent to avoid donor's stopPropagation, but if the
            // simulated event prevents default then we do the same on the donor.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5320
            var e = jQuery.extend(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5321
            new jQuery.Event(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5322
            event, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5323
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5324
                type: type,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5325
                isSimulated: true,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5326
                originalEvent: {}
            });
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5329
            if (bubble) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5330
                jQuery.event.trigger(e, null, elem);
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5331
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5332
                jQuery.event.dispatch.call(elem, e);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5334
            if (e.isDefaultPrevented()) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5335
                event.preventDefault();
            }
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5340
    jQuery.removeEvent = document.removeEventListener ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5341
    function(elem, type, handle) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5342
        if (elem.removeEventListener) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5343
            elem.removeEventListener(type, handle, false);
        }
    } : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5346
    function(elem, type, handle) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5347
        var name = "on" + type;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5349
        if (elem.detachEvent) {
            // #8545, #7054, preventing memory leaks for custom events in IE6-8
            // detachEvent needed property on element, by name of that event, to properly expose it to GC
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5353
            if (typeof elem[name] === core_strundefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5354
                elem[name] = null;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5357
            elem.detachEvent(name, handle);
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5361
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5363
        if (!(this instanceof jQuery.Event)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5364
            return new jQuery.Event(src, props);
        }
        // Event object
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5368
        if (src && src.type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5369
            this.originalEvent = src;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5370
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5374
            this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5375
            src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;
        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5378
        {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5379
            this.type = src;
        }
        // Put explicitly provided properties onto the event object
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5383
        if (props) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5384
            jQuery.extend(this, props);
        }
        // Create a timestamp if incoming event doesn't have one
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5388
        this.timeStamp = src && src.timeStamp || jQuery.now();
        // Mark it as fixed
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5391
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5396
    jQuery.Event.prototype = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5397
        isDefaultPrevented: returnFalse,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5398
        isPropagationStopped: returnFalse,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5399
        isImmediatePropagationStopped: returnFalse,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5401
        preventDefault: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5402
            var e = this.originalEvent;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5404
            this.isDefaultPrevented = returnTrue;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5405
            if (!e) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5406
                return;
            }
            // If preventDefault exists, run it on the original event
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5410
            if (e.preventDefault) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5411
                e.preventDefault();
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5415
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5416
                e.returnValue = false;
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5419
        stopPropagation: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5420
            var e = this.originalEvent;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5422
            this.isPropagationStopped = returnTrue;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5423
            if (!e) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5424
                return;
            }
            // If stopPropagation exists, run it on the original event
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5427
            if (e.stopPropagation) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5428
                e.stopPropagation();
            }
            // Support: IE
            // Set the cancelBubble property of the original event to true
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5433
            e.cancelBubble = true;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5435
        stopImmediatePropagation: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5436
            this.isImmediatePropagationStopped = returnTrue;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5437
            this.stopPropagation();
        }
    };
    // Create mouseenter/leave events using mouseover/out and event-time checks
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5442
    jQuery.each({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5443
        mouseenter: "mouseover",
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5444
        mouseleave: "mouseout"
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5445
    function(orig, fix) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5446
        jQuery.event.special[orig] = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5447
            delegateType: fix,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5448
            bindType: fix,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5450
            handle: function(event) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5451
                var ret, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5452
                target = this, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5453
                related = event.relatedTarget, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5454
                handleObj = event.handleObj;
                // For mousenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5458
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5459
                    event.type = handleObj.origType;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5460
                    ret = handleObj.handler.apply(this, arguments);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5461
                    event.type = fix;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5463
                return ret;
            }
        };
    });
    // IE submit delegation
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5469
    if (!jQuery.support.submitBubbles) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5471
        jQuery.event.special.submit = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5472
            setup: function() {
                // Only need this for delegated form submit events
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5474
                if (jQuery.nodeName(this, "form")) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5475
                    return false;
                }
                // Lazy-add a submit handler when a descendant form may potentially be submitted
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5479
                jQuery.event.add(this, "click._submit keypress._submit", function(e) {
                    // Node name check avoids a VML-related crash in IE (#9807)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5481
                    var elem = e.target, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5482
                    form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5483
                    if (form && !jQuery._data(form, "submitBubbles")) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5484
                        jQuery.event.add(form, "submit._submit", function(event) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5485
                            event._submit_bubble = true;
                        });
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5487
                        jQuery._data(form, "submitBubbles", true);
                    }
                });
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5493
            postDispatch: function(event) {
                // If form was submitted by the user, bubble the event up the tree
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5495
                if (event._submit_bubble) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5496
                    delete event._submit_bubble;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5497
                    if (this.parentNode && !event.isTrigger) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5498
                        jQuery.event.simulate("submit", this.parentNode, event, true);
                    }
                }
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5503
            teardown: function() {
                // Only need this for delegated form submit events
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5505
                if (jQuery.nodeName(this, "form")) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5506
                    return false;
                }
                // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5510
                jQuery.event.remove(this, "._submit");
            }
        };
    }
    // IE change delegation and checkbox/radio fix
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5516
    if (!jQuery.support.changeBubbles) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5518
        jQuery.event.special.change = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5520
            setup: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5522
                if (rformElems.test(this.nodeName)) {
                    // IE doesn't fire change on a check/radio until blur; trigger it on click
                    // after a propertychange. Eat the blur-change in special.change.handle.
                    // This still fires onchange a second time for check/radio after blur.
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5526
                    if (this.type === "checkbox" || this.type === "radio") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5527
                        jQuery.event.add(this, "propertychange._change", function(event) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5528
                            if (event.originalEvent.propertyName === "checked") {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5529
                                this._just_changed = true;
                            }
                        });
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5532
                        jQuery.event.add(this, "click._change", function(event) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5533
                            if (this._just_changed && !event.isTrigger) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5534
                                this._just_changed = false;
                            }
                            // Allow triggered, simulated change events (#11500)
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5537
                            jQuery.event.simulate("change", this, event, true);
                        });
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5540
                    return false;
                }
                // Delegated event; lazy-add a change handler on descendant inputs
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5543
                jQuery.event.add(this, "beforeactivate._change", function(e) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5544
                    var elem = e.target;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5546
                    if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5547
                        jQuery.event.add(elem, "change._change", function(event) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5548
                            if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5549
                                jQuery.event.simulate("change", this.parentNode, event, true);
                            }
                        });
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5552
                        jQuery._data(elem, "changeBubbles", true);
                    }
                });
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5557
            handle: function(event) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5558
                var elem = event.target;
                // Swallow native change events from checkbox/radio, we already triggered them above
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5561
                if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== "radio" && elem.type !== "checkbox") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5562
                    return event.handleObj.handler.apply(this, arguments);
                }
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5566
            teardown: function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5567
                jQuery.event.remove(this, "._change");
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5569
                return !rformElems.test(this.nodeName);
            }
        };
    }
    // Create "bubbling" focus and blur events
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5575
    if (!jQuery.support.focusinBubbles) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5576
        jQuery.each({
            focus: "focusin",
            blur: "focusout"
        }, function(orig, fix) {
            // Attach a single capturing handler while someone wants focusin/focusout
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5579
            var attaches = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5580
            handler = function(event) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5581
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
            };
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5584
            jQuery.event.special[fix] = {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5585
                setup: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5586
                    if (attaches++ === 0) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5587
                        document.addEventListener(orig, handler, true);
                    }
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5590
                teardown: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5591
                    if (--attaches === 0) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5592
                        document.removeEventListener(orig, handler, true);
                    }
                }
            };
        });
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5599
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5601
        on: function(types, selector, data, fn, /*INTERNAL*/ one) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5602
            var type, origFn;
            // Types can be a map of types/handlers
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5605
            if (typeof types === "object") {
                // ( types-Object, selector, data )
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5607
                if (typeof selector !== "string") {
                    // ( types-Object, data )
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5609
                    data = data || selector;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5610
                    selector = undefined;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5612
                for (type in types) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5613
                    this.on(type, selector, data, types[type], one);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5615
                return this;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5618
            if (data == null && fn == null) {
                // ( types, fn )
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5620
                fn = selector;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5621
                data = selector = undefined;
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5622
                if (fn == null) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5623
                    if (typeof selector === "string") {
                        // ( types, selector, fn )
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5625
                        fn = data;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5626
                        data = undefined;
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5627
                    {
                        // ( types, data, fn )
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5629
                        fn = data;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5630
                        data = selector;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5631
                        selector = undefined;
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5634
            if (fn === false) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5635
                fn = returnFalse;
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5636
                if (!fn) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5637
                    return this;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5640
            if (one === 1) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5641
                origFn = fn;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5642
                fn = function(event) {
                    // Can use an empty set, since event contains the info
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5644
                    jQuery().off(event);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5645
                    return origFn.apply(this, arguments);
                };
                // Use same guid so caller can remove using origFn
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5648
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5650
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5651
                jQuery.event.add(this, types, fn, data, selector);
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5654
        one: function(types, selector, data, fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5655
            return this.on(types, selector, data, fn, 1);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5657
        off: function(types, selector, fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5658
            var handleObj, type;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5659
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5661
                handleObj = types.handleObj;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5662
                jQuery(types.delegateTarget).off(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5663
                handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5664
                handleObj.selector, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5665
                handleObj.handler);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5667
                return this;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5669
            if (typeof types === "object") {
                // ( types-object [, selector] )
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5671
                for (type in types) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5672
                    this.off(type, selector, types[type]);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5674
                return this;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5676
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5678
                fn = selector;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5679
                selector = undefined;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5681
            if (fn === false) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5682
                fn = returnFalse;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5684
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5685
                jQuery.event.remove(this, types, fn, selector);
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5689
        trigger: function(type, data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5690
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5691
                jQuery.event.trigger(type, data, this);
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5694
        triggerHandler: function(type, data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5695
            var elem = this[0];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5696
            if (elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5697
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5701
    var isSimple = /^.[^:#\[\.,]*$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5702
    rparentsprev = /^(?:parents|prev(?:Until|All))/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5703
    rneedsContext = jQuery.expr.match.needsContext, // methods guaranteed to produce a unique set when starting from a unique set
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5705
    guaranteedUnique = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5706
        children: true,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5707
        contents: true,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5708
        next: true,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5709
        prev: true
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5712
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5713
        find: function(selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5714
            var i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5715
            ret = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5716
            self = this, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5717
            len = self.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5719
            if (typeof selector !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5720
                return this.pushStack(jQuery(selector).filter(function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5721
                    for (i = 0; i < len; i++) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5722
                        if (jQuery.contains(self[i], this)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5723
                            return true;
                        }
                    }
                }));
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5729
            for (i = 0; i < len; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5730
                jQuery.find(selector, self[i], ret);
            }
            // Needed because $( selector, context ) becomes $( context ).find( selector )
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5734
            ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5735
            ret.selector = this.selector ? this.selector + " " + selector : selector;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5736
            return ret;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5739
        has: function(target) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5740
            var i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5741
            targets = jQuery(target, this), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5742
            len = targets.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5744
            return this.filter(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5745
                for (i = 0; i < len; i++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5746
                    if (jQuery.contains(this, targets[i])) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5747
                        return true;
                    }
                }
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5753
        not: function(selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5754
            return this.pushStack(winnow(this, selector || [], true));
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5757
        filter: function(selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5758
            return this.pushStack(winnow(this, selector || [], false));
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5761
        is: function(selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5762
            return !!winnow(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5763
            this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5767
            typeof selector === "string" && rneedsContext.test(selector) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5768
            jQuery(selector) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5769
            selector || [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5770
            false).length;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5774
        closest: function(selectors, context) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5775
            var cur, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5776
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5777
            l = this.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5778
            ret = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5779
            pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5780
            jQuery(selectors, context || this.context) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5781
            0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5783
            for (;i < l; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5784
                for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
                    // Always skip document fragments
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5786
                    if (cur.nodeType < 11 && (pos ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5787
                    pos.index(cur) > -1 : // Don't pass non-elements to Sizzle
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5790
                    cur.nodeType === 1 && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5791
                    jQuery.find.matchesSelector(cur, selectors))) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5793
                        cur = ret.push(cur);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5794
                        break;
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5799
            return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
        },
        // Determine the position of an element within
        // the matched set of elements
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5804
        index: function(elem) {
            // No argument, return index in parent
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5807
            if (!elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5808
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            }
            // index in selector
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5812
            if (typeof elem === "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5813
                return jQuery.inArray(this[0], jQuery(elem));
            }
            // Locate the position of the desired element
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5817
            return jQuery.inArray(// If it receives a jQuery object, the first element is used
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5819
            elem.jquery ? elem[0] : elem, this);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5822
        add: function(selector, context) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5823
            var set = typeof selector === "string" ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5824
            jQuery(selector, context) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5825
            jQuery.makeArray(selector && selector.nodeType ? [ selector ] : selector), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5826
            all = jQuery.merge(this.get(), set);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5828
            return this.pushStack(jQuery.unique(all));
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5831
        addBack: function(selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5832
            return this.add(selector == null ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5833
            this.prevObject : this.prevObject.filter(selector));
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5838
    function sibling(cur, dir) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5839
        do {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5840
            cur = cur[dir];
        } while (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5841
        cur && cur.nodeType !== 1);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5843
        return cur;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5846
    jQuery.each({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5847
        parent: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5848
            var parent = elem.parentNode;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5849
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5851
        parents: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5852
            return jQuery.dir(elem, "parentNode");
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5854
        parentsUntil: function(elem, i, until) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5855
            return jQuery.dir(elem, "parentNode", until);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5857
        next: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5858
            return sibling(elem, "nextSibling");
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5860
        prev: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5861
            return sibling(elem, "previousSibling");
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5863
        nextAll: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5864
            return jQuery.dir(elem, "nextSibling");
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5866
        prevAll: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5867
            return jQuery.dir(elem, "previousSibling");
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5869
        nextUntil: function(elem, i, until) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5870
            return jQuery.dir(elem, "nextSibling", until);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5872
        prevUntil: function(elem, i, until) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5873
            return jQuery.dir(elem, "previousSibling", until);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5875
        siblings: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5876
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5878
        children: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5879
            return jQuery.sibling(elem.firstChild);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5881
        contents: function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5882
            return jQuery.nodeName(elem, "iframe") ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5883
            elem.contentDocument || elem.contentWindow.document : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5884
            jQuery.merge([], elem.childNodes);
        }
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5886
    function(name, fn) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5887
        jQuery.fn[name] = function(until, selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5888
            var ret = jQuery.map(this, fn, until);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5890
            if (name.slice(-5) !== "Until") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5891
                selector = until;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5894
            if (selector && typeof selector === "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5895
                ret = jQuery.filter(selector, ret);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5898
            if (this.length > 1) {
                // Remove duplicates
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5900
                if (!guaranteedUnique[name]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5901
                    ret = jQuery.unique(ret);
                }
                // Reverse order for parents* and prev-derivatives
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5905
                if (rparentsprev.test(name)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5906
                    ret = ret.reverse();
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5910
            return this.pushStack(ret);
        };
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5914
    jQuery.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5915
        filter: function(expr, elems, not) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5916
            var elem = elems[0];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5918
            if (not) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5919
                expr = ":not(" + expr + ")";
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5922
            return elems.length === 1 && elem.nodeType === 1 ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5923
            jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [] : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5924
            jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5925
                return elem.nodeType === 1;
            }));
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5929
        dir: function(elem, dir, until) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5930
            var matched = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5931
            cur = elem[dir];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5933
            while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5934
                if (cur.nodeType === 1) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5935
                    matched.push(cur);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5937
                cur = cur[dir];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5939
            return matched;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5942
        sibling: function(n, elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5943
            var r = [];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5945
            for (;n; n = n.nextSibling) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5946
                if (n.nodeType === 1 && n !== elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5947
                    r.push(n);
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5951
            return r;
        }
    });
    // Implement the identical functionality for filter and not
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5956
    function winnow(elements, qualifier, not) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5957
        if (jQuery.isFunction(qualifier)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5958
            return jQuery.grep(elements, function(elem, i) {
                /* jshint -W018 */
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5960
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5965
        if (qualifier.nodeType) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5966
            return jQuery.grep(elements, function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5967
                return elem === qualifier !== not;
            });
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5972
        if (typeof qualifier === "string") {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5973
            if (isSimple.test(qualifier)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5974
                return jQuery.filter(qualifier, elements, not);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5977
            qualifier = jQuery.filter(qualifier, elements);
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5980
        return jQuery.grep(elements, function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5981
            return jQuery.inArray(elem, qualifier) >= 0 !== not;
        });
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5984
    function createSafeFragment(document) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5985
        var list = nodeNames.split("|"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5986
        safeFrag = document.createDocumentFragment();
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5988
        if (safeFrag.createElement) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5989
            while (list.length) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5990
                safeFrag.createElement(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5991
                list.pop());
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5995
        return safeFrag;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5998
    var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 5999
    "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6000
    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6001
    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6002
    rleadingWhitespace = /^\s+/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6003
    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6004
    rtagName = /<([\w:]+)/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6005
    rtbody = /<tbody/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6006
    rhtml = /<|&#?\w+;/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6007
    rnoInnerhtml = /<(?:script|style|link)/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6008
    manipulation_rcheckableType = /^(?:checkbox|radio)$/i, // checked="checked" or checked
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6010
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6011
    rscriptType = /^$|\/(?:java|ecma)script/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6012
    rscriptTypeMasked = /^true\/(.*)/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6013
    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, // We have to close these tags to support XHTML (#13200)
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6016
    wrapMap = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6017
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6018
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6019
        area: [ 1, "<map>", "</map>" ],
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6020
        param: [ 1, "<object>", "</object>" ],
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6021
        thead: [ 1, "<table>", "</table>" ],
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6022
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6023
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6024
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
        // unless wrapped in a div with non-breaking characters in front of it.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6028
        _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6030
    safeFragment = createSafeFragment(document), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6031
    fragmentDiv = safeFragment.appendChild(document.createElement("div"));
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6033
    wrapMap.optgroup = wrapMap.option;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6034
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6035
    wrapMap.th = wrapMap.td;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6037
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6038
        text: function(value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6039
            return jQuery.access(this, function(value) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6040
                return value === undefined ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6041
                jQuery.text(this) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6042
                this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6043
            null, value, arguments.length);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6046
        append: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6047
            return this.domManip(arguments, function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6048
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6049
                    var target = manipulationTarget(this, elem);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6050
                    target.appendChild(elem);
                }
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6055
        prepend: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6056
            return this.domManip(arguments, function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6057
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6058
                    var target = manipulationTarget(this, elem);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6059
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6064
        before: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6065
            return this.domManip(arguments, function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6066
                if (this.parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6067
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6072
        after: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6073
            return this.domManip(arguments, function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6074
                if (this.parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6075
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },
        // keepData is for internal use only--do not document
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6081
        remove: function(selector, keepData) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6082
            var elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6083
            elems = selector ? jQuery.filter(selector, this) : this, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6084
            i = 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6086
            for (;(elem = elems[i]) != null; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6088
                if (!keepData && elem.nodeType === 1) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6089
                    jQuery.cleanData(getAll(elem));
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6092
                if (elem.parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6093
                    if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6094
                        setGlobalEval(getAll(elem, "script"));
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6096
                    elem.parentNode.removeChild(elem);
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6100
            return this;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6103
        empty: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6104
            var elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6105
            i = 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6107
            for (;(elem = this[i]) != null; i++) {
                // Remove element nodes and prevent memory leaks
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6109
                if (elem.nodeType === 1) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6110
                    jQuery.cleanData(getAll(elem, false));
                }
                // Remove any remaining nodes
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6114
                while (elem.firstChild) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6115
                    elem.removeChild(elem.firstChild);
                }
                // If this is a select, ensure that it displays empty (#12336)
                // Support: IE<9
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6120
                if (elem.options && jQuery.nodeName(elem, "select")) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6121
                    elem.options.length = 0;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6125
            return this;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6128
        clone: function(dataAndEvents, deepDataAndEvents) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6129
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6130
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6132
            return this.map(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6133
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6137
        html: function(value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6138
            return jQuery.access(this, function(value) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6139
                var elem = this[0] || {}, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6140
                i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6141
                l = this.length;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6143
                if (value === undefined) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6144
                    return elem.nodeType === 1 ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6145
                    elem.innerHTML.replace(rinlinejQuery, "") : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6146
                    undefined;
                }
                // See if we can take a shortcut and just use innerHTML
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6150
                if (typeof value === "string" && !rnoInnerhtml.test(value) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6151
                jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6152
                jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6153
                !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6155
                    value = value.replace(rxhtmlTag, "<$1></$2>");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6157
                    try {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6158
                        for (;i < l; i++) {
                            // Remove element nodes and prevent memory leaks
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6160
                            elem = this[i] || {};
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6161
                            if (elem.nodeType === 1) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6162
                                jQuery.cleanData(getAll(elem, false));
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6163
                                elem.innerHTML = value;
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6167
                        elem = 0;
                    } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6170
                    catch (e) {}
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6173
                if (elem) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6174
                    this.empty().append(value);
                }
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6176
            null, value, arguments.length);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6179
        replaceWith: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6180
            var // Snapshot the DOM in case .domManip sweeps something relevant into its fragment
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6182
            args = jQuery.map(this, function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6183
                return [ elem.nextSibling, elem.parentNode ];
            }), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6185
            i = 0;
            // Make the changes, replacing each context element with the new content
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6188
            this.domManip(arguments, function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6189
                var next = args[i++], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6190
                parent = args[i++];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6192
                if (parent) {
                    // Don't use the snapshot next if it has moved (#13810)
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6194
                    if (next && next.parentNode !== parent) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6195
                        next = this.nextSibling;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6197
                    jQuery(this).remove();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6198
                    parent.insertBefore(elem, next);
                }
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6201
            true);
            // Force removal if there was no new content (e.g., from empty arguments)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6204
            return i ? this : this.remove();
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6207
        detach: function(selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6208
            return this.remove(selector, true);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6211
        domManip: function(args, callback, allowIntersection) {
            // Flatten any nested arrays
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6214
            args = core_concat.apply([], args);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6216
            var first, node, hasScripts, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6217
            scripts, doc, fragment, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6218
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6219
            l = this.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6220
            set = this, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6221
            iNoClone = l - 1, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6222
            value = args[0], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6223
            isFunction = jQuery.isFunction(value);
            // We can't cloneNode fragments that contain checked, in WebKit
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6226
            if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6227
                return this.each(function(index) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6228
                    var self = set.eq(index);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6229
                    if (isFunction) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6230
                        args[0] = value.call(this, index, self.html());
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6232
                    self.domManip(args, callback, allowIntersection);
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6236
            if (l) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6237
                fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6238
                first = fragment.firstChild;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6240
                if (fragment.childNodes.length === 1) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6241
                    fragment = first;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6244
                if (first) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6245
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6246
                    hasScripts = scripts.length;
                    // Use the original fragment for the last item instead of the first because it can end up
                    // being emptied incorrectly in certain situations (#8070).
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6250
                    for (;i < l; i++) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6251
                        node = fragment;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6253
                        if (i !== iNoClone) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6254
                            node = jQuery.clone(node, true, true);
                            // Keep references to cloned scripts for later restoration
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6257
                            if (hasScripts) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6258
                                jQuery.merge(scripts, getAll(node, "script"));
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6262
                        callback.call(this[i], node, i);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6265
                    if (hasScripts) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6266
                        doc = scripts[scripts.length - 1].ownerDocument;
                        // Reenable scripts
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6269
                        jQuery.map(scripts, restoreScript);
                        // Evaluate executable scripts on first document insertion
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6272
                        for (i = 0; i < hasScripts; i++) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6273
                            node = scripts[i];
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6274
                            if (rscriptType.test(node.type || "") && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6275
                            !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6277
                                if (node.src) {
                                    // Hope ajax is available...
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6279
                                    jQuery._evalUrl(node.src);
                                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6280
                                {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6281
                                    jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                                }
                            }
                        }
                    }
                    // Fix #11809: Avoid leaking memory
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6288
                    fragment = first = null;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6292
            return this;
        }
    });
    // Support: IE<8
    // Manipulating tables requires a tbody
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6298
    function manipulationTarget(elem, content) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6299
        return jQuery.nodeName(elem, "table") && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6300
        jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6302
        elem.getElementsByTagName("tbody")[0] || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6303
        elem.appendChild(elem.ownerDocument.createElement("tbody")) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6304
        elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6308
    function disableScript(elem) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6309
        elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6310
        return elem;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6312
    function restoreScript(elem) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6313
        var match = rscriptTypeMasked.exec(elem.type);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6314
        if (match) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6315
            elem.type = match[1];
        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6316
        {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6317
            elem.removeAttribute("type");
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6319
        return elem;
    }
    // Mark scripts as having already been evaluated
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6323
    function setGlobalEval(elems, refElements) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6324
        var elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6325
        i = 0;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6326
        for (;(elem = elems[i]) != null; i++) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6327
            jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6331
    function cloneCopyEvent(src, dest) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6333
        if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6334
            return;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6337
        var type, i, l, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6338
        oldData = jQuery._data(src), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6339
        curData = jQuery._data(dest, oldData), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6340
        events = oldData.events;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6342
        if (events) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6343
            delete curData.handle;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6344
            curData.events = {};
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6346
            for (type in events) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6347
                for (i = 0, l = events[type].length; i < l; i++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6348
                    jQuery.event.add(dest, type, events[type][i]);
                }
            }
        }
        // make the cloned public data object a copy from the original
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6354
        if (curData.data) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6355
            curData.data = jQuery.extend({}, curData.data);
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6359
    function fixCloneNodeIssues(src, dest) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6360
        var nodeName, e, data;
        // We do not need to do anything for non-Elements
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6363
        if (dest.nodeType !== 1) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6364
            return;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6367
        nodeName = dest.nodeName.toLowerCase();
        // IE6-8 copies events bound via attachEvent when using cloneNode.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6370
        if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6371
            data = jQuery._data(dest);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6373
            for (e in data.events) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6374
                jQuery.removeEvent(dest, e, data.handle);
            }
            // Event data gets referenced instead of copied if the expando gets copied too
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6378
            dest.removeAttribute(jQuery.expando);
        }
        // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6382
        if (nodeName === "script" && dest.text !== src.text) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6383
            disableScript(dest).text = src.text;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6384
            restoreScript(dest);
        } else {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6388
            if (nodeName === "object") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6389
                if (dest.parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6390
                    dest.outerHTML = src.outerHTML;
                }
                // This path appears unavoidable for IE9. When cloning an object
                // element in IE9, the outerHTML strategy above is not sufficient.
                // If the src has innerHTML and the destination does not,
                // copy the src.innerHTML into the dest.innerHTML. #10324
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6397
                if (jQuery.support.html5Clone && src.innerHTML && !jQuery.trim(dest.innerHTML)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6398
                    dest.innerHTML = src.innerHTML;
                }
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6401
                if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
                    // IE6-8 fails to persist the checked state of a cloned checkbox
                    // or radio button. Worse, IE6-7 fail to give the cloned element
                    // a checked appearance if the defaultChecked value isn't also set
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6406
                    dest.defaultChecked = dest.checked = src.checked;
                    // IE6-7 get confused and end up setting the value of a cloned
                    // checkbox/radio button to an empty string instead of "on"
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6410
                    if (dest.value !== src.value) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6411
                        dest.value = src.value;
                    }
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6416
                    if (nodeName === "option") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6417
                        dest.defaultSelected = dest.selected = src.defaultSelected;
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6421
                        if (nodeName === "input" || nodeName === "textarea") {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6422
                            dest.defaultValue = src.defaultValue;
                        }
                    }
                }
            }
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6426
    jQuery.each({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6427
        appendTo: "append",
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6428
        prependTo: "prepend",
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6429
        insertBefore: "before",
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6430
        insertAfter: "after",
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6431
        replaceAll: "replaceWith"
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6432
    function(name, original) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6433
        jQuery.fn[name] = function(selector) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6434
            var elems, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6435
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6436
            ret = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6437
            insert = jQuery(selector), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6438
            last = insert.length - 1;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6440
            for (;i <= last; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6441
                elems = i === last ? this : this.clone(true);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6442
                jQuery(insert[i])[original](elems);
                // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6445
                core_push.apply(ret, elems.get());
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6448
            return this.pushStack(ret);
        };
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6452
    function getAll(context, tag) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6453
        var elems, elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6454
        i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6455
        found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6456
        typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6457
        undefined;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6459
        if (!found) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6460
            for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6461
                if (!tag || jQuery.nodeName(elem, tag)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6462
                    found.push(elem);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6463
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6464
                    jQuery.merge(found, getAll(elem, tag));
                }
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6469
        return tag === undefined || tag && jQuery.nodeName(context, tag) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6470
        jQuery.merge([ context ], found) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6471
        found;
    }
    // Used in buildFragment, fixes the defaultChecked property
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6475
    function fixDefaultChecked(elem) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6476
        if (manipulation_rcheckableType.test(elem.type)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6477
            elem.defaultChecked = elem.checked;
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6481
    jQuery.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6482
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6483
            var destElements, node, clone, i, srcElements, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6484
            inPage = jQuery.contains(elem.ownerDocument, elem);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6486
            if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6487
                clone = elem.cloneNode(true);
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6490
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6491
                fragmentDiv.innerHTML = elem.outerHTML;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6492
                fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6495
            if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6496
            elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6499
                destElements = getAll(clone);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6500
                srcElements = getAll(elem);
                // Fix all IE cloning issues
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6503
                for (i = 0; (node = srcElements[i]) != null; ++i) {
                    // Ensure that the destination node is not null; Fixes #9587
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6505
                    if (destElements[i]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6506
                        fixCloneNodeIssues(node, destElements[i]);
                    }
                }
            }
            // Copy the events from the original to the clone
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6512
            if (dataAndEvents) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6513
                if (deepDataAndEvents) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6514
                    srcElements = srcElements || getAll(elem);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6515
                    destElements = destElements || getAll(clone);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6517
                    for (i = 0; (node = srcElements[i]) != null; i++) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6518
                        cloneCopyEvent(node, destElements[i]);
                    }
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6520
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6521
                    cloneCopyEvent(elem, clone);
                }
            }
            // Preserve script evaluation history
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6526
            destElements = getAll(clone, "script");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6527
            if (destElements.length > 0) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6528
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6531
            destElements = srcElements = node = null;
            // Return the cloned set
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6534
            return clone;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6537
        buildFragment: function(elems, context, scripts, selection) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6538
            var j, elem, contains, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6539
            tmp, tag, tbody, wrap, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6540
            l = elems.length, // Ensure a safe fragment
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6543
            safe = createSafeFragment(context), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6545
            nodes = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6546
            i = 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6548
            for (;i < l; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6549
                elem = elems[i];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6551
                if (elem || elem === 0) {
                    // Add nodes directly
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6554
                    if (jQuery.type(elem) === "object") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6555
                        jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem);
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6558
                        if (!rhtml.test(elem)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6559
                            nodes.push(context.createTextNode(elem));
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6562
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6563
                            tmp = tmp || safe.appendChild(context.createElement("div"));
                            // Deserialize a standard representation
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6566
                            tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6567
                            wrap = wrapMap[tag] || wrapMap._default;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6569
                            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
                            // Descend through wrappers to the right content
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6572
                            j = wrap[0];
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6573
                            while (j--) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6574
                                tmp = tmp.lastChild;
                            }
                            // Manually add leading whitespace removed by IE
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6578
                            if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6579
                                nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
                            }
                            // Remove IE's autoinserted <tbody> from table fragments
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6583
                            if (!jQuery.support.tbody) {
                                // String was a <table>, *may* have spurious <tbody>
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6586
                                elem = tag === "table" && !rtbody.test(elem) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6587
                                tmp.firstChild : // String was a bare <thead> or <tfoot>
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6590
                                wrap[1] === "<table>" && !rtbody.test(elem) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6591
                                tmp : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6592
                                0;
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6594
                                j = elem && elem.childNodes.length;
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6595
                                while (j--) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6596
                                    if (jQuery.nodeName(tbody = elem.childNodes[j], "tbody") && !tbody.childNodes.length) {
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6597
                                        elem.removeChild(tbody);
                                    }
                                }
                            }
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6602
                            jQuery.merge(nodes, tmp.childNodes);
                            // Fix #12392 for WebKit and IE > 9
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6605
                            tmp.textContent = "";
                            // Fix #12392 for oldIE
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6608
                            while (tmp.firstChild) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6609
                                tmp.removeChild(tmp.firstChild);
                            }
                            // Remember the top-level container for proper cleanup
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6613
                            tmp = safe.lastChild;
                        }
                    }
                }
            }
            // Fix #11356: Clear elements from fragment
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6619
            if (tmp) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6620
                safe.removeChild(tmp);
            }
            // Reset defaultChecked for any radios and checkboxes
            // about to be appended to the DOM in IE 6/7 (#8060)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6625
            if (!jQuery.support.appendChecked) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6626
                jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6629
            i = 0;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6630
            while (elem = nodes[i++]) {
                // #4087 - If origin and destination elements are the same, and this is
                // that element, do not do anything
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6634
                if (selection && jQuery.inArray(elem, selection) !== -1) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6635
                    continue;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6638
                contains = jQuery.contains(elem.ownerDocument, elem);
                // Append to fragment
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6641
                tmp = getAll(safe.appendChild(elem), "script");
                // Preserve script evaluation history
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6644
                if (contains) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6645
                    setGlobalEval(tmp);
                }
                // Capture executables
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6649
                if (scripts) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6650
                    j = 0;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6651
                    while (elem = tmp[j++]) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6652
                        if (rscriptType.test(elem.type || "")) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6653
                            scripts.push(elem);
                        }
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6659
            tmp = null;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6661
            return safe;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6664
        cleanData: function(elems, /* internal */ acceptData) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6665
            var elem, type, id, data, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6666
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6667
            internalKey = jQuery.expando, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6668
            cache = jQuery.cache, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6669
            deleteExpando = jQuery.support.deleteExpando, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6670
            special = jQuery.event.special;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6672
            for (;(elem = elems[i]) != null; i++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6674
                if (acceptData || jQuery.acceptData(elem)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6676
                    id = elem[internalKey];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6677
                    data = id && cache[id];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6679
                    if (data) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6680
                        if (data.events) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6681
                            for (type in data.events) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6682
                                if (special[type]) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6683
                                    jQuery.event.remove(elem, type);
                                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6686
                                {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6687
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }
                        // Remove cache only if it was not already removed by jQuery.event.remove
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6693
                        if (cache[id]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6695
                            delete cache[id];
                            // IE does not allow us to delete expando properties from nodes,
                            // nor does it have a removeAttribute function on Document nodes;
                            // we must handle all of these cases
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6700
                            if (deleteExpando) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6701
                                delete elem[internalKey];
                            } else {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6703
                                if (typeof elem.removeAttribute !== core_strundefined) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6704
                                    elem.removeAttribute(internalKey);
                                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6706
                                {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6707
                                    elem[internalKey] = null;
                                }
                            }
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6710
                            core_deletedIds.push(id);
                        }
                    }
                }
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6717
        _evalUrl: function(url) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6718
            return jQuery.ajax({
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6719
                url: url,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6720
                type: "GET",
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6721
                dataType: "script",
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6722
                async: false,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6723
                global: false,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6724
                "throws": true
            });
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6728
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6729
        wrapAll: function(html) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6730
            if (jQuery.isFunction(html)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6731
                return this.each(function(i) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6732
                    jQuery(this).wrapAll(html.call(this, i));
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6736
            if (this[0]) {
                // The elements to wrap the target around
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6738
                var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6740
                if (this[0].parentNode) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6741
                    wrap.insertBefore(this[0]);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6744
                wrap.map(function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6745
                    var elem = this;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6747
                    while (elem.firstChild && elem.firstChild.nodeType === 1) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6748
                        elem = elem.firstChild;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6751
                    return elem;
                }).append(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6752
                this);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6755
            return this;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6758
        wrapInner: function(html) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6759
            if (jQuery.isFunction(html)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6760
                return this.each(function(i) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6761
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6765
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6766
                var self = jQuery(this), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6767
                contents = self.contents();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6769
                if (contents.length) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6770
                    contents.wrapAll(html);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6772
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6773
                    self.append(html);
                }
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6778
        wrap: function(html) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6779
            var isFunction = jQuery.isFunction(html);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6781
            return this.each(function(i) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6782
                jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6786
        unwrap: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6787
            return this.parent().each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6788
                if (!jQuery.nodeName(this, "body")) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6789
                    jQuery(this).replaceWith(this.childNodes);
                }
            }).end();
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6794
    var iframe, getStyles, curCSS, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6795
    ralpha = /alpha\([^)]*\)/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6796
    ropacity = /opacity\s*=\s*([^)]*)/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6797
    rposition = /^(top|right|bottom|left)$/, // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6800
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6801
    rmargin = /^margin/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6802
    rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6803
    rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6804
    rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6805
    elemdisplay = {
        BODY: "block"
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6807
    cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6808
    cssNormalTransform = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6809
        letterSpacing: 0,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6810
        fontWeight: 400
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6813
    cssExpand = [ "Top", "Right", "Bottom", "Left" ], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6814
    cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
    // return a css property mapped to a potentially vendor prefixed property
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6817
    function vendorPropName(style, name) {
        // shortcut for names that are not vendor prefixed
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6820
        if (name in style) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6821
            return name;
        }
        // check for vendor prefixed names
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6825
        var capName = name.charAt(0).toUpperCase() + name.slice(1), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6826
        origName = name, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6827
        i = cssPrefixes.length;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6829
        while (i--) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6830
            name = cssPrefixes[i] + capName;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6831
            if (name in style) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6832
                return name;
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6836
        return origName;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6839
    function isHidden(elem, el) {
        // isHidden might be called from jQuery#filter function;
        // in that case, element will be second argument
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6842
        elem = el || elem;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6843
        return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6846
    function showHide(elements, show) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6847
        var display, elem, hidden, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6848
        values = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6849
        index = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6850
        length = elements.length;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6852
        for (;index < length; index++) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6853
            elem = elements[index];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6854
            if (!elem.style) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6855
                continue;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6858
            values[index] = jQuery._data(elem, "olddisplay");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6859
            display = elem.style.display;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6860
            if (show) {
                // Reset the inline display of this element to learn if it is
                // being hidden by cascaded rules or not
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6863
                if (!values[index] && display === "none") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6864
                    elem.style.display = "";
                }
                // Set elements which have been overridden with display: none
                // in a stylesheet to whatever the default browser style is
                // for such an element
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6870
                if (elem.style.display === "" && isHidden(elem)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6871
                    values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6873
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6875
                if (!values[index]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6876
                    hidden = isHidden(elem);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6878
                    if (display && display !== "none" || !hidden) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6879
                        jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
                    }
                }
            }
        }
        // Set the display of most of the elements in a second loop
        // to avoid the constant reflow
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6887
        for (index = 0; index < length; index++) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6888
            elem = elements[index];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6889
            if (!elem.style) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6890
                continue;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6892
            if (!show || elem.style.display === "none" || elem.style.display === "") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6893
                elem.style.display = show ? values[index] || "" : "none";
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6897
        return elements;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6900
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6901
        css: function(name, value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6902
            return jQuery.access(this, function(elem, name, value) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6903
                var len, styles, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6904
                map = {}, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6905
                i = 0;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6907
                if (jQuery.isArray(name)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6908
                    styles = getStyles(elem);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6909
                    len = name.length;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6911
                    for (;i < len; i++) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6912
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6915
                    return map;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6918
                return value !== undefined ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6919
                jQuery.style(elem, name, value) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6920
                jQuery.css(elem, name);
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6921
            name, value, arguments.length > 1);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6923
        show: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6924
            return showHide(this, true);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6926
        hide: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6927
            return showHide(this);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6929
        toggle: function(state) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6930
            if (typeof state === "boolean") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6931
                return state ? this.show() : this.hide();
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6934
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6935
                if (isHidden(this)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6936
                    jQuery(this).show();
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6937
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6938
                    jQuery(this).hide();
                }
            });
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6944
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6947
        cssHooks: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6948
            opacity: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6949
                get: function(elem, computed) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6950
                    if (computed) {
                        // We should always get a number back from opacity
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6952
                        var ret = curCSS(elem, "opacity");
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6953
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6960
        cssNumber: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6961
            columnCount: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6962
            fillOpacity: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6963
            fontWeight: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6964
            lineHeight: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6965
            opacity: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6966
            order: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6967
            orphans: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6968
            widows: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6969
            zIndex: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6970
            zoom: true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6975
        cssProps: {
            // normalize float css property
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6977
            "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        // Get and set the style property on a DOM Node
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6981
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6983
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6984
                return;
            }
            // Make sure that we're working with the right name
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6988
            var ret, type, hooks, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6989
            origName = jQuery.camelCase(name), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6990
            style = elem.style;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6992
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
            // gets hook for the prefixed version
            // followed by the unprefixed version
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6996
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 6999
            if (value !== undefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7000
                type = typeof value;
                // convert relative number strings (+= or -=) to relative numbers. #7345
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7003
                if (type === "string" && (ret = rrelNum.exec(value))) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7004
                    value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
                    // Fixes bug #9237
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7006
                    type = "number";
                }
                // Make sure that NaN and null values aren't set. See: #7116
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7010
                if (value == null || type === "number" && isNaN(value)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7011
                    return;
                }
                // If a number was passed in, add 'px' to the (except for certain CSS properties)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7015
                if (type === "number" && !jQuery.cssNumber[origName]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7016
                    value += "px";
                }
                // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
                // but it would mean to define eight (for every problematic property) identical functions
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7021
                if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7022
                    style[name] = "inherit";
                }
                // If a hook was provided, use that value, otherwise just set the specified value
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7026
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
                    // Fixes bug #5509
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7030
                    try {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7031
                        style[name] = value;
                    } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7032
                    catch (e) {}
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7035
            {
                // If a hook was provided get the non-computed value from there
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7037
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7038
                    return ret;
                }
                // Otherwise just get the value from the style object
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7042
                return style[name];
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7046
        css: function(elem, name, extra, styles) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7047
            var num, val, hooks, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7048
            origName = jQuery.camelCase(name);
            // Make sure that we're working with the right name
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7051
            name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
            // gets hook for the prefixed version
            // followed by the unprefixed version
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7055
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7058
            if (hooks && "get" in hooks) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7059
                val = hooks.get(elem, true, extra);
            }
            // Otherwise, if a way to get the computed value exists, use that
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7063
            if (val === undefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7064
                val = curCSS(elem, name, styles);
            }
            //convert "normal" to computed value
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7068
            if (val === "normal" && name in cssNormalTransform) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7069
                val = cssNormalTransform[name];
            }
            // Return, converting to number if forced or a qualifier was provided and val looks numeric
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7073
            if (extra === "" || extra) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7074
                num = parseFloat(val);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7075
                return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7077
            return val;
        }
    });
    // NOTE: we've included the "window" in window.getComputedStyle
    // because jsdom on node.js will break without it.
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7083
    if (window.getComputedStyle) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7084
        getStyles = function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7085
            return window.getComputedStyle(elem, null);
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7088
        curCSS = function(elem, name, _computed) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7089
            var width, minWidth, maxWidth, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7090
            computed = _computed || getStyles(elem), // getPropertyValue is only needed for .css('filter') in IE9, see #12537
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7093
            ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7094
            style = elem.style;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7096
            if (computed) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7098
                if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7099
                    ret = jQuery.style(elem, name);
                }
                // A tribute to the "awesome hack by Dean Edwards"
                // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
                // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
                // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7106
                if (rnumnonpx.test(ret) && rmargin.test(name)) {
                    // Remember the original values
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7109
                    width = style.width;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7110
                    minWidth = style.minWidth;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7111
                    maxWidth = style.maxWidth;
                    // Put in the new values to get a computed value out
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7114
                    style.minWidth = style.maxWidth = style.width = ret;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7115
                    ret = computed.width;
                    // Revert the changed values
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7118
                    style.width = width;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7119
                    style.minWidth = minWidth;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7120
                    style.maxWidth = maxWidth;
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7124
            return ret;
        };
    } else {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7126
        if (document.documentElement.currentStyle) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7127
            getStyles = function(elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7128
                return elem.currentStyle;
            };
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7131
            curCSS = function(elem, name, _computed) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7132
                var left, rs, rsLeft, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7133
                computed = _computed || getStyles(elem), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7134
                ret = computed ? computed[name] : undefined, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7135
                style = elem.style;
                // Avoid setting ret to empty string here
                // so we don't default to auto
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7139
                if (ret == null && style && style[name]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7140
                    ret = style[name];
                }
                // From the awesome hack by Dean Edwards
                // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
                // If we're not dealing with a regular pixel number
                // but a number that has a weird ending, we need to convert it to pixels
                // but not position css attributes, as those are proportional to the parent element instead
                // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7150
                if (rnumnonpx.test(ret) && !rposition.test(name)) {
                    // Remember the original values
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7153
                    left = style.left;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7154
                    rs = elem.runtimeStyle;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7155
                    rsLeft = rs && rs.left;
                    // Put in the new values to get a computed value out
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7158
                    if (rsLeft) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7159
                        rs.left = elem.currentStyle.left;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7161
                    style.left = name === "fontSize" ? "1em" : ret;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7162
                    ret = style.pixelLeft + "px";
                    // Revert the changed values
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7165
                    style.left = left;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7166
                    if (rsLeft) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7167
                        rs.left = rsLeft;
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7171
                return ret === "" ? "auto" : ret;
            };
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7175
    function setPositiveNumber(elem, value, subtract) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7176
        var matches = rnumsplit.exec(value);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7177
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7179
        Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7180
        value;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7183
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7184
        var i = extra === (isBorderBox ? "border" : "content") ? // If we already have the right measurement, avoid augmentation
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7186
        4 : // Otherwise initialize for horizontal or vertical properties
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7188
        name === "width" ? 1 : 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7190
        val = 0;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7192
        for (;i < 4; i += 2) {
            // both box models exclude margin, so add it if we want it
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7194
            if (extra === "margin") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7195
                val += jQuery.css(elem, extra + cssExpand[i], true, styles);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7198
            if (isBorderBox) {
                // border-box includes padding, so remove it if we want content
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7200
                if (extra === "content") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7201
                    val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }
                // at this point, extra isn't border nor margin, so remove border
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7205
                if (extra !== "margin") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7206
                    val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7208
            {
                // at this point, extra isn't content, so add padding
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7210
                val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                // at this point, extra isn't content nor padding, so add border
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7213
                if (extra !== "padding") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7214
                    val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7219
        return val;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7222
    function getWidthOrHeight(elem, name, extra) {
        // Start with offset property, which is equivalent to the border-box value
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7225
        var valueIsBorderBox = true, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7226
        val = name === "width" ? elem.offsetWidth : elem.offsetHeight, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7227
        styles = getStyles(elem), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7228
        isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        // some non-html elements return undefined for offsetWidth, so check for null/undefined
        // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
        // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7233
        if (val <= 0 || val == null) {
            // Fall back to computed then uncomputed css if necessary
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7235
            val = curCSS(elem, name, styles);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7236
            if (val < 0 || val == null) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7237
                val = elem.style[name];
            }
            // Computed unit is not pixels. Stop here and return.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7241
            if (rnumnonpx.test(val)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7242
                return val;
            }
            // we need the check for style in case a browser which returns unreliable values
            // for getComputedStyle silently falls back to the reliable elem.style
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7247
            valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
            // Normalize "", auto, and prepare for extra
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7250
            val = parseFloat(val) || 0;
        }
        // use the active box-sizing model to add/subtract irrelevant styles
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7254
        return val + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7255
        augmentWidthOrHeight(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7256
        elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7257
        name, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7258
        extra || (isBorderBox ? "border" : "content"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7259
        valueIsBorderBox, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7260
        styles) + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7262
        "px";
    }
    // Try to determine the default display value of an element
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7266
    function css_defaultDisplay(nodeName) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7267
        var doc = document, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7268
        display = elemdisplay[nodeName];
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7270
        if (!display) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7271
            display = actualDisplay(nodeName, doc);
            // If the simple way fails, read from inside an iframe
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7274
            if (display === "none" || !display) {
                // Use the already-created iframe if possible
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7276
                iframe = (iframe || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7277
                jQuery("<iframe frameborder='0' width='0' height='0'/>").css(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7278
                "cssText", "display:block !important")).appendTo(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7279
                doc.documentElement);
                // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7282
                doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7283
                doc.write("<!doctype html><html><body>");
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7284
                doc.close();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7286
                display = actualDisplay(nodeName, doc);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7287
                iframe.detach();
            }
            // Store the correct default display
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7291
            elemdisplay[nodeName] = display;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7294
        return display;
    }
    // Called ONLY from within css_defaultDisplay
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7298
    function actualDisplay(name, doc) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7299
        var elem = jQuery(doc.createElement(name)).appendTo(doc.body), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7300
        display = jQuery.css(elem[0], "display");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7301
        elem.remove();
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7302
        return display;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7305
    jQuery.each([ "height", "width" ], function(i, name) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7306
        jQuery.cssHooks[name] = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7307
            get: function(elem, computed, extra) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7308
                if (computed) {
                    // certain elements can have dimension info if we invisibly show them
                    // however, it must have a current display style that would benefit from this
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7311
                    return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7312
                    jQuery.swap(elem, cssShow, function() {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7313
                        return getWidthOrHeight(elem, name, extra);
                    }) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7315
                    getWidthOrHeight(elem, name, extra);
                }
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7319
            set: function(elem, value, extra) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7320
                var styles = extra && getStyles(elem);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7321
                return setPositiveNumber(elem, value, extra ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7322
                augmentWidthOrHeight(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7323
                elem, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7324
                name, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7325
                extra, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7326
                jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7327
                styles) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7328
                0);
            }
        };
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7334
    if (!jQuery.support.opacity) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7335
        jQuery.cssHooks.opacity = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7336
            get: function(elem, computed) {
                // IE uses filters for opacity
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7338
                return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7339
                .01 * parseFloat(RegExp.$1) + "" : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7340
                computed ? "1" : "";
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7343
            set: function(elem, value) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7344
                var style = elem.style, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7345
                currentStyle = elem.currentStyle, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7346
                opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7347
                filter = currentStyle && currentStyle.filter || style.filter || "";
                // IE has trouble with opacity if it does not have layout
                // Force it by setting the zoom level
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7351
                style.zoom = 1;
                // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
                // if value === "", then remove inline opacity #12685
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7355
                if ((value >= 1 || value === "") && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7356
                jQuery.trim(filter.replace(ralpha, "")) === "" && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7357
                style.removeAttribute) {
                    // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
                    // if "filter:" is present at all, clearType is disabled, we want to avoid this
                    // style.removeAttribute is IE Only, but so apparently is this code path...
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7362
                    style.removeAttribute("filter");
                    // if there is no filter style applied in a css rule or unset inline opacity, we are done
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7365
                    if (value === "" || currentStyle && !currentStyle.filter) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7366
                        return;
                    }
                }
                // otherwise, set new filter values
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7371
                style.filter = ralpha.test(filter) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7372
                filter.replace(ralpha, opacity) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7373
                filter + " " + opacity;
            }
        };
    }
    // These hooks cannot be added until DOM ready because the support test
    // for it is not run until after DOM ready
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7380
    jQuery(function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7381
        if (!jQuery.support.reliableMarginRight) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7382
            jQuery.cssHooks.marginRight = {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7383
                get: function(elem, computed) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7384
                    if (computed) {
                        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
                        // Work around by temporarily setting element display to inline-block
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7387
                        return jQuery.swap(elem, {
                            display: "inline-block"
                        }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7388
                        curCSS, [ elem, "marginRight" ]);
                    }
                }
            };
        }
        // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
        // getComputedStyle returns percent when specified for top/left/bottom/right
        // rather than make the css module depend on the offset module, we just check for it here
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7397
        if (!jQuery.support.pixelPosition && jQuery.fn.position) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7398
            jQuery.each([ "top", "left" ], function(i, prop) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7399
                jQuery.cssHooks[prop] = {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7400
                    get: function(elem, computed) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7401
                        if (computed) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7402
                            computed = curCSS(elem, prop);
                            // if curCSS returns percentage, fallback to offset
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7404
                            return rnumnonpx.test(computed) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7405
                            jQuery(elem).position()[prop] + "px" : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7406
                            computed;
                        }
                    }
                };
            });
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7415
    if (jQuery.expr && jQuery.expr.filters) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7416
        jQuery.expr.filters.hidden = function(elem) {
            // Support: Opera <= 12.12
            // Opera reports offsetWidths and offsetHeights less than zero on some elements
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7419
            return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7420
            !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, "display")) === "none";
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7423
        jQuery.expr.filters.visible = function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7424
            return !jQuery.expr.filters.hidden(elem);
        };
    }
    // These hooks are used by animate to expand properties
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7429
    jQuery.each({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7430
        margin: "",
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7431
        padding: "",
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7432
        border: "Width"
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7433
    function(prefix, suffix) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7434
        jQuery.cssHooks[prefix + suffix] = {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7435
            expand: function(value) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7436
                var i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7437
                expanded = {}, // assumes a single number if not a string
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7440
                parts = typeof value === "string" ? value.split(" ") : [ value ];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7442
                for (;i < 4; i++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7443
                    expanded[prefix + cssExpand[i] + suffix] = //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7444
                    parts[i] || parts[i - 2] || parts[0];
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7447
                return expanded;
            }
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7451
        if (!rmargin.test(prefix)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7452
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7455
    var r20 = /%20/g, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7456
    rbracket = /\[\]$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7457
    rCRLF = /\r?\n/g, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7458
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7459
    rsubmittable = /^(?:input|select|textarea|keygen)/i;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7461
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7462
        serialize: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7463
            return jQuery.param(this.serializeArray());
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7465
        serializeArray: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7466
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7468
                var elements = jQuery.prop(this, "elements");
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7469
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7471
            function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7472
                var type = this.type;
                // Use .is(":disabled") so that fieldset[disabled] works
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7474
                return this.name && !jQuery(this).is(":disabled") && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7475
                rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7476
                this.checked || !manipulation_rcheckableType.test(type));
            }).map(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7478
            function(i, elem) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7479
                var val = jQuery(this).val();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7481
                return val == null ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7482
                null : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7483
                jQuery.isArray(val) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7484
                jQuery.map(val, function(val) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7485
                    return {
                        name: elem.name,
                        value: val.replace(rCRLF, "\r\n")
                    };
                }) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7487
                {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    //Serialize an array of form elements or a set of
    //key/values into a query string
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7494
    jQuery.param = function(a, traditional) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7495
        var prefix, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7496
        s = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7497
        add = function(key, value) {
            // If value is a function, invoke it and return its value
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7499
            value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7500
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
        };
        // Set traditional to true for jQuery <= 1.3.2 behavior.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7504
        if (traditional === undefined) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7505
            traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
        }
        // If an array was passed in, assume that it is an array of form elements.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7509
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
            // Serialize the form elements
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7511
            jQuery.each(a, function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7512
                add(this.name, this.value);
            });
        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7515
        {
            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7518
            for (prefix in a) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7519
                buildParams(prefix, a[prefix], traditional, add);
            }
        }
        // Return the resulting serialization
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7524
        return s.join("&").replace(r20, "+");
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7527
    function buildParams(prefix, obj, traditional, add) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7528
        var name;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7530
        if (jQuery.isArray(obj)) {
            // Serialize array item.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7532
            jQuery.each(obj, function(i, v) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7533
                if (traditional || rbracket.test(prefix)) {
                    // Treat each array item as a scalar.
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7535
                    add(prefix, v);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7537
                {
                    // Item is non-scalar (array or object), encode its numeric index.
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7539
                    buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
                }
            });
        } else {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7543
            if (!traditional && jQuery.type(obj) === "object") {
                // Serialize object item.
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7545
                for (name in obj) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7546
                    buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7549
            {
                // Serialize scalar item.
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7551
                add(prefix, obj);
            }
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7554
    jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7555
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7556
    "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) {
        // Handle event binding
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7559
        jQuery.fn[name] = function(data, fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7560
            return arguments.length > 0 ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7561
            this.on(name, null, data, fn) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7562
            this.trigger(name);
        };
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7566
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7567
        hover: function(fnOver, fnOut) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7568
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7571
        bind: function(types, data, fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7572
            return this.on(types, null, data, fn);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7574
        unbind: function(types, fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7575
            return this.off(types, null, fn);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7578
        delegate: function(selector, types, data, fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7579
            return this.on(types, selector, data, fn);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7581
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7583
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7586
    var // Document location
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7588
    ajaxLocParts, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7589
    ajaxLocation, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7590
    ajax_nonce = jQuery.now(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7592
    ajax_rquery = /\?/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7593
    rhash = /#.*$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7594
    rts = /([?&])_=[^&]*/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7595
    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, // IE leaves an \r character at EOL
    // #7653, #8125, #8152: local protocol detection
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7597
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7598
    rnoContent = /^(?:GET|HEAD)$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7599
    rprotocol = /^\/\//, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7600
    rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, // Keep a copy of the old load method
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7603
    _load = jQuery.fn.load, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7614
    prefilters = {}, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7621
    transports = {}, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7624
    allTypes = "*/".concat("*");
    // #8138, IE may throw an exception when accessing
    // a field from window.location if document.domain has been set
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7628
    try {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7629
        ajaxLocation = location.href;
    } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7630
    catch (e) {
        // Use the href attribute of an A element
        // since IE will modify it given document.location
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7633
        ajaxLocation = document.createElement("a");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7634
        ajaxLocation.href = "";
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7635
        ajaxLocation = ajaxLocation.href;
    }
    // Segment location into parts
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7639
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7642
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7645
        return function(dataTypeExpression, func) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7647
            if (typeof dataTypeExpression !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7648
                func = dataTypeExpression;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7649
                dataTypeExpression = "*";
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7652
            var dataType, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7653
            i = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7654
            dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7656
            if (jQuery.isFunction(func)) {
                // For each dataType in the dataTypeExpression
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7658
                while (dataType = dataTypes[i++]) {
                    // Prepend if requested
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7660
                    if (dataType[0] === "+") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7661
                        dataType = dataType.slice(1) || "*";
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7662
                        (structure[dataType] = structure[dataType] || []).unshift(func);
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7665
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7666
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }
    // Base inspection function for prefilters and transports
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7674
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7676
        var inspected = {}, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7677
        seekingTransport = structure === transports;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7679
        function inspect(dataType) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7680
            var selected;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7681
            inspected[dataType] = true;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7682
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7683
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7684
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7685
                    options.dataTypes.unshift(dataTypeOrTransport);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7686
                    inspect(dataTypeOrTransport);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7687
                    return false;
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7688
                    if (seekingTransport) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7689
                        return !(selected = dataTypeOrTransport);
                    }
                }
            });
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7692
            return selected;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7695
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7701
    function ajaxExtend(target, src) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7702
        var deep, key, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7703
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7705
        for (key in src) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7706
            if (src[key] !== undefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7707
                (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7710
        if (deep) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7711
            jQuery.extend(true, target, deep);
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7714
        return target;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7717
    jQuery.fn.load = function(url, params, callback) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7718
        if (typeof url !== "string" && _load) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7719
            return _load.apply(this, arguments);
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7722
        var selector, response, type, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7723
        self = this, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7724
        off = url.indexOf(" ");
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7726
        if (off >= 0) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7727
            selector = url.slice(off, url.length);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7728
            url = url.slice(0, off);
        }
        // If it's a function
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7732
        if (jQuery.isFunction(params)) {
            // We assume that it's the callback
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7735
            callback = params;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7736
            params = undefined;
        } else {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7739
            if (params && typeof params === "object") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7740
                type = "POST";
            }
        }
        // If we have elements to modify, make the request
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7744
        if (self.length > 0) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7745
            jQuery.ajax({
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7746
                url: url,
                // if "type" variable is undefined, then "GET" method will be used
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7749
                type: type,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7750
                dataType: "html",
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7751
                data: params
            }).done(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7752
            function(responseText) {
                // Save response for use in complete callback
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7755
                response = arguments;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7757
                self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
                // Exclude scripts to avoid IE 'Permission Denied' errors
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7761
                jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7764
                responseText);
            }).complete(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7766
            callback && function(jqXHR, status) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7767
                self.each(callback, response || [ jqXHR.responseText, status, jqXHR ]);
            });
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7771
        return this;
    };
    // Attach a bunch of functions for handling common AJAX events
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7775
    jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(i, type) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7776
        jQuery.fn[type] = function(fn) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7777
            return this.on(type, fn);
        };
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7781
    jQuery.extend({
        // Counter for holding the number of active queries
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7784
        active: 0,
        // Last-Modified header cache for next request
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7787
        lastModified: {},
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7788
        etag: {},
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7790
        ajaxSettings: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7791
            url: ajaxLocation,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7792
            type: "GET",
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7793
            isLocal: rlocalProtocol.test(ajaxLocParts[1]),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7794
            global: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7795
            processData: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7796
            async: true,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7797
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7810
            accepts: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7811
                "*": allTypes,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7812
                text: "text/plain",
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7813
                html: "text/html",
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7814
                xml: "application/xml, text/xml",
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7815
                json: "application/json, text/javascript"
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7818
            contents: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7819
                xml: /xml/,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7820
                html: /html/,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7821
                json: /json/
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7824
            responseFields: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7825
                xml: "responseXML",
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7826
                text: "responseText",
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7827
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7832
            converters: {
                // Convert anything to text
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7835
                "* text": String,
                // Text to html (true = no transformation)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7838
                "text html": true,
                // Evaluate text as a json expression
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7841
                "text json": jQuery.parseJSON,
                // Parse text as xml
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7844
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7851
            flatOptions: {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7852
                url: true,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7853
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7860
        ajaxSetup: function(target, settings) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7861
            return settings ? // Building a settings object
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7864
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7867
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7870
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7871
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7874
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7877
            if (typeof url === "object") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7878
                options = url;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7879
                url = undefined;
            }
            // Force options to be an object
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7883
            options = options || {};
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7885
            var // Cross-domain detection vars
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7886
            parts, // Loop variable
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7888
            i, // URL without anti-cache param
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7890
            cacheURL, // Response headers as string
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7892
            responseHeadersString, // timeout handle
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7894
            timeoutTimer, // To know if global events are to be dispatched
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7897
            fireGlobals, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7899
            transport, // Response headers
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7901
            responseHeaders, // Create the final options object
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7903
            s = jQuery.ajaxSetup({}, options), // Callbacks context
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7905
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7907
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7908
            jQuery(callbackContext) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7909
            jQuery.event, // Deferreds
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7911
            deferred = jQuery.Deferred(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7912
            completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7914
            statusCode = s.statusCode || {}, // Headers (they are sent all at once)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7916
            requestHeaders = {}, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7917
            requestHeadersNames = {}, // The jqXHR state
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7919
            state = 0, // Default abort message
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7921
            strAbort = "canceled", // Fake xhr
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7923
            jqXHR = {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7924
                readyState: 0,
                // Builds headers hashtable if needed
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7927
                getResponseHeader: function(key) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7928
                    var match;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7929
                    if (state === 2) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7930
                        if (!responseHeaders) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7931
                            responseHeaders = {};
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7932
                            while (match = rheaders.exec(responseHeadersString)) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7933
                                responseHeaders[match[1].toLowerCase()] = match[2];
                            }
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7936
                        match = responseHeaders[key.toLowerCase()];
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7938
                    return match == null ? null : match;
                },
                // Raw string
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7942
                getAllResponseHeaders: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7943
                    return state === 2 ? responseHeadersString : null;
                },
                // Caches the header
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7947
                setRequestHeader: function(name, value) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7948
                    var lname = name.toLowerCase();
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7949
                    if (!state) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7950
                        name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7951
                        requestHeaders[name] = value;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7953
                    return this;
                },
                // Overrides response content-type header
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7957
                overrideMimeType: function(type) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7958
                    if (!state) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7959
                        s.mimeType = type;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7961
                    return this;
                },
                // Status-dependent callbacks
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7965
                statusCode: function(map) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7966
                    var code;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7967
                    if (map) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7968
                        if (state < 2) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7969
                            for (code in map) {
                                // Lazy-add the new callback in a way that preserves old ones
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7971
                                statusCode[code] = [ statusCode[code], map[code] ];
                            }
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7973
                        {
                            // Execute the appropriate callbacks
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7975
                            jqXHR.always(map[jqXHR.status]);
                        }
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7978
                    return this;
                },
                // Cancel the request
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7982
                abort: function(statusText) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7983
                    var finalText = statusText || strAbort;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7984
                    if (transport) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7985
                        transport.abort(finalText);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7987
                    done(0, finalText);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7988
                    return this;
                }
            };
            // Attach deferreds
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7993
            deferred.promise(jqXHR).complete = completeDeferred.add;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7994
            jqXHR.success = jqXHR.done;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 7995
            jqXHR.error = jqXHR.fail;
            // Remove hash character (#7531: and string promotion)
            // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8001
            s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
            // Alias method option to type as per ticket #12004
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8007
            s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [ "" ];
            // A cross-domain request is in order when we have a protocol:host:port mismatch
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8010
            if (s.crossDomain == null) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8011
                parts = rurl.exec(s.url.toLowerCase());
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8012
                s.crossDomain = !!(parts && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8013
                parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8014
                (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8015
                ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
            }
            // Convert data if not already a string
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8020
            if (s.data && s.processData && typeof s.data !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8021
                s.data = jQuery.param(s.data, s.traditional);
            }
            // Apply prefilters
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8025
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8028
            if (state === 2) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8029
                return jqXHR;
            }
            // We can fire global events as of now if asked to
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8033
            fireGlobals = s.global;
            // Watch for a new set of requests
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8036
            if (fireGlobals && jQuery.active++ === 0) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8037
                jQuery.event.trigger("ajaxStart");
            }
            // Uppercase the type
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8041
            s.type = s.type.toUpperCase();
            // Determine if request has content
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8044
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8048
            cacheURL = s.url;
            // More options handling for requests with no content
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8051
            if (!s.hasContent) {
                // If data is available, append data to url
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8054
                if (s.data) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8055
                    cacheURL = s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // #9682: remove data so that it's not used in an eventual retry
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8057
                    delete s.data;
                }
                // Add anti-cache in url if needed
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8061
                if (s.cache === false) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8062
                    s.url = rts.test(cacheURL) ? // If there is already a '_' parameter, set its value
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8065
                    cacheURL.replace(rts, "$1_=" + ajax_nonce++) : // Otherwise add one to the end
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8068
                    cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
                }
            }
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8073
            if (s.ifModified) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8074
                if (jQuery.lastModified[cacheURL]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8075
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8077
                if (jQuery.etag[cacheURL]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8078
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }
            // Set the correct header, if data is being sent
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8083
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8084
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }
            // Set the Accepts header for the server, depending on the dataType
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8088
            jqXHR.setRequestHeader(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8089
            "Accept", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8090
            s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8091
            s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8092
            s.accepts["*"]);
            // Check for headers option
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8096
            for (i in s.headers) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8097
                jqXHR.setRequestHeader(i, s.headers[i]);
            }
            // Allow custom headers/mimetypes and early abort
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8101
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
                // Abort if not done already and return
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8103
                return jqXHR.abort();
            }
            // aborting is no longer a cancellation
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8107
            strAbort = "abort";
            // Install callbacks on deferreds
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8110
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8111
                jqXHR[i](s[i]);
            }
            // Get transport
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8115
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8118
            if (!transport) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8119
                done(-1, "No Transport");
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8120
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8121
                jqXHR.readyState = 1;
                // Send global event
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8124
                if (fireGlobals) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8125
                    globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                }
                // Timeout
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8128
                if (s.async && s.timeout > 0) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8129
                    timeoutTimer = setTimeout(function() {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8130
                        jqXHR.abort("timeout");
                    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8131
                    s.timeout);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8134
                try {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8135
                    state = 1;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8136
                    transport.send(requestHeaders, done);
                } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8137
                catch (e) {
                    // Propagate exception as error if not done
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8139
                    if (state < 2) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8140
                        done(-1, e);
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8142
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8143
                        throw e;
                    }
                }
            }
            // Callback for when everything is done
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8149
            function done(status, nativeStatusText, responses, headers) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8150
                var isSuccess, success, error, response, modified, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8151
                statusText = nativeStatusText;
                // Called once
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8154
                if (state === 2) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8155
                    return;
                }
                // State is "done" now
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8159
                state = 2;
                // Clear timeout if it exists
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8162
                if (timeoutTimer) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8163
                    clearTimeout(timeoutTimer);
                }
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8168
                transport = undefined;
                // Cache response headers
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8171
                responseHeadersString = headers || "";
                // Set readyState
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8174
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8177
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8180
                if (responses) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8181
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }
                // Convert no matter what (that way responseXXX fields are always set)
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8185
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8188
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8191
                    if (s.ifModified) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8192
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8193
                        if (modified) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8194
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8196
                        modified = jqXHR.getResponseHeader("etag");
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8197
                        if (modified) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8198
                            jQuery.etag[cacheURL] = modified;
                        }
                    }
                    // if no content
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8203
                    if (status === 204 || s.type === "HEAD") {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8204
                        statusText = "nocontent";
                    } else {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8207
                        if (status === 304) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8208
                            statusText = "notmodified";
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8211
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8212
                            statusText = response.state;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8213
                            success = response.data;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8214
                            error = response.error;
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8215
                            isSuccess = !error;
                        }
                    }
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8217
                {
                    // We extract error from statusText
                    // then normalize statusText and status for non-aborts
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8220
                    error = statusText;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8221
                    if (status || !statusText) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8222
                        statusText = "error";
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8223
                        if (status < 0) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8224
                            status = 0;
                        }
                    }
                }
                // Set data for the fake xhr object
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8230
                jqXHR.status = status;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8231
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8234
                if (isSuccess) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8235
                    deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8236
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8237
                    deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                }
                // Status-dependent callbacks
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8241
                jqXHR.statusCode(statusCode);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8242
                statusCode = undefined;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8244
                if (fireGlobals) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8245
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8246
                    [ jqXHR, s, isSuccess ? success : error ]);
                }
                // Complete
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8250
                completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8252
                if (fireGlobals) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8253
                    globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                    // Handle the global AJAX counter
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8255
                    if (!--jQuery.active) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8256
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8261
            return jqXHR;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8264
        getJSON: function(url, data, callback) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8265
            return jQuery.get(url, data, callback, "json");
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8268
        getScript: function(url, callback) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8269
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8273
    jQuery.each([ "get", "post" ], function(i, method) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8274
        jQuery[method] = function(url, data, callback, type) {
            // shift arguments if data argument was omitted
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8276
            if (jQuery.isFunction(data)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8277
                type = type || callback;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8278
                callback = data;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8279
                data = undefined;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8282
            return jQuery.ajax({
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8283
                url: url,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8284
                type: method,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8285
                dataType: type,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8286
                data: data,
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8287
                success: callback
            });
        };
    });
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8296
    function ajaxHandleResponses(s, jqXHR, responses) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8297
        var firstDataType, ct, finalDataType, type, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8298
        contents = s.contents, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8299
        dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8302
        while (dataTypes[0] === "*") {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8303
            dataTypes.shift();
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8304
            if (ct === undefined) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8305
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }
        // Check if we're dealing with a known content-type
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8310
        if (ct) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8311
            for (type in contents) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8312
                if (contents[type] && contents[type].test(ct)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8313
                    dataTypes.unshift(type);
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8314
                    break;
                }
            }
        }
        // Check to see if we have a response for the expected dataType
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8320
        if (dataTypes[0] in responses) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8321
            finalDataType = dataTypes[0];
        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8322
        {
            // Try convertible dataTypes
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8324
            for (type in responses) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8325
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8326
                    finalDataType = type;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8327
                    break;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8329
                if (!firstDataType) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8330
                    firstDataType = type;
                }
            }
            // Or just use first one
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8334
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8340
        if (finalDataType) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8341
            if (finalDataType !== dataTypes[0]) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8342
                dataTypes.unshift(finalDataType);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8344
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8351
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8352
        var conv2, current, conv, tmp, prev, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8353
        converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8355
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8358
        if (dataTypes[1]) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8359
            for (conv in s.converters) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8360
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8364
        current = dataTypes.shift();
        // Convert to each sequential dataType
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8367
        while (current) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8369
            if (s.responseFields[current]) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8370
                jqXHR[s.responseFields[current]] = response;
            }
            // Apply the dataFilter if provided
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8374
            if (!prev && isSuccess && s.dataFilter) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8375
                response = s.dataFilter(response, s.dataType);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8378
            prev = current;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8379
            current = dataTypes.shift();
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8381
            if (current) {
                // There's only work to do if current dataType is non-auto
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8384
                if (current === "*") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8386
                    current = prev;
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8389
                    if (prev !== "*" && prev !== current) {
                        // Seek a direct converter
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8392
                        conv = converters[prev + " " + current] || converters["* " + current];
                        // If none found, seek a pair
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8395
                        if (!conv) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8396
                            for (conv2 in converters) {
                                // If conv2 outputs current
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8399
                                tmp = conv2.split(" ");
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8400
                                if (tmp[1] === current) {
                                    // If prev can be converted to accepted input
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8403
                                    conv = converters[prev + " " + tmp[0]] || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8404
                                    converters["* " + tmp[0]];
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8405
                                    if (conv) {
                                        // Condense equivalence converters
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8407
                                        if (conv === true) {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8408
                                            conv = converters[conv2];
                                        } else {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8411
                                            if (converters[conv2] !== true) {
                                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8412
                                                current = tmp[0];
                                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8413
                                                dataTypes.unshift(tmp[1]);
                                            }
                                        }
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8415
                                        break;
                                    }
                                }
                            }
                        }
                        // Apply converter (if not an equivalence)
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8422
                        if (conv !== true) {
                            // Unless errors are allowed to bubble, catch and return them
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8425
                            if (conv && s["throws"]) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8426
                                response = conv(response);
                            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8427
                            {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8428
                                try {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8429
                                    response = conv(response);
                                } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8430
                                catch (e) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8431
                                    return {
                                        state: "parsererror",
                                        error: conv ? e : "No conversion from " + prev + " to " + current
                                    };
                                }
                            }
                        }
                    }
                }
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8439
        return {
            state: "success",
            data: response
        };
    }
    // Install script dataType
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8442
    jQuery.ajaxSetup({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8443
        accepts: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8444
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8446
        contents: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8447
            script: /(?:java|ecma)script/
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8449
        converters: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8450
            "text script": function(text) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8451
                jQuery.globalEval(text);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8452
                return text;
            }
        }
    });
    // Handle cache's special case and global
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8458
    jQuery.ajaxPrefilter("script", function(s) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8459
        if (s.cache === undefined) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8460
            s.cache = false;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8462
        if (s.crossDomain) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8463
            s.type = "GET";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8464
            s.global = false;
        }
    });
    // Bind script tag hack transport
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8469
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain requests
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8472
        if (s.crossDomain) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8474
            var script, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8475
            head = document.head || jQuery("head")[0] || document.documentElement;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8477
            return {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8479
                send: function(_, callback) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8481
                    script = document.createElement("script");
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8483
                    script.async = true;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8485
                    if (s.scriptCharset) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8486
                        script.charset = s.scriptCharset;
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8489
                    script.src = s.url;
                    // Attach handlers for all browsers
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8492
                    script.onload = script.onreadystatechange = function(_, isAbort) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8494
                        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                            // Handle memory leak in IE
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8497
                            script.onload = script.onreadystatechange = null;
                            // Remove the script
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8500
                            if (script.parentNode) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8501
                                script.parentNode.removeChild(script);
                            }
                            // Dereference the script
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8505
                            script = null;
                            // Callback if not abort
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8508
                            if (!isAbort) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8509
                                callback(200, "success");
                            }
                        }
                    };
                    // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8516
                    head.insertBefore(script, head.firstChild);
                },
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8519
                abort: function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8520
                    if (script) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8521
                        script.onload(undefined, true);
                    }
                }
            };
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8527
    var oldCallbacks = [], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8528
    rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8531
    jQuery.ajaxSetup({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8532
        jsonp: "callback",
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8533
        jsonpCallback: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8534
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8535
            this[callback] = true;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8536
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8541
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8543
        var callbackName, overwritten, responseContainer, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8544
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8545
        "url" : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8546
        typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8550
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8553
            callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8554
            s.jsonpCallback() : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8555
            s.jsonpCallback;
            // Insert callback into url or form data
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8558
            if (jsonProp) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8559
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8560
                if (s.jsonp !== false) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8561
                    s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                }
            }
            // Use data converter to retrieve json after script execution
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8565
            s.converters["script json"] = function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8566
                if (!responseContainer) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8567
                    jQuery.error(callbackName + " was not called");
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8569
                return responseContainer[0];
            };
            // force json dataType
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8573
            s.dataTypes[0] = "json";
            // Install callback
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8576
            overwritten = window[callbackName];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8577
            window[callbackName] = function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8578
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8582
            jqXHR.always(function() {
                // Restore preexisting value
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8584
                window[callbackName] = overwritten;
                // Save back as free
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8587
                if (s[callbackName]) {
                    // make sure that re-using the options doesn't screw things around
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8589
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // save the callback name for future use
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8592
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8596
                if (responseContainer && jQuery.isFunction(overwritten)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8597
                    overwritten(responseContainer[0]);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8600
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8604
            return "script";
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8607
    var xhrCallbacks, xhrSupported, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8608
    xhrId = 0, // #5280: Internet Explorer will keep connections alive if we don't abort on unload
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8610
    xhrOnUnloadAbort = window.ActiveXObject && function() {
        // Abort all pending requests
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8612
        var key;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8613
        for (key in xhrCallbacks) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8614
            xhrCallbacks[key](undefined, true);
        }
    };
    // Functions to create xhrs
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8619
    function createStandardXHR() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8620
        try {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8621
            return new window.XMLHttpRequest();
        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8622
        catch (e) {}
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8625
    function createActiveXHR() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8626
        try {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8627
            return new window.ActiveXObject("Microsoft.XMLHTTP");
        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8628
        catch (e) {}
    }
    // Create the request object
    // (This is still attached to ajaxSettings for backward compatibility)
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8633
    jQuery.ajaxSettings.xhr = window.ActiveXObject ? /* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8640
    function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8641
        return !this.isLocal && createStandardXHR() || createActiveXHR();
    } : // For all other browsers, use the standard XMLHttpRequest object
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8644
    createStandardXHR;
    // Determine support properties
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8647
    xhrSupported = jQuery.ajaxSettings.xhr();
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8648
    jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8649
    xhrSupported = jQuery.support.ajax = !!xhrSupported;
    // Create transport if the browser can provide an xhr
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8652
    if (xhrSupported) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8654
        jQuery.ajaxTransport(function(s) {
            // Cross domain only allowed if supported through XMLHttpRequest
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8656
            if (!s.crossDomain || jQuery.support.cors) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8658
                var callback;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8660
                return {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8661
                    send: function(headers, complete) {
                        // Get a new xhr
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8664
                        var handle, i, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8665
                        xhr = s.xhr();
                        // Open the socket
                        // Passing null username, generates a login popup on Opera (#2865)
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8669
                        if (s.username) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8670
                            xhr.open(s.type, s.url, s.async, s.username, s.password);
                        } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8671
                        {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8672
                            xhr.open(s.type, s.url, s.async);
                        }
                        // Apply custom fields if provided
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8676
                        if (s.xhrFields) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8677
                            for (i in s.xhrFields) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8678
                                xhr[i] = s.xhrFields[i];
                            }
                        }
                        // Override mime type if needed
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8683
                        if (s.mimeType && xhr.overrideMimeType) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8684
                            xhr.overrideMimeType(s.mimeType);
                        }
                        // X-Requested-With header
                        // For cross-domain requests, seeing as conditions for a preflight are
                        // akin to a jigsaw puzzle, we simply never set it to be sure.
                        // (it can always be set on a per-request basis or even using ajaxSetup)
                        // For same-domain requests, won't change header if already provided.
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8692
                        if (!s.crossDomain && !headers["X-Requested-With"]) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8693
                            headers["X-Requested-With"] = "XMLHttpRequest";
                        }
                        // Need an extra try/catch for cross domain requests in Firefox 3
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8697
                        try {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8698
                            for (i in headers) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8699
                                xhr.setRequestHeader(i, headers[i]);
                            }
                        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8701
                        catch (err) {}
                        // Do send the request
                        // This may raise an exception which is actually
                        // handled in jQuery.ajax (so no try/catch here)
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8706
                        xhr.send(s.hasContent && s.data || null);
                        // Listener
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8709
                        callback = function(_, isAbort) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8710
                            var status, responseHeaders, statusText, responses;
                            // Firefox throws exceptions when accessing properties
                            // of an xhr when a network error occurred
                            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8715
                            try {
                                // Was never called and is aborted or complete
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8718
                                if (callback && (isAbort || xhr.readyState === 4)) {
                                    // Only called once
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8721
                                    callback = undefined;
                                    // Do not keep as active anymore
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8724
                                    if (handle) {
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8725
                                        xhr.onreadystatechange = jQuery.noop;
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8726
                                        if (xhrOnUnloadAbort) {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8727
                                            delete xhrCallbacks[handle];
                                        }
                                    }
                                    // If it's an abort
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8732
                                    if (isAbort) {
                                        // Abort it manually if needed
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8734
                                        if (xhr.readyState !== 4) {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8735
                                            xhr.abort();
                                        }
                                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8737
                                    {
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8738
                                        responses = {};
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8739
                                        status = xhr.status;
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8740
                                        responseHeaders = xhr.getAllResponseHeaders();
                                        // When requesting binary data, IE6-9 will throw an exception
                                        // on any attempt to access responseText (#11426)
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8744
                                        if (typeof xhr.responseText === "string") {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8745
                                            responses.text = xhr.responseText;
                                        }
                                        // Firefox throws an exception when accessing
                                        // statusText for faulty cross-domain requests
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8750
                                        try {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8751
                                            statusText = xhr.statusText;
                                        } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8752
                                        catch (e) {
                                            // We normalize with Webkit giving an empty statusText
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8754
                                            statusText = "";
                                        }
                                        // Filter status for non standard behaviors
                                        // If the request is local and we have data: assume a success
                                        // (success with no data won't get notified, that's the best we
                                        // can do given current implementations)
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8762
                                        if (!status && s.isLocal && !s.crossDomain) {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8763
                                            status = responses.text ? 200 : 404;
                                        } else {
                                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8765
                                            if (status === 1223) {
                                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8766
                                                status = 204;
                                            }
                                        }
                                    }
                                }
                            } //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8770
                            catch (firefoxAccessException) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8771
                                if (!isAbort) {
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8772
                                    complete(-1, firefoxAccessException);
                                }
                            }
                            // Call complete if needed
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8777
                            if (responses) {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8778
                                complete(status, statusText, responses, responseHeaders);
                            }
                        };
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8782
                        if (!s.async) {
                            // if we're in sync mode we fire the callback
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8784
                            callback();
                        } else {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8785
                            if (xhr.readyState === 4) {
                                // (IE6 & IE7) if it's in cache and has been
                                // retrieved directly we need to fire the callback
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8788
                                setTimeout(callback);
                            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8789
                            {
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8790
                                handle = ++xhrId;
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8791
                                if (xhrOnUnloadAbort) {
                                    // Create the active xhrs callbacks list if needed
                                    // and attach the unload handler
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8794
                                    if (!xhrCallbacks) {
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8795
                                        xhrCallbacks = {};
                                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8796
                                        jQuery(window).unload(xhrOnUnloadAbort);
                                    }
                                    // Add to list of active xhrs callbacks
                                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8799
                                    xhrCallbacks[handle] = callback;
                                }
                                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8801
                                xhr.onreadystatechange = callback;
                            }
                        }
                    },
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8805
                    abort: function() {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8806
                        if (callback) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8807
                            callback(undefined, true);
                        }
                    }
                };
            }
        });
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8814
    var fxNow, timerId, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8815
    rfxtypes = /^(?:toggle|show|hide)$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8816
    rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8817
    rrun = /queueHooks$/, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8818
    animationPrefilters = [ defaultPrefilter ], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8819
    tweeners = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8820
        "*": [ function(prop, value) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8821
            var tween = this.createTween(prop, value), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8822
            target = tween.cur(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8823
            parts = rfxnum.exec(value), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8824
            unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8827
            start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8828
            rfxnum.exec(jQuery.css(tween.elem, prop)), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8829
            scale = 1, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8830
            maxIterations = 20;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8832
            if (start && start[3] !== unit) {
                // Trust units reported by jQuery.css
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8834
                unit = unit || start[3];
                // Make sure we update the tween properties later on
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8837
                parts = parts || [];
                // Iteratively approximate from a nonzero starting point
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8840
                start = +target || 1;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8842
                do {
                    // If previous iteration zeroed out, double until we get *something*
                    // Use a string for doubling factor so we don't accidentally see scale as unchanged below
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8845
                    scale = scale || ".5";
                    // Adjust and apply
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8848
                    start = start / scale;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8849
                    jQuery.style(tween.elem, prop, start + unit);
                } while (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8853
                scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            // Update tween properties
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8857
            if (parts) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8858
                start = tween.start = +start || +target || 0;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8859
                tween.unit = unit;
                // If a +=/-= token was provided, we're doing a relative animation
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8861
                tween.end = parts[1] ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8862
                start + (parts[1] + 1) * parts[2] : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8863
                +parts[2];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8866
            return tween;
        } ]
    };
    // Animations created synchronously will run synchronously
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8871
    function createFxNow() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8872
        setTimeout(function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8873
            fxNow = undefined;
        });
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8875
        return fxNow = jQuery.now();
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8878
    function createTween(value, prop, animation) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8879
        var tween, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8880
        collection = (tweeners[prop] || []).concat(tweeners["*"]), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8881
        index = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8882
        length = collection.length;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8883
        for (;index < length; index++) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8884
            if (tween = collection[index].call(animation, prop, value)) {
                // we're done with this property
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8887
                return tween;
            }
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8892
    function Animation(elem, properties, options) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8893
        var result, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8894
        stopped, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8895
        index = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8896
        length = animationPrefilters.length, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8897
        deferred = jQuery.Deferred().always(function() {
            // don't match elem in the :animated selector
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8899
            delete tick.elem;
        }), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8901
        tick = function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8902
            if (stopped) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8903
                return false;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8905
            var currentTime = fxNow || createFxNow(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8906
            remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8908
            temp = remaining / animation.duration || 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8909
            percent = 1 - temp, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8910
            index = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8911
            length = animation.tweens.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8913
            for (;index < length; index++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8914
                animation.tweens[index].run(percent);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8917
            deferred.notifyWith(elem, [ animation, percent, remaining ]);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8919
            if (percent < 1 && length) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8920
                return remaining;
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8921
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8922
                deferred.resolveWith(elem, [ animation ]);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8923
                return false;
            }
        }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8926
        animation = deferred.promise({
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8927
            elem: elem,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8928
            props: jQuery.extend({}, properties),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8929
            opts: jQuery.extend(true, {
                specialEasing: {}
            }, options),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8930
            originalProperties: properties,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8931
            originalOptions: options,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8932
            startTime: fxNow || createFxNow(),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8933
            duration: options.duration,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8934
            tweens: [],
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8935
            createTween: function(prop, end) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8936
                var tween = jQuery.Tween(elem, animation.opts, prop, end, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8937
                animation.opts.specialEasing[prop] || animation.opts.easing);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8938
                animation.tweens.push(tween);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8939
                return tween;
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8941
            stop: function(gotoEnd) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8942
                var index = 0, // if we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8945
                length = gotoEnd ? animation.tweens.length : 0;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8946
                if (stopped) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8947
                    return this;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8949
                stopped = true;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8950
                for (;index < length; index++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8951
                    animation.tweens[index].run(1);
                }
                // resolve when we played the last frame
                // otherwise, reject
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8956
                if (gotoEnd) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8957
                    deferred.resolveWith(elem, [ animation, gotoEnd ]);
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8958
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8959
                    deferred.rejectWith(elem, [ animation, gotoEnd ]);
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8961
                return this;
            }
        }), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8964
        props = animation.props;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8966
        propFilter(props, animation.opts.specialEasing);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8968
        for (;index < length; index++) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8969
            result = animationPrefilters[index].call(animation, elem, props, animation.opts);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8970
            if (result) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8971
                return result;
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8975
        jQuery.map(props, createTween, animation);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8977
        if (jQuery.isFunction(animation.opts.start)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8978
            animation.opts.start.call(elem, animation);
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8981
        jQuery.fx.timer(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8982
        jQuery.extend(tick, {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8983
            elem: elem,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8984
            anim: animation,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8985
            queue: animation.opts.queue
        }));
        // attach callbacks from options
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8990
        return animation.progress(animation.opts.progress).done(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8991
        animation.opts.done, animation.opts.complete).fail(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8992
        animation.opts.fail).always(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8993
        animation.opts.always);
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8996
    function propFilter(props, specialEasing) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 8997
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9000
        for (index in props) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9001
            name = jQuery.camelCase(index);
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9002
            easing = specialEasing[name];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9003
            value = props[index];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9004
            if (jQuery.isArray(value)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9005
                easing = value[1];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9006
                value = props[index] = value[0];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9009
            if (index !== name) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9010
                props[name] = value;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9011
                delete props[index];
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9014
            hooks = jQuery.cssHooks[name];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9015
            if (hooks && "expand" in hooks) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9016
                value = hooks.expand(value);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9017
                delete props[name];
                // not quite $.extend, this wont overwrite keys already present.
                // also - reusing 'index' from above because we have the correct "name"
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9021
                for (index in value) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9022
                    if (!(index in props)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9023
                        props[index] = value[index];
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9024
                        specialEasing[index] = easing;
                    }
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9027
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9028
                specialEasing[name] = easing;
            }
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9033
    jQuery.Animation = jQuery.extend(Animation, {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9035
        tweener: function(props, callback) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9036
            if (jQuery.isFunction(props)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9037
                callback = props;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9038
                props = [ "*" ];
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9039
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9040
                props = props.split(" ");
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9043
            var prop, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9044
            index = 0, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9045
            length = props.length;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9047
            for (;index < length; index++) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9048
                prop = props[index];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9049
                tweeners[prop] = tweeners[prop] || [];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9050
                tweeners[prop].unshift(callback);
            }
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9054
        prefilter: function(callback, prepend) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9055
            if (prepend) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9056
                animationPrefilters.unshift(callback);
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9057
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9058
                animationPrefilters.push(callback);
            }
        }
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9063
    function defaultPrefilter(elem, props, opts) {
        /* jshint validthis: true */
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9065
        var prop, value, toggle, tween, hooks, oldfire, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9066
        anim = this, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9067
        orig = {}, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9068
        style = elem.style, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9069
        hidden = elem.nodeType && isHidden(elem), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9070
        dataShow = jQuery._data(elem, "fxshow");
        // handle queue: false promises
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9073
        if (!opts.queue) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9074
            hooks = jQuery._queueHooks(elem, "fx");
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9075
            if (hooks.unqueued == null) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9076
                hooks.unqueued = 0;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9077
                oldfire = hooks.empty.fire;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9078
                hooks.empty.fire = function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9079
                    if (!hooks.unqueued) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9080
                        oldfire();
                    }
                };
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9084
            hooks.unqueued++;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9086
            anim.always(function() {
                // doing this makes sure that the complete handler will be called
                // before this completes
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9089
                anim.always(function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9090
                    hooks.unqueued--;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9091
                    if (!jQuery.queue(elem, "fx").length) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9092
                        hooks.empty.fire();
                    }
                });
            });
        }
        // height/width overflow pass
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9099
        if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
            // Make sure that nothing sneaks out
            // Record all 3 overflow attributes because IE does not
            // change the overflow attribute when overflowX and
            // overflowY are set to the same value
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9104
            opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
            // Set display property to inline-block for height/width
            // animations on inline elements that are having width/height animated
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9108
            if (jQuery.css(elem, "display") === "inline" && //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9109
            jQuery.css(elem, "float") === "none") {
                // inline-level elements accept inline-block;
                // block-level elements need to be inline with layout
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9113
                if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9114
                    style.display = "inline-block";
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9116
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9117
                    style.zoom = 1;
                }
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9122
        if (opts.overflow) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9123
            style.overflow = "hidden";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9124
            if (!jQuery.support.shrinkWrapBlocks) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9125
                anim.always(function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9126
                    style.overflow = opts.overflow[0];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9127
                    style.overflowX = opts.overflow[1];
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9128
                    style.overflowY = opts.overflow[2];
                });
            }
        }
        // show/hide pass
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9135
        for (prop in props) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9136
            value = props[prop];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9137
            if (rfxtypes.exec(value)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9138
                delete props[prop];
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9139
                toggle = toggle || value === "toggle";
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9140
                if (value === (hidden ? "hide" : "show")) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9141
                    continue;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9143
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9147
        if (!jQuery.isEmptyObject(orig)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9148
            if (dataShow) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9149
                if ("hidden" in dataShow) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9150
                    hidden = dataShow.hidden;
                }
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9152
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9153
                dataShow = jQuery._data(elem, "fxshow", {});
            }
            // store state if its toggle - enables .stop().toggle() to "reverse"
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9157
            if (toggle) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9158
                dataShow.hidden = !hidden;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9160
            if (hidden) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9161
                jQuery(elem).show();
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9162
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9163
                anim.done(function() {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9164
                    jQuery(elem).hide();
                });
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9167
            anim.done(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9168
                var prop;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9169
                jQuery._removeData(elem, "fxshow");
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9170
                for (prop in orig) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9171
                    jQuery.style(elem, prop, orig[prop]);
                }
            });
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9174
            for (prop in orig) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9175
                tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9177
                if (!(prop in dataShow)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9178
                    dataShow[prop] = tween.start;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9179
                    if (hidden) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9180
                        tween.end = tween.start;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9181
                        tween.start = prop === "width" || prop === "height" ? 1 : 0;
                    }
                }
            }
        }
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9188
    function Tween(elem, options, prop, end, easing) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9189
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9191
    jQuery.Tween = Tween;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9193
    Tween.prototype = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9194
        constructor: Tween,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9195
        init: function(elem, options, prop, end, easing, unit) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9196
            this.elem = elem;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9197
            this.prop = prop;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9198
            this.easing = easing || "swing";
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9199
            this.options = options;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9200
            this.start = this.now = this.cur();
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9201
            this.end = end;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9202
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9204
        cur: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9205
            var hooks = Tween.propHooks[this.prop];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9207
            return hooks && hooks.get ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9208
            hooks.get(this) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9209
            Tween.propHooks._default.get(this);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9211
        run: function(percent) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9212
            var eased, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9213
            hooks = Tween.propHooks[this.prop];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9215
            if (this.options.duration) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9216
                this.pos = eased = jQuery.easing[this.easing](//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9217
                percent, this.options.duration * percent, 0, 1, this.options.duration);
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9219
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9220
                this.pos = eased = percent;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9222
            this.now = (this.end - this.start) * eased + this.start;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9224
            if (this.options.step) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9225
                this.options.step.call(this.elem, this.now, this);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9228
            if (hooks && hooks.set) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9229
                hooks.set(this);
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9230
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9231
                Tween.propHooks._default.set(this);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9233
            return this;
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9237
    Tween.prototype.init.prototype = Tween.prototype;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9239
    Tween.propHooks = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9240
        _default: {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9241
            get: function(tween) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9242
                var result;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9244
                if (tween.elem[tween.prop] != null && (//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9245
                !tween.elem.style || tween.elem.style[tween.prop] == null)) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9246
                    return tween.elem[tween.prop];
                }
                // passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails
                // so, simple values such as "10px" are parsed to Float.
                // complex values such as "rotate(1rad)" are returned as is.
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9253
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9255
                return !result || result === "auto" ? 0 : result;
            },
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9257
            set: function(tween) {
                // use step hook for back compat - use cssHook if its there - use .style if its
                // available and use plain properties where available
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9260
                if (jQuery.fx.step[tween.prop]) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9261
                    jQuery.fx.step[tween.prop](tween);
                } else {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9262
                    if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9263
                        jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9264
                    {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9265
                        tween.elem[tween.prop] = tween.now;
                    }
                }
            }
        }
    };
    // Support: IE <=9
    // Panic based approach to setting things on disconnected nodes
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9274
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9275
        set: function(tween) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9276
            if (tween.elem.nodeType && tween.elem.parentNode) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9277
                tween.elem[tween.prop] = tween.now;
            }
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9282
    jQuery.each([ "toggle", "show", "hide" ], function(i, name) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9283
        var cssFn = jQuery.fn[name];
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9284
        jQuery.fn[name] = function(speed, easing, callback) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9285
            return speed == null || typeof speed === "boolean" ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9286
            cssFn.apply(this, arguments) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9287
            this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9291
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9292
        fadeTo: function(speed, to, easing, callback) {
            // show any hidden elements after setting opacity to 0
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9295
            return this.filter(isHidden).css("opacity", 0).show().end().animate(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9298
            {
                opacity: to
            }, speed, easing, callback);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9300
        animate: function(prop, speed, easing, callback) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9301
            var empty = jQuery.isEmptyObject(prop), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9302
            optall = jQuery.speed(speed, easing, callback), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9303
            doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9305
                var anim = Animation(this, jQuery.extend({}, prop), optall);
                // Empty animations, or finishing resolves immediately
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9308
                if (empty || jQuery._data(this, "finish")) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9309
                    anim.stop(true);
                }
            };
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9312
            doAnimation.finish = doAnimation;
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9314
            return empty || optall.queue === false ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9315
            this.each(doAnimation) : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9316
            this.queue(optall.queue, doAnimation);
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9318
        stop: function(type, clearQueue, gotoEnd) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9319
            var stopQueue = function(hooks) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9320
                var stop = hooks.stop;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9321
                delete hooks.stop;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9322
                stop(gotoEnd);
            };
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9325
            if (typeof type !== "string") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9326
                gotoEnd = clearQueue;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9327
                clearQueue = type;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9328
                type = undefined;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9330
            if (clearQueue && type !== false) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9331
                this.queue(type || "fx", []);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9334
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9335
                var dequeue = true, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9336
                index = type != null && type + "queueHooks", //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9337
                timers = jQuery.timers, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9338
                data = jQuery._data(this);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9340
                if (index) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9341
                    if (data[index] && data[index].stop) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9342
                        stopQueue(data[index]);
                    }
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9344
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9345
                    for (index in data) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9346
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9347
                            stopQueue(data[index]);
                        }
                    }
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9352
                for (index = timers.length; index--; ) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9353
                    if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9354
                        timers[index].anim.stop(gotoEnd);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9355
                        dequeue = false;
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9356
                        timers.splice(index, 1);
                    }
                }
                // start the next in the queue if the last step wasn't forced
                // timers currently will call their complete callbacks, which will dequeue
                // but only if they were gotoEnd
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9363
                if (dequeue || !gotoEnd) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9364
                    jQuery.dequeue(this, type);
                }
            });
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9368
        finish: function(type) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9369
            if (type !== false) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9370
                type = type || "fx";
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9372
            return this.each(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9373
                var index, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9374
                data = jQuery._data(this), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9375
                queue = data[type + "queue"], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9376
                hooks = data[type + "queueHooks"], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9377
                timers = jQuery.timers, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9378
                length = queue ? queue.length : 0;
                // enable finishing flag on private data
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9381
                data.finish = true;
                // empty the queue first
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9384
                jQuery.queue(this, type, []);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9386
                if (hooks && hooks.stop) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9387
                    hooks.stop.call(this, true);
                }
                // look for any active animations, and finish them
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9391
                for (index = timers.length; index--; ) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9392
                    if (timers[index].elem === this && timers[index].queue === type) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9393
                        timers[index].anim.stop(true);
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9394
                        timers.splice(index, 1);
                    }
                }
                // look for any animations in the old queue and finish them
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9399
                for (index = 0; index < length; index++) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9400
                    if (queue[index] && queue[index].finish) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9401
                        queue[index].finish.call(this);
                    }
                }
                // turn off finishing flag
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9406
                delete data.finish;
            });
        }
    });
    // Generate parameters to create a standard animation
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9412
    function genFx(type, includeWidth) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9413
        var which, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9414
        attrs = {
            height: type
        }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9415
        i = 0;
        // if we include width, step value is 1 to do all cssExpand values,
        // if we don't include width, step value is 2 to skip over Left and Right
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9419
        includeWidth = includeWidth ? 1 : 0;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9420
        for (;i < 4; i += 2 - includeWidth) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9421
            which = cssExpand[i];
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9422
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9425
        if (includeWidth) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9426
            attrs.opacity = attrs.width = type;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9429
        return attrs;
    }
    // Generate shortcuts for custom animations
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9433
    jQuery.each({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9434
        slideDown: genFx("show"),
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9435
        slideUp: genFx("hide"),
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9436
        slideToggle: genFx("toggle"),
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9437
        fadeIn: {
            opacity: "show"
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9438
        fadeOut: {
            opacity: "hide"
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9439
        fadeToggle: {
            opacity: "toggle"
        }
    }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9440
    function(name, props) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9441
        jQuery.fn[name] = function(speed, easing, callback) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9442
            return this.animate(props, speed, easing, callback);
        };
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9446
    jQuery.speed = function(speed, easing, fn) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9447
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9448
            complete: fn || !fn && easing || //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9449
            jQuery.isFunction(speed) && speed,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9450
            duration: speed,
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9451
            easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9454
        opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9455
        opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
        // normalize opt.queue - true/undefined/null -> "fx"
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9458
        if (opt.queue == null || opt.queue === true) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9459
            opt.queue = "fx";
        }
        // Queueing
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9463
        opt.old = opt.complete;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9465
        opt.complete = function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9466
            if (jQuery.isFunction(opt.old)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9467
                opt.old.call(this);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9470
            if (opt.queue) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9471
                jQuery.dequeue(this, opt.queue);
            }
        };
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9475
        return opt;
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9478
    jQuery.easing = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9479
        linear: function(p) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9480
            return p;
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9482
        swing: function(p) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9483
            return .5 - Math.cos(p * Math.PI) / 2;
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9487
    jQuery.timers = [];
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9488
    jQuery.fx = Tween.prototype.init;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9489
    jQuery.fx.tick = function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9490
        var timer, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9491
        timers = jQuery.timers, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9492
        i = 0;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9494
        fxNow = jQuery.now();
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9496
        for (;i < timers.length; i++) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9497
            timer = timers[i];
            // Checks the timer has not already been removed
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9499
            if (!timer() && timers[i] === timer) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9500
                timers.splice(i--, 1);
            }
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9504
        if (!timers.length) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9505
            jQuery.fx.stop();
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9507
        fxNow = undefined;
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9510
    jQuery.fx.timer = function(timer) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9511
        if (timer() && jQuery.timers.push(timer)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9512
            jQuery.fx.start();
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9516
    jQuery.fx.interval = 13;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9518
    jQuery.fx.start = function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9519
        if (!timerId) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9520
            timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9524
    jQuery.fx.stop = function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9525
        clearInterval(timerId);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9526
        timerId = null;
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9529
    jQuery.fx.speeds = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9530
        slow: 600,
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9531
        fast: 200,
        // Default speed
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9533
        _default: 400
    };
    // Back Compat <1.8 extension point
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9537
    jQuery.fx.step = {};
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9539
    if (jQuery.expr && jQuery.expr.filters) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9540
        jQuery.expr.filters.animated = function(elem) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9541
            return jQuery.grep(jQuery.timers, function(fn) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9542
                return elem === fn.elem;
            }).length;
        };
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9546
    jQuery.fn.offset = function(options) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9547
        if (arguments.length) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9548
            return options === undefined ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9549
            this : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9550
            this.each(function(i) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9551
                jQuery.offset.setOffset(this, options, i);
            });
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9555
        var docElem, win, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9556
        box = {
            top: 0,
            left: 0
        }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9557
        elem = this[0], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9558
        doc = elem && elem.ownerDocument;
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9560
        if (!doc) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9561
            return;
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9564
        docElem = doc.documentElement;
        // Make sure it's not a disconnected DOM node
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9567
        if (!jQuery.contains(docElem, elem)) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9568
            return box;
        }
        // If we don't have gBCR, just use 0,0 rather than error
        // BlackBerry 5, iOS 3 (original iPhone)
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9573
        if (typeof elem.getBoundingClientRect !== core_strundefined) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9574
            box = elem.getBoundingClientRect();
        }
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9576
        win = getWindow(doc);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9577
        return {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9578
            top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9579
            left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
        };
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9583
    jQuery.offset = {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9585
        setOffset: function(elem, options, i) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9586
            var position = jQuery.css(elem, "position");
            // set position first, in-case top/left are set even on static elem
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9589
            if (position === "static") {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9590
                elem.style.position = "relative";
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9593
            var curElem = jQuery(elem), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9594
            curOffset = curElem.offset(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9595
            curCSSTop = jQuery.css(elem, "top"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9596
            curCSSLeft = jQuery.css(elem, "left"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9597
            calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [ curCSSTop, curCSSLeft ]) > -1, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9598
            props = {}, curPosition = {}, curTop, curLeft;
            // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9601
            if (calculatePosition) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9602
                curPosition = curElem.position();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9603
                curTop = curPosition.top;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9604
                curLeft = curPosition.left;
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9605
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9606
                curTop = parseFloat(curCSSTop) || 0;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9607
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9610
            if (jQuery.isFunction(options)) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9611
                options = options.call(elem, i, curOffset);
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9614
            if (options.top != null) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9615
                props.top = options.top - curOffset.top + curTop;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9617
            if (options.left != null) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9618
                props.left = options.left - curOffset.left + curLeft;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9621
            if ("using" in options) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9622
                options.using.call(elem, props);
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9623
            {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9624
                curElem.css(props);
            }
        }
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9630
    jQuery.fn.extend({
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9632
        position: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9633
            if (!this[0]) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9634
                return;
            }
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9637
            var offsetParent, offset, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9638
            parentOffset = {
                top: 0,
                left: 0
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9639
            elem = this[0];
            // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9642
            if (jQuery.css(elem, "position") === "fixed") {
                // we assume that getBoundingClientRect is available when computed position is fixed
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9644
                offset = elem.getBoundingClientRect();
            } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9645
            {
                // Get *real* offsetParent
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9647
                offsetParent = this.offsetParent();
                // Get correct offsets
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9650
                offset = this.offset();
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9651
                if (!jQuery.nodeName(offsetParent[0], "html")) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9652
                    parentOffset = offsetParent.offset();
                }
                // Add offsetParent borders
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9656
                parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9657
                parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
            }
            // Subtract parent offsets and element margins
            // note: when an element has margin: auto the offsetLeft and marginLeft
            // are the same in Safari causing offset.left to incorrectly be 0
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9663
            return {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9664
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9665
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9669
        offsetParent: function() {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9670
            return this.map(function() {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9671
                var offsetParent = this.offsetParent || docElem;
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9672
                while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9673
                    offsetParent = offsetParent.offsetParent;
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9675
                return offsetParent || docElem;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9682
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9683
        var top = /Y/.test(prop);
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9685
        jQuery.fn[method] = function(val) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9686
            return jQuery.access(this, function(elem, method, val) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9687
                var win = getWindow(elem);
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9689
                if (val === undefined) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9690
                    return win ? prop in win ? win[prop] : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9691
                    win.document.documentElement[method] : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9692
                    elem[method];
                }
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9695
                if (win) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9696
                    win.scrollTo(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9697
                    !top ? val : jQuery(win).scrollLeft(), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9698
                    top ? val : jQuery(win).scrollTop());
                } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9701
                {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9702
                    elem[method] = val;
                }
            }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9704
            method, val, arguments.length, null);
        };
    });
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9708
    function getWindow(elem) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9709
        return jQuery.isWindow(elem) ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9710
        elem : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9711
        elem.nodeType === 9 ? //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9712
        elem.defaultView || elem.parentWindow : //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9713
        false;
    }
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9716
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9717
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // margin is only for outerHeight, outerWidth
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9719
            jQuery.fn[funcName] = function(margin, value) {
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9720
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9721
                extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9723
                return jQuery.access(this, function(elem, type, value) {
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9724
                    var doc;
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9726
                    if (jQuery.isWindow(elem)) {
                        // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
                        // isn't a whole lot we can do. See pull request at this URL for discussion:
                        // https://github.com/jquery/jquery/pull/764
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9730
                        return elem.document.documentElement["client" + name];
                    }
                    // Get document width or height
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9734
                    if (elem.nodeType === 9) {
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9735
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
                        // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
                        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9739
                        return Math.max(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9740
                        elem.body["scroll" + name], doc["scroll" + name], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9741
                        elem.body["offset" + name], doc["offset" + name], //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9742
                        doc["client" + name]);
                    }
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9746
                    return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9748
                    jQuery.css(elem, type, extra) : // Set width or height on the element
                    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9751
                    jQuery.style(elem, type, value, extra);
                }, //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9752
                type, chainable ? margin : undefined, chainable, null);
            };
        });
    });
    // Limit scope pollution from any deprecated API
    // (function() {
    // The number of elements contained in the matched element set
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9760
    jQuery.fn.size = function() {
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9761
        return this.length;
    };
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9764
    jQuery.fn.andSelf = jQuery.fn.addBack;
    // })();
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9767
    if (typeof module === "object" && module && typeof module.exports === "object") {
        // Expose jQuery as module.exports in loaders that implement the Node
        // module pattern (including browserify). Do not create the global, since
        // the user will be storing it themselves locally, and globals are frowned
        // upon in the Node module world.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9772
        module.exports = jQuery;
    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9773
    {
        // Otherwise expose jQuery to the global object as usual
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9775
        window.jQuery = window.$ = jQuery;
        // Register as a named AMD module, since jQuery can be concatenated with other
        // files that may use define, but not via a proper concatenation script that
        // understands anonymous AMD modules. A named AMD is safest and most robust
        // way to register. Lowercase jquery is used because AMD module names are
        // derived from file names, and jQuery is normally delivered in a lowercase
        // file name. Do this after creating the global so that if an AMD module wants
        // to call noConflict to hide this version of jQuery, it will work.
        //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9784
        if (typeof define === "function" && define.amd) {
            //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9785
            define("jquery", [], function() {
                return jQuery;
            });
        }
    }
})(//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\jquery-1.10.2.js: 9789
window);
}};
