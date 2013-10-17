var path = require("path");

function filterByFilepath(filepath) {
	return function(item) {
		return item.filePath === filepath;
	}
}

function mapByContent(item) {
	return item.content;
}

function relative(from,to) {
	return path.relative(from,to).replace(/\\/g,"/");
}

function Requirements() {
	var base;
	
	var data = {
		externalJs:[],
		externalCss:[],
		internalJs:[],
		internalCss:[],
		mappings:{}
	};

	function internalJs(payload) {
		if (typeof base === "undefined") {
			base = path.dirname(payload.filePath);
		}
		
		var filePath = relative(base,payload.filePath);
		var callerFilePath;
		var raw = payload.raw ? payload.raw : "~";
		
		if (payload.parentScope) {
			callerFilePath = payload.parentScope.filePath;
		} else if (payload.callerFilePath) {
			callerFilePath = payload.callerFilePath;
		} else {
			callerFilePath = "~";
		}
		
		if (callerFilePath !== "~") {
			callerFilePath = relative(base,callerFilePath);
		}
		
		if (!data.internalJs.filter(filterByFilepath(filePath)).length) {
			data.internalJs.push({
				filePath:filePath,
				content:payload.content.toString()
			});
		}
		
		if (!data.mappings.hasOwnProperty(callerFilePath)) {
			data.mappings[callerFilePath] = {};
		}
		
		data.mappings[callerFilePath][raw] = filePath;
	}
	
	function internalCss(payload) {
		if (typeof base === "undefined") {
			base = path.dirname(payload.filePath);
		}
		
		var contentFilepath = relative(base,payload.filePath);
		if (!data.internalCss.filter(filterByFilepath(contentFilepath)).length) {
			data.internalCss.push({
				filePath:contentFilepath,
				content:payload.content.toString()
			});
		}
	}
	
	function externalJs(url) {
		if (url && (typeof url === "object")) {
			url = url.url;
		}
		
		if (data.externalJs.indexOf(url) == -1) {
			data.externalJs.push(url);
		}
	}
	
	function externalCss(url) {
		if (url && (typeof url === "object")) {
			url = url.url;
		}
		
		if (data.externalCss.indexOf(url) == -1) {
			data.externalCss.push(url);
		}
	}
	
	function getCompiledJs() {
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
	
	function getCompiledCss() {
		if (data.internalCss.length) {
			return data.internalCss.map(mapByContent).join(" ");
		}
		return "";
	}
	
	this.data = data;
	this.internalJs = internalJs;
	this.internalCss = internalCss;
	this.externalJs = externalJs;
	this.externalCss = externalCss;
	this.getCompiledJs = getCompiledJs;
	this.getCompiledCss = getCompiledCss;
}


module.exports = Requirements;