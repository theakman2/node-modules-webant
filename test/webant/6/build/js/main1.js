window.__CHUNKS__['1'] = {
"0":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested1\f.js: 1
var gh = require([ [ "1", "1" ], [ "1", "2" ] ]);

//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\nested1\f.js: 3
module.exports.msg = gh[0]({
    name: "foo"
}) + gh[1];
},"1":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 1
module.exports = require([ "1", "3" ]).template(function(Handlebars, depth0, helpers, partials, data) {
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 2
    this.compilerInfo = [ 4, ">= 1.0.0" ];
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 3
    helpers = this.merge(helpers, Handlebars.helpers);
    data = data || {};
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 4
    var buffer = "", stack1, functionType = "function", escapeExpression = this.escapeExpression;
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 7
    buffer += "Message from module ";
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 8
    if (stack1 = helpers.name) {
        stack1 = stack1.call(depth0, {
            hash: {},
            data: data
        });
    } else //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 9
    {
        stack1 = depth0.name;
        stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1;
    }
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 10
    buffer += escapeExpression(stack1) + //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 11
    "!";
    //C:\xampp\htdocs\node-modules-webant\test\webant\6\src\g.hbs: 12
    return buffer;
});
},"2":function(require,module,exports) {
//C:\xampp\htdocs\node-modules-webant\test\webant\6\src\h.js: 1
module.exports = "HJS";
},"3":function(require,module,exports) {
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
// lib/handlebars/browser-prefix.js
//@@hbs/runtime: 26
var Handlebars = {};

//@@hbs/runtime: 28
(function(Handlebars, undefined) {
    // lib/handlebars/base.js
    //@@hbs/runtime: 32
    Handlebars.VERSION = "1.0.0";
    //@@hbs/runtime: 33
    Handlebars.COMPILER_REVISION = 4;
    //@@hbs/runtime: 35
    Handlebars.REVISION_CHANGES = {
        //@@hbs/runtime: 36
        1: "<= 1.0.rc.2",
        // 1.0.rc.2 is actually rev2 but doesn't report it
        //@@hbs/runtime: 37
        2: "== 1.0.0-rc.3",
        //@@hbs/runtime: 38
        3: "== 1.0.0-rc.4",
        //@@hbs/runtime: 39
        4: ">= 1.0.0"
    };
    //@@hbs/runtime: 42
    Handlebars.helpers = {};
    //@@hbs/runtime: 43
    Handlebars.partials = {};
    //@@hbs/runtime: 45
    var toString = Object.prototype.toString, //@@hbs/runtime: 46
    functionType = "[object Function]", //@@hbs/runtime: 47
    objectType = "[object Object]";
    //@@hbs/runtime: 49
    Handlebars.registerHelper = function(name, fn, inverse) {
        //@@hbs/runtime: 50
        if (toString.call(name) === objectType) {
            //@@hbs/runtime: 51
            if (inverse || fn) {
                throw new Handlebars.Exception("Arg not supported with multiple helpers");
            }
            //@@hbs/runtime: 52
            Handlebars.Utils.extend(this.helpers, name);
        } else //@@hbs/runtime: 53
        {
            //@@hbs/runtime: 54
            if (inverse) {
                fn.not = inverse;
            }
            //@@hbs/runtime: 55
            this.helpers[name] = fn;
        }
    };
    //@@hbs/runtime: 59
    Handlebars.registerPartial = function(name, str) {
        //@@hbs/runtime: 60
        if (toString.call(name) === objectType) {
            //@@hbs/runtime: 61
            Handlebars.Utils.extend(this.partials, name);
        } else //@@hbs/runtime: 62
        {
            //@@hbs/runtime: 63
            this.partials[name] = str;
        }
    };
    //@@hbs/runtime: 67
    Handlebars.registerHelper("helperMissing", function(arg) {
        //@@hbs/runtime: 68
        if (arguments.length === 2) {
            //@@hbs/runtime: 69
            return undefined;
        } else //@@hbs/runtime: 70
        {
            //@@hbs/runtime: 71
            throw new Error("Missing helper: '" + arg + "'");
        }
    });
    //@@hbs/runtime: 75
    Handlebars.registerHelper("blockHelperMissing", function(context, options) {
        //@@hbs/runtime: 76
        var inverse = options.inverse || function() {}, fn = options.fn;
        //@@hbs/runtime: 78
        var type = toString.call(context);
        //@@hbs/runtime: 80
        if (type === functionType) {
            context = context.call(this);
        }
        //@@hbs/runtime: 82
        if (context === true) {
            //@@hbs/runtime: 83
            return fn(this);
        } else {
            //@@hbs/runtime: 84
            if (context === false || context == null) {
                //@@hbs/runtime: 85
                return inverse(this);
            } else {
                //@@hbs/runtime: 86
                if (type === "[object Array]") {
                    //@@hbs/runtime: 87
                    if (context.length > 0) {
                        //@@hbs/runtime: 88
                        return Handlebars.helpers.each(context, options);
                    } else //@@hbs/runtime: 89
                    {
                        //@@hbs/runtime: 90
                        return inverse(this);
                    }
                } else //@@hbs/runtime: 92
                {
                    //@@hbs/runtime: 93
                    return fn(context);
                }
            }
        }
    });
    //@@hbs/runtime: 97
    Handlebars.K = function() {};
    //@@hbs/runtime: 99
    Handlebars.createFrame = Object.create || function(object) {
        //@@hbs/runtime: 100
        Handlebars.K.prototype = object;
        //@@hbs/runtime: 101
        var obj = new Handlebars.K();
        //@@hbs/runtime: 102
        Handlebars.K.prototype = null;
        //@@hbs/runtime: 103
        return obj;
    };
    //@@hbs/runtime: 106
    Handlebars.logger = {
        //@@hbs/runtime: 107
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        //@@hbs/runtime: 109
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        // can be overridden in the host environment
        //@@hbs/runtime: 112
        log: function(level, obj) {
            //@@hbs/runtime: 113
            if (Handlebars.logger.level <= level) {
                //@@hbs/runtime: 114
                var method = Handlebars.logger.methodMap[level];
                //@@hbs/runtime: 115
                if (typeof console !== "undefined" && console[method]) {
                    //@@hbs/runtime: 116
                    console[method].call(console, obj);
                }
            }
        }
    };
    //@@hbs/runtime: 122
    Handlebars.log = function(level, obj) {
        Handlebars.logger.log(level, obj);
    };
    //@@hbs/runtime: 124
    Handlebars.registerHelper("each", function(context, options) {
        //@@hbs/runtime: 125
        var fn = options.fn, inverse = options.inverse;
        //@@hbs/runtime: 126
        var i = 0, ret = "", data;
        //@@hbs/runtime: 128
        var type = toString.call(context);
        //@@hbs/runtime: 129
        if (type === functionType) {
            context = context.call(this);
        }
        //@@hbs/runtime: 131
        if (options.data) {
            //@@hbs/runtime: 132
            data = Handlebars.createFrame(options.data);
        }
        //@@hbs/runtime: 135
        if (context && typeof context === "object") {
            //@@hbs/runtime: 136
            if (context instanceof Array) {
                //@@hbs/runtime: 137
                for (var j = context.length; i < j; i++) {
                    //@@hbs/runtime: 138
                    if (data) {
                        data.index = i;
                    }
                    //@@hbs/runtime: 139
                    ret = ret + fn(context[i], {
                        data: data
                    });
                }
            } else //@@hbs/runtime: 141
            {
                //@@hbs/runtime: 142
                for (var key in context) {
                    //@@hbs/runtime: 143
                    if (context.hasOwnProperty(key)) {
                        //@@hbs/runtime: 144
                        if (data) {
                            data.key = key;
                        }
                        //@@hbs/runtime: 145
                        ret = ret + fn(context[key], {
                            data: data
                        });
                        //@@hbs/runtime: 146
                        i++;
                    }
                }
            }
        }
        //@@hbs/runtime: 152
        if (i === 0) {
            //@@hbs/runtime: 153
            ret = inverse(this);
        }
        //@@hbs/runtime: 156
        return ret;
    });
    //@@hbs/runtime: 159
    Handlebars.registerHelper("if", function(conditional, options) {
        //@@hbs/runtime: 160
        var type = toString.call(conditional);
        //@@hbs/runtime: 161
        if (type === functionType) {
            conditional = conditional.call(this);
        }
        //@@hbs/runtime: 163
        if (!conditional || Handlebars.Utils.isEmpty(conditional)) {
            //@@hbs/runtime: 164
            return options.inverse(this);
        } else //@@hbs/runtime: 165
        {
            //@@hbs/runtime: 166
            return options.fn(this);
        }
    });
    //@@hbs/runtime: 170
    Handlebars.registerHelper("unless", function(conditional, options) {
        //@@hbs/runtime: 171
        return Handlebars.helpers["if"].call(this, conditional, {
            fn: options.inverse,
            inverse: options.fn
        });
    });
    //@@hbs/runtime: 174
    Handlebars.registerHelper("with", function(context, options) {
        //@@hbs/runtime: 175
        var type = toString.call(context);
        //@@hbs/runtime: 176
        if (type === functionType) {
            context = context.call(this);
        }
        //@@hbs/runtime: 178
        if (!Handlebars.Utils.isEmpty(context)) {
            return options.fn(context);
        }
    });
    //@@hbs/runtime: 181
    Handlebars.registerHelper("log", function(context, options) {
        //@@hbs/runtime: 182
        var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
        //@@hbs/runtime: 183
        Handlebars.log(level, context);
    });
    // lib/handlebars/utils.js
    //@@hbs/runtime: 188
    var errorProps = [ "description", "fileName", "lineNumber", "message", "name", "number", "stack" ];
    //@@hbs/runtime: 190
    Handlebars.Exception = function(message) {
        //@@hbs/runtime: 191
        var tmp = Error.prototype.constructor.apply(this, arguments);
        // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
        //@@hbs/runtime: 194
        for (var idx = 0; idx < errorProps.length; idx++) {
            //@@hbs/runtime: 195
            this[errorProps[idx]] = tmp[errorProps[idx]];
        }
    };
    //@@hbs/runtime: 198
    Handlebars.Exception.prototype = new Error();
    // Build out our basic SafeString type
    //@@hbs/runtime: 201
    Handlebars.SafeString = function(string) {
        //@@hbs/runtime: 202
        this.string = string;
    };
    //@@hbs/runtime: 204
    Handlebars.SafeString.prototype.toString = function() {
        //@@hbs/runtime: 205
        return this.string.toString();
    };
    //@@hbs/runtime: 208
    var escape = {
        //@@hbs/runtime: 209
        "&": "&amp;",
        //@@hbs/runtime: 210
        "<": "&lt;",
        //@@hbs/runtime: 211
        ">": "&gt;",
        //@@hbs/runtime: 212
        '"': "&quot;",
        //@@hbs/runtime: 213
        "'": "&#x27;",
        //@@hbs/runtime: 214
        "`": "&#x60;"
    };
    //@@hbs/runtime: 217
    var badChars = /[&<>"'`]/g;
    //@@hbs/runtime: 218
    var possible = /[&<>"'`]/;
    //@@hbs/runtime: 220
    var escapeChar = function(chr) {
        //@@hbs/runtime: 221
        return escape[chr] || "&amp;";
    };
    //@@hbs/runtime: 224
    Handlebars.Utils = {
        //@@hbs/runtime: 225
        extend: function(obj, value) {
            //@@hbs/runtime: 226
            for (var key in value) {
                //@@hbs/runtime: 227
                if (value.hasOwnProperty(key)) {
                    //@@hbs/runtime: 228
                    obj[key] = value[key];
                }
            }
        },
        //@@hbs/runtime: 233
        escapeExpression: function(string) {
            // don't escape SafeStrings, since they're already safe
            //@@hbs/runtime: 235
            if (string instanceof Handlebars.SafeString) {
                //@@hbs/runtime: 236
                return string.toString();
            } else {
                //@@hbs/runtime: 237
                if (string == null || string === false) {
                    //@@hbs/runtime: 238
                    return "";
                }
            }
            // Force a string conversion as this will be done by the append regardless and
            // the regex test will do this transparently behind the scenes, causing issues if
            // an object's to string has escaped characters in it.
            //@@hbs/runtime: 244
            string = string.toString();
            //@@hbs/runtime: 246
            if (!possible.test(string)) {
                return string;
            }
            //@@hbs/runtime: 247
            return string.replace(badChars, escapeChar);
        },
        //@@hbs/runtime: 250
        isEmpty: function(value) {
            //@@hbs/runtime: 251
            if (!value && value !== 0) {
                //@@hbs/runtime: 252
                return true;
            } else {
                //@@hbs/runtime: 253
                if (toString.call(value) === "[object Array]" && value.length === 0) {
                    //@@hbs/runtime: 254
                    return true;
                } else //@@hbs/runtime: 255
                {
                    //@@hbs/runtime: 256
                    return false;
                }
            }
        }
    };
    // lib/handlebars/runtime.js
    //@@hbs/runtime: 263
    Handlebars.VM = {
        //@@hbs/runtime: 264
        template: function(templateSpec) {
            // Just add water
            //@@hbs/runtime: 266
            var container = {
                //@@hbs/runtime: 267
                escapeExpression: Handlebars.Utils.escapeExpression,
                //@@hbs/runtime: 268
                invokePartial: Handlebars.VM.invokePartial,
                //@@hbs/runtime: 269
                programs: [],
                //@@hbs/runtime: 270
                program: function(i, fn, data) {
                    //@@hbs/runtime: 271
                    var programWrapper = this.programs[i];
                    //@@hbs/runtime: 272
                    if (data) {
                        //@@hbs/runtime: 273
                        programWrapper = Handlebars.VM.program(i, fn, data);
                    } else {
                        //@@hbs/runtime: 274
                        if (!programWrapper) {
                            //@@hbs/runtime: 275
                            programWrapper = this.programs[i] = Handlebars.VM.program(i, fn);
                        }
                    }
                    //@@hbs/runtime: 277
                    return programWrapper;
                },
                //@@hbs/runtime: 279
                merge: function(param, common) {
                    //@@hbs/runtime: 280
                    var ret = param || common;
                    //@@hbs/runtime: 282
                    if (param && common) {
                        //@@hbs/runtime: 283
                        ret = {};
                        //@@hbs/runtime: 284
                        Handlebars.Utils.extend(ret, common);
                        //@@hbs/runtime: 285
                        Handlebars.Utils.extend(ret, param);
                    }
                    //@@hbs/runtime: 287
                    return ret;
                },
                //@@hbs/runtime: 289
                programWithDepth: Handlebars.VM.programWithDepth,
                //@@hbs/runtime: 290
                noop: Handlebars.VM.noop,
                //@@hbs/runtime: 291
                compilerInfo: null
            };
            //@@hbs/runtime: 294
            return function(context, options) {
                //@@hbs/runtime: 295
                options = options || {};
                //@@hbs/runtime: 296
                var result = templateSpec.call(container, Handlebars, context, options.helpers, options.partials, options.data);
                //@@hbs/runtime: 298
                var compilerInfo = container.compilerInfo || [], //@@hbs/runtime: 299
                compilerRevision = compilerInfo[0] || 1, //@@hbs/runtime: 300
                currentRevision = Handlebars.COMPILER_REVISION;
                //@@hbs/runtime: 302
                if (compilerRevision !== currentRevision) {
                    //@@hbs/runtime: 303
                    if (compilerRevision < currentRevision) {
                        //@@hbs/runtime: 304
                        var runtimeVersions = Handlebars.REVISION_CHANGES[currentRevision], //@@hbs/runtime: 305
                        compilerVersions = Handlebars.REVISION_CHANGES[compilerRevision];
                        //@@hbs/runtime: 306
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. " + //@@hbs/runtime: 307
                        "Please update your precompiler to a newer version (" + runtimeVersions + ") or downgrade your runtime to an older version (" + compilerVersions + ").";
                    } else //@@hbs/runtime: 308
                    {
                        // Use the embedded version info since the runtime doesn't know about this revision yet
                        //@@hbs/runtime: 310
                        throw "Template was precompiled with a newer version of Handlebars than the current runtime. " + //@@hbs/runtime: 311
                        "Please update your runtime to a newer version (" + compilerInfo[1] + ").";
                    }
                }
                //@@hbs/runtime: 315
                return result;
            };
        },
        //@@hbs/runtime: 319
        programWithDepth: function(i, fn, data) {
            //@@hbs/runtime: 320
            var args = Array.prototype.slice.call(arguments, 3);
            //@@hbs/runtime: 322
            var program = function(context, options) {
                //@@hbs/runtime: 323
                options = options || {};
                //@@hbs/runtime: 325
                return fn.apply(this, [ context, options.data || data ].concat(args));
            };
            //@@hbs/runtime: 327
            program.program = i;
            //@@hbs/runtime: 328
            program.depth = args.length;
            //@@hbs/runtime: 329
            return program;
        },
        //@@hbs/runtime: 331
        program: function(i, fn, data) {
            //@@hbs/runtime: 332
            var program = function(context, options) {
                //@@hbs/runtime: 333
                options = options || {};
                //@@hbs/runtime: 335
                return fn(context, options.data || data);
            };
            //@@hbs/runtime: 337
            program.program = i;
            //@@hbs/runtime: 338
            program.depth = 0;
            //@@hbs/runtime: 339
            return program;
        },
        //@@hbs/runtime: 341
        noop: function() {
            return "";
        },
        //@@hbs/runtime: 342
        invokePartial: function(partial, name, context, helpers, partials, data) {
            //@@hbs/runtime: 343
            var options = {
                helpers: helpers,
                partials: partials,
                data: data
            };
            //@@hbs/runtime: 345
            if (partial === undefined) {
                //@@hbs/runtime: 346
                throw new Handlebars.Exception("The partial " + name + " could not be found");
            } else {
                //@@hbs/runtime: 347
                if (partial instanceof Function) {
                    //@@hbs/runtime: 348
                    return partial(context, options);
                } else {
                    //@@hbs/runtime: 349
                    if (!Handlebars.compile) {
                        //@@hbs/runtime: 350
                        throw new Handlebars.Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
                    } else //@@hbs/runtime: 351
                    {
                        //@@hbs/runtime: 352
                        partials[name] = Handlebars.compile(partial, {
                            data: data !== undefined
                        });
                        //@@hbs/runtime: 353
                        return partials[name](context, options);
                    }
                }
            }
        }
    };
    //@@hbs/runtime: 358
    Handlebars.template = Handlebars.VM.template;
})(//@@hbs/runtime: 361
Handlebars);

//@@hbs/runtime: 364
module.exports = Handlebars;
}};
