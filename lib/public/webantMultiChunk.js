(function(){
	var W = {};
	W.headElement;
	W.modules = {};
	W.moduleIdsToChunkIds = %%%MODULE_IDS_TO_CHUNK_IDS%%%;
	W.onloadCallbacks = [{
		awaiting:%%%ENTRY_MODULE_ID%%%,
		callback:function() {
			W.getExports(%%%ENTRY_MODULE_ID%%%);
		}
	}];
	W.isInjecting = {};
	W.require = function(moduleIds,cb) {
		if (typeof cb !== "function") {
			return W.getExports(moduleIds);
		}
		var missingModuleIds = W.getMissingModuleIds(moduleIds);
		if (!missingModuleIds.length) {
			if (typeof moduleIds === "string") {
				moduleIds = [moduleIds];
			}
			cb.apply(null,W.getExports(moduleIds));
		} else {
			W.onloadCallbacks.push({
				awaiting:moduleIds,
				callback:cb
			});
			for (var i = 0; i < missingModuleIds.length; i++) {
				var chunkId = W.moduleIdsToChunkIds[missingModuleIds[i]];
				if (
					!W.isInjecting.hasOwnProperty(chunkId)
					|| (W.isInjecting[chunkId] !== true)
				) {
					W.isInjecting[chunkId] = true;
					W.inject(chunkId);
				}
			}
		}
	};
	W.getExports = function(data) {
		if (typeof data === "string") {
			var fn = W.modules[data];
			if (fn.hasOwnProperty("__module")) {
				return fn.__module.exports;
			}
			var module;
			var exports = {};
			fn.__module = module = { exports: exports };
			fn.call(exports,W.require,module,exports);
			return module.exports;
		} else {
			var ret = [];
			for (var i = 0; i < data.length; i++) {
				ret.push(W.getExports(data[i]));
			}
			return ret;
		}
	};
	W.getMissingModuleIds = function(moduleIds) {
		if (typeof moduleIds === "string") {
			moduleIds = [moduleIds];
		}
		var missing = [];
		for (var i = 0; i < moduleIds.length; i++) {
			if (!W.modules.hasOwnProperty(moduleIds[i])) {
				missing.push(moduleIds[i]);
			}
		}
		return missing;
	};
	W.loaded = function(chunkId) {
		if (W.isInjecting.hasOwnProperty(chunkId)) {
			delete W.isInjecting[chunkId];
		}
		var call = [];
		for (var i = 0; i < W.onloadCallbacks.length; i++) {
			if (!W.getMissingModuleIds(W.onloadCallbacks[i].awaiting).length) {
				call.push({
					index:i,
					awaiting:W.onloadCallbacks[i].awaiting,
					callback:W.onloadCallbacks[i].callback
				});
			}
		}
		for (var i = 0; i < call.length; i++) {
			W.onloadCallbacks.splice(call[i].index,1);
			var moduleIds = call[i].awaiting;
			if (typeof moduleIds === "string") {
				moduleIds = [moduleIds];
			}
			call[i].callback.apply(null,W.getExports(moduleIds));
		}
	};
	W.inject = function(chunkId) {
	    var s = document.createElement('script');
	    s.type = 'text/javascript';
	    s.async = true;
	    s.src = %%%SRC%%%;
	    if (!W.headElement) {
	    	W.headElement = document.getElementsByTagName('head')[0]
	    		|| document.body
	    		|| document.documentElement;
	    }
	    W.headElement.insertBefore(s,W.headElement.firstChild);
	};
	window.__WEBANT__ = W;
})();