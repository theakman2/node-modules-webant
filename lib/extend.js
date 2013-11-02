// Copied from jQuery 2.0.3

var class2type = {};

var core_toString = class2type.toString;

function isWindow(obj) {
	return obj != null && obj === obj.window;
}

function isPlainObject(obj) {
	// Not plain objects:
	// - Any object or value whose internal [[Class]] property is not "[object Object]"
	// - DOM nodes
	// - window
	if ( type( obj ) !== "object" || obj.nodeType || isWindow( obj ) ) {
		return false;
	}

	// Support: Firefox <20
	// The try/catch suppresses exceptions thrown when attempting to access
	// the "constructor" property of certain host objects, ie. |window.location|
	// https://bugzilla.mozilla.org/show_bug.cgi?id=814622
	try {
		if ( obj.constructor &&
				!core_hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}
	} catch ( e ) {
		return false;
	}

	// If the function hasn't returned already, we're confident that
	// |obj| is a plain object, created by {} or constructed with new Object
	return true;
}

function type(obj) {
	if ( obj == null ) {
		return String( obj );
	}
	// Support: Safari <= 5.1 (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ core_toString.call(obj) ] || "object" :
		typeof obj;
}

function isFunction(obj) {
	return type(obj) === "function";
}

function extend() {
	var options, name, src, copy, copyIsArray, clone,
	target = arguments[0] || {},
	i = 1,
	length = arguments.length,
	deep = false;
	
	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	
	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction(target) ) {
		target = {};
	}
	
	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = {};
		--i;
	}
	
	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];
	
				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}
	
				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( isPlainObject(copy) || (copyIsArray = Array.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray(src) ? src : [];
	
					} else {
						clone = src && isPlainObject(src) ? src : {};
					}
	
					// Never move original objects, clone them
					target[ name ] = extend( deep, clone, copy );
	
				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}
	
	// Return the modified object
	return target;
}

module.exports = extend;