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

function Requirements() {
	
	var filePaths = {};
	
	var data = {
		externalJs:[],
		externalCss:[],
		internalJs:[],
		internalCss:[],
		mappings:{}
	};

	function internalJs(content,filePath,callerFilePath,raw) {
		if (!filePaths.hasOwnProperty(filePath)) {
			filePaths[filePath] = Object.keys(filePaths).length.toString();
		}
		
		filePath = filePaths[filePath];
		
		if (callerFilePath) {
			if (!filePaths.hasOwnProperty(callerFilePath)) {
				filePaths[callerFilePath] = Object.keys(filePaths).length.toString();
			}
			callerFilePath = filePaths[callerFilePath];
		} else {
			callerFilePath = "~";
		}
		
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
		if (!filePaths.hasOwnProperty(filePath)) {
			filePaths[filePath] = Object.keys(filePaths).length.toString();
		}
		
		filePath = filePaths[filePath];
		
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
		js += "},"+JSON.stringify(data.mappings,null,"    ")+");";
		
		return js;
	}
	
	function getInternalCss() {
		return data.internalCss;
	}
	
	function getExternalJs() {
		return data.externalJs;
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