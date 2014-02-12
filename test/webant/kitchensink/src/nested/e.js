setTimeout(function(){
	require(["../foo/f.js"],function(f){
		window.__global.e = f + "eee";
	});
},700);

module.exports = "e done";