(function(data,mappings){
	var cwd = "~";
	function require(path) {
		var fn = data[mappings[cwd][path]];
		if (fn.hasOwnProperty('module')) {
			return fn.module.exports;
		}
		var exports = {};
		var module = {};
		fn.module = module = { exports: exports };
		var oldCwd = cwd;
		cwd = mappings[cwd][path];
		fn.call(exports, require, fn.module, fn.module.exports);
		cwd = oldCwd;
		return module.exports;
	}
	require("~");
})({'0':function(require,module,exports) {
alert("I'm last!!");
},
'1':function(require,module,exports) {
require("./again/e.js");
},
'2':function(require,module,exports) {
require("./d.js");
var again = require("./again/e.js");
},
'3':function(require,module,exports) {
var foo = require("nested/c.js");
module.exports = 5;
},
'6':function(require,module,exports) {
require("e.js");
},
'7':function(require,module,exports) {
/**
 * Taken verbatim from medikoo's node webmake module (https://github.com/medikoo/modules-webmake)
 **/
var style, add;
if (document.createStyleSheet) {
        // IE
        if (document.styleSheets.length > 29) {
                style = document.styleSheets[document.styleSheets.length - 1];
        } else {
                style = document.createStyleSheet();
        }
        add = function (css) { style.cssText += css; };
} else {
        style = document.getElementsByTagName("head")[0]
                .appendChild(document.createElement("style"));
        style.setAttribute("type", "text/css");
        add = function (css) { style.appendChild(document.createTextNode(css)); };
}
module.exports = add;
},
'8':function(require,module,exports) {
require("@@css/addStylesheet").add("body {\n    color:red;\n}\n");
},
'5':function(require,module,exports) {
require("nested/c.js");

var b = require("./nested/again/f.js");

require("./styles.css");
},
'4':function(require,module,exports) {
var five = 5;
var six = 6;

require("./a.js");
var seven = require("./b.js");


}
},{
    "1": {
        "./again/e.js": "0"
    },
    "2": {
        "./d.js": "1",
        "./again/e.js": "0"
    },
    "3": {
        "nested/c.js": "2"
    },
    "4": {
        "./a.js": "3",
        "./b.js": "5"
    },
    "5": {
        "nested/c.js": "2",
        "./nested/again/f.js": "6",
        "./styles.css": "8"
    },
    "6": {
        "e.js": "0"
    },
    "8": {
        "@@css/addStylesheet": "7"
    },
    "~": {
        "~": "4"
    }
});