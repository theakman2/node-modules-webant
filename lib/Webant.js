var fs = require("fs");

function noop() {}

function Webant(config) {
	this.origConfig = config;
	this.settings = null;
}

Webant.ConfigParser = require("./ConfigParser.js");
Webant.RequireTreeParser = require("./RequireTreeParser.js");
Webant.Chunker = require("./Chunker.js");
Webant.Stringifier = require("./Stringifier.js");
Webant.Writer = require("./Writer.js");

Webant.prototype.build = function(callback) {
	callback = callback || noop;
	var _this = this;
	
	if (!_this.configParser) {
		_this.configParser = new Webant.ConfigParser(_this);
	}
	
	if (_this.settings === null) {
		_this.settings = _this.configParser.parse();
	}
	
	fs.readFile(_this.settings.entry,function(e,c){
		if (e) {
			callback(e);
		} else {
			if (!_this.requireTreeParser) {
				_this.requireTreeParser = new Webant.RequireTreeParser(_this);
			}
			_this.requireTreeParser.parse(c.toString(),function(err,tree){
				if (err) {
					callback(err);
				} else {
					if (!_this.chunker) {
						_this.chunker = new Webant.Chunker(_this);
					}
					var chunks = _this.chunker.chunk(tree);
					if (!_this.stringifier) {
						_this.stringifier = new Webant.Stringifier(_this);
					}
					var stringified = _this.stringifier.stringify(chunks);
					if (!_this.writer) {
						_this.writer = new Webant.Writer(_this);
					}
					_this.writer.write(stringified,callback);
				}
			});
		}
	});
};

module.exports = Webant;