(function(){
	var chunks = {};
	var onloadCallbacks = [{
		awaiting:["0","0"],
		callback:function() {
			getExports(["0","0"]);
		}
	}];
	var loadStatus = {};
	function require(data,cb) {
		if (typeof cb !== "function") {
			return getExports(data);
		}
		var missingChunkIds = getMissingChunkIds(data);
		if (!missingChunkIds.length) {
			if (typeof data[0] === "string") {
				data = [data];
			}
			cb.apply(null,getExports(data));
		} else {
			onloadCallbacks.push({
				awaiting:data,
				callback:cb
			});
			for (var i = 0; i < missingChunkIds.length; i++) {
				injectOnce(missingChunkIds[i]);
			}
		}
	};
	function getExports(data) {
		if (typeof data[0] === "string") {
			var fn = chunks[data[0]][data[1]];
			if (typeof fn !== "function") {
				throw new Error("Module " + data + "not found.");
			}
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
	function getMissingChunkIds(data) {
		if (typeof data[0] === "string") {
			data = [data];
		}
		var missing = [];
		for (var i = 0; i < data.length; i++) {
			if (!chunks.hasOwnProperty(data[i][0])) {
				missing.push(data[i][0]);
			}
		}
		return missing;
	};
	function load() {
		var call = [];
		for (var i = 0; i < onloadCallbacks.length; i++) {
			if (!getMissingChunkIds(onloadCallbacks[i].awaiting).length) {
				call.push({
					index:i,
					awaiting:onloadCallbacks[i].awaiting,
					callback:onloadCallbacks[i].callback
				});
			}
		}
		for (var i = 0; i < call.length; i++) {
			onloadCallbacks.splice(call[i].index,1);
			var data = call[i].awaiting;
			if (typeof data[0] === "string") {
				data = [data];
			}
			call[i].callback.apply(null,getExports(data));
		}
	};
	function injectOnce(chunkId) {
		if (!loadStatus.hasOwnProperty(chunkId)) {
			loadStatus[chunkId] = 1;
			inject(chunkId);
		}
	};
	function inject(chunkId) {
	    var s = document.createElement('script');
	    s.type = 'text/javascript';
	    s.async = true;
	    s.src = "js/main" + chunkId + ".js";
	    s.onload = s.onreadystatechange = function() {
			if (!s.readyState || /loaded|complete/.test(s.readyState)) {
				s.onload = s.onreadystatechange = null;
				if (loadStatus.hasOwnProperty(chunkId) && (loadStatus[chunkId] === 2)) {
		    		return;
		    	}
				loadStatus[chunkId] = 2;
				load();
			}
		};
	    var el = document.getElementsByTagName('head')[0]
	    		|| document.body
	    		|| document.documentElement;
	    el.insertBefore(s,el.firstChild);
	};
	window.__CHUNKS__ = chunks;
	injectOnce("0");
})();