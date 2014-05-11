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

Webant.prototype = {
	parseConfig:function(){
		if (!this.configParser) {
			this.configParser = new Webant.ConfigParser(this);
		}
		
		if (this.settings === null) {
			this.settings = this.configParser.parse();
		}
	},
	parseRequireTree:function(content,cb) {
		if (!this.requireTreeParser) {
			this.requireTreeParser = new Webant.RequireTreeParser(this);
		}
		this.requireTreeParser.parse(content,cb);
	},
	getChunks:function(tree) {
		if (!this.chunker) {
			this.chunker = new Webant.Chunker(this);
		}
		return this.chunker.chunk(tree);
	},
	getStringified:function(chunks) {
		if (!this.stringifier) {
			this.stringifier = new Webant.Stringifier(this);
		}
		return this.stringifier.stringify(chunks);
	},
	write:function(stringified,cb) {
		if (!this.writer) {
			this.writer = new Webant.Writer(this);
		}
		this.writer.write(stringified,cb);
	},
	build:function(callback) {
		callback = callback || noop;
		
		var _this = this;
		
		_this.parseConfig();

		_this.parseRequireTree(function(err,tree){
			if (err) {
				callback(err);
			} else {
				var chunks = _this.getChunks(tree);
				var stringified = _this.getStringified(chunks);
				_this.write(stringified,callback);
			}
		});
	}
};

module.exports = Webant;