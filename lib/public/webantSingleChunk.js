(function(){
	var modules = %%MODULES%%;
	function require(moduleIds,cb) {
		if (typeof cb !== "function") {
			return getExports(moduleIds);
		} else {
			if (typeof moduleIds === "string") {
				moduleIds = [moduleIds];
			}
			cb.apply(null,getExports(moduleIds));
		}
	};
	function getExports(data) {
		if (typeof data === "string") {
			var fn = modules[data];
			if (fn.hasOwnProperty("__module")) {
				return fn.__module.exports;
			}
			var module;
			var exports = {};
			fn.__module = module = { exports: exports };
			fn.call(exports,require,module,exports);
			return module.exports;
		} else {
			var ret = [];
			for (var i = 0; i < data.length; i++) {
				ret.push(getExports(data[i]));
			}
			return ret;
		}
	};
	getExports(%%ENTRY_MODULE_ID%%);
})();