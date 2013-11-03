var testObjs = [
	require("./getConfig.js")
];

var tests = {};

testObjs.forEach(function(testObj){
	for (var key in testObj) {
		if (testObj.hasOwnProperty(key)) {
			tests[key] = testObj[key];
		}
	}
});

require("test").run(tests);