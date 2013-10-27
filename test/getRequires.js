var getRequires = require("../lib/getRequires.js");

exports["test getRequires"] = function(assert) {
	var content = "var foo = require('path/to/require.js');\n" +
			"//=>require another/path/to/something.css\n" +
			"explode('arg1',require('../path/to/arg2.js'))\n" +
			"require('../hey/folks.js')\n" +
			"//=>require yet/another/path/to/file.scss";
	
	var requires = getRequires(content);
	
	assert.deepEqual(
		requires,
		[{type:"function",literal:"path/to/require.js"},
		 {type:"comment",literal:"another/path/to/something.css"},
		 {type:"function",literal:"../path/to/arg2.js"},
		 {type:"function",literal:"../hey/folks.js"},
		 {type:"comment",literal:"yet/another/path/to/file.scss"}],
		"Require calls should have been extracted properly."
	);
};