var path = require("path");

var fs = require("fs-extra");

var extend = require("./extend.js");

function filterByFilepath(filePath) {
	return function(item) {
		return item.filePath === filePath;
	}
}

function mapByContent(item) {
	return item.content;
}

function relative(from,to) {
	return path.relative(from,to).replace(/\\/g,"/");
}

function Requirements(base) {
	
	var data = {
		externalJs:[],
		externalCss:[],
		internalJs:[],
		internalCss:[],
		mappings:{}
	};

	function internalJs(content,filePath,callerFilePath,raw) {
		if (typeof base === "undefined") {
			base = path.dirname(filePath);
		}
		
		filePath = relative(base,filePath);
		callerFilePath = callerFilePath ? relative(base,callerFilePath) : "~";
		raw = raw ? raw : "~";
		
		if (!data.internalJs.filter(filterByFilepath(filePath)).length) {
			data.internalJs.push({
				filePath:filePath,
				content:content
			});
		}
		
		if (!data.mappings.hasOwnProperty(callerFilePath)) {
			data.mappings[callerFilePath] = {};
		}
		
		data.mappings[callerFilePath][raw] = filePath;
	}
	
	function internalCss(content,filePath) {
		if (typeof base === "undefined") {
			base = path.dirname(filePath);
		}
		
		filePath = relative(base,filePath);
		
		if (!data.internalCss.filter(filterByFilepath(filePath)).length) {
			data.internalCss.push({
				filePath:filePath,
				content:content
			});
		}
	}
	
	function externalJs(url) {
		if (data.externalJs.indexOf(url) == -1) {
			data.externalJs.push(url);
		}
	}
	
	function externalCss(url) {
		if (data.externalCss.indexOf(url) == -1) {
			data.externalCss.push(url);
		}
	}
	
	function update(payload) {
		switch(payload.type) {
			case "internalJs":
				return internalJs(
					payload.content,
					payload.filePath,
					payload.parentScope ? payload.parentScope.filePath : null,
					payload.raw
				);
			case "internalCss":
				return internalCss(
					payload.content,
					payload.filePath
				);
			case "externalJs":
				return externalJs(payload.url);
			case "externalCss":
				return externalCss(payload.url);
			default:
				return null;
		}
	}
	
	function getInternalJs() {
		var js = "";
		js += "(function(data,mappings){";
			js += "\n\tvar cwd = \"~\";";
			
			js += "\n\tfunction require(path) {";
				js += "\n\t\tvar fn = data[mappings[cwd][path]];";
				js += "\n\t\tif (fn.hasOwnProperty('module')) {";
					js += "\n\t\t\treturn fn.module.exports;";
				js += "\n\t\t}";
				js += "\n\t\tvar exports = {};";
				js += "\n\t\tvar module = {};";
				js += "\n\t\tfn.module = module = { exports: exports };";
				
				js += "\n\t\tvar oldCwd = cwd;";
				js += "\n\t\tcwd = mappings[cwd][path];";
				js += "\n\t\tfn.call(exports, require, fn.module, fn.module.exports);";
				js += "\n\t\tcwd = oldCwd;";
				js += "\n\t\treturn module.exports;";
			js += "\n\t}";

			js += "\n\trequire(\"~\");";
		js += "\n})({";
			for (var i = 0; i < data.internalJs.length; i++) {
				js += "'"+data.internalJs[i].filePath+"':function(require,module,exports) {\n";
				js += data.internalJs[i].content;
				js += "\n}";
				if (i !== (data.internalJs.length-1)) {
					js+= ",";
				}
				js += "\n";
			}
		js += "},"+JSON.stringify(data.mappings)+");";
		
		return js;
	}
	
	function getInternalCss() {
		if (data.internalCss.length) {
			return data.internalCss.map(mapByContent).join(" ");
		}
		return "";
	}
	
	function getExternalJs() {
		return data.externalJs.map(function(url){
			return '<script type="text/javascript" src="'+url+'"></script>';
		});
	}
	
	function getExternalCss() {
		return data.externalCss.map(function(url){
			return '<link rel="stylesheet" type="text/css" href="'+url+'" />';
		});
	}
	
	return {
		getInternalJs:getInternalJs,
		getInternalCss:getInternalCss,
		getExternalJs:getExternalJs,
		getExternalCss:getExternalCss,
		update:update,
		get data() {
			// return clone instead of original
			return extend({},data);
		},
		set data() {
			throw new Error("Cannot set requirements.data directly. " +
					"Use requirements.update(payload) instead.");
		}
	};
}

module.exports = Requirements;