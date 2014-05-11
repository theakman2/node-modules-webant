var fs = require("fs");
var path = require("path");

var async = require("async");
var uglify = require("uglify-js");

var RequireFinder = require("./RequireFinder.js");

function noop() {}

function RequireTreeParser(webant) {
	this.webant = webant;
	this.requireFinder = null;
}

RequireTreeParser.RequireFinder = RequireFinder;

RequireTreeParser.prototype = {
	_getRequireTree:function(parnt,map,cb) {
		var _this = this;
		var opts = _this.webant.settings;
		if (!_this.requireFinder) {
			_this.requireFinder = new RequireTreeParser.RequireFinder(_this);
		}
		var requires = _this.requireFinder.find(parnt.ast,parnt.filePath);
		if (requires.length) {
			async.eachSeries(requires,function(req,done){
				parnt.requires.push(req);
				
				if (map[req.filePath]) {
					req.data = map[req.filePath];
					done(null);
					return;
				}
				
				var datum = {};
				map[req.filePath] = datum;
				req.data = datum;
				
				datum.filePath = req.filePath;
				datum.requires = [];			
				
				opts.handlers[path.extname(datum.filePath)](datum.filePath,function(err,js){
					var ast;
					
					try {
						ast = uglify.parse(js,{filename:datum.filePath});
					} catch(e) {
						e.filePath = datum.filePath;
						done(e);
						return;
					}
					
					datum.ast = ast;
					
					_this._getRequireTree(datum,map,done);
				});
			},function(err){
				cb(err,parnt);
			});
		} else {
			cb(null,parnt);
		}
	},
	parse:function(cb) {
		cb = cb || noop;
		
		var opts = this.webant.settings;
		
		var _this = this;
		
		var map = {};
		var into = [];
		
		async.eachSeries(opts.files,function(item,done){
			if (map.hasOwnProperty(item.entry)) {
				into.push(map[item.entry]);
				done(null);
			} else {
				fs.readFile(item.entry,function(e,c){
					if (e) {
						done(e);
					} else {
						var ast;
						
						try {
							ast = uglify.parse(c.toString(),{filename:item.entry});
						} catch(e) {
							e.filePath = item.entry;
							done(e);
							return;
						}
						
						var _into = {
							filePath:item.entry,
							ast:ast,
							requires:[]
						};
						
						map[item.entry] = _into;
						
						into.push(_into);
						
						_this._getRequireTree(_into,map,done);
					}
				});
			}
		},function(err){
			if (err) {
				cb(err);
			} else {
				cb(null,into);
			}
		});
	}
};

module.exports = RequireTreeParser;