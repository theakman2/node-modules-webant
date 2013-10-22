var fs = require("fs-extra");
var path = require("path");
var vm = require("vm");

var async = require("async");

var webant = require("../lib/webant.js");

var rawConfig = {
	"base":__dirname,
    "jsEntryPath":"%%base%%/complete/src/js/main.js",
    "jsDestPath":"%%base%%/complete/build/main.js",
    "cssDestPath":"%%base%%/complete/build/main.css",
    "htmlEntryPath":"%%base%%/complete/src/index.hbs",
    "htmlDestPath":"%%base%%/complete/build/index.html",
    "handlers":{
        "css":{},
        "scss":{},
        "less":{},
        "stylus":{},
        "js":{},
        "json":{},
        "hbs":{},
        "text":{},
        "external":{}
    }
};

function getLinkHrefs(html) {
	return html.match(/<link rel="stylesheet" type="text\/css" href="[^"]+" \/>/g).map(function(i) {
		return i.substring(45,i.length-4);
	});
}

function getScriptSources(html) {
	return html.match(/<script type="text\/javascript" src="[^"]+"><\/script>/g).map(function(i) {
		return i.substring(36,i.length-11);
	});
}

exports["test webant"] = function(assert,done){
	fs.remove(path.resolve(__dirname,"complete","build"),function(err,results){
		if (err && (err.code !== "ENOENT")) {
			throw err;
		}
		webant(rawConfig,null,function(err){
			assert.strictEqual(err,null,"there should be no errors building this config");
			
			var listing = fs.readdirSync(path.resolve(__dirname,"complete","build"));
			listing.sort();
			assert.deepEqual(
				listing,
				["index.html","main.css","main.js"],
				"contents of build directory should be: index.html, main.css, main.js"
			);
				
			var js = fs.readFileSync(path.resolve(__dirname,"complete","build","main.js")).toString();
			
			var context = vm.createContext({
				__global:{}
			});
			
			vm.runInContext(js,context);
			
			assert.deepEqual(
				context.__global,
				{
					foo:"foo",
					bar:"bar",
					tmpl:"Hello Alan!",
					data:{
						"bar":[4,5,20,"foo"],
						"anotherKey":{
							"keyA":"valueA",
							"keyB":{
								"keyB1":5
							}
						}
					},
					text:"Text goes here. Even allows for dan'ger'ou\"s charac>ters!",
					html:"<p>Here is a <strong>strong</strong> tag with some <em>emphasis</em>!</p>"
				},
				"compiled javascript should run properly"
			);
			
			var html = fs.readFileSync(path.resolve(__dirname,"complete","build","index.html")).toString();
			
			assert.deepEqual(
				getLinkHrefs(html),
				["http://localhost/path/to/some/css/a.css",
				 "http://www.yoursite.biz/assets/b.css",
				 "http://www.another.site.co/assets/b.css",
				 "main.css"
				 ],
				"stylesheets should be linked to correctly"
			);
			
			assert.deepEqual(
				getScriptSources(html),
				["http://google.com/a.js",
				 "http://localhost/path/to/b.js?hey=there",
				 "http://mysite.com/another/external/c.js?hey=there#pie",
				 "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore.js",
				 "main.js"
				],
				"scripts should be linked to correctly"
			);
			
			done();
			
		});
	});
};