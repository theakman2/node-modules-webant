var test = require("tap").test;

var Chunker = require("../../lib/util/Chunker.js");

test("chunker 1",function(t){
	var chunker = new Chunker();
	
	chunker.update("b","a");
	chunker.update("c","a");
	chunker.update("d","b");
	chunker.update("e","b");
	chunker.update("e","d");
	chunker.update("e","c");
	chunker.update("f","c");
	
	var chunks = chunker.getChunks();
	
	t.ok(Array.isArray(chunks),"Chunks should be an array.");
	
	chunks.forEach(function(arr){
		t.ok(Array.isArray(arr),"Chunks should be a nested array.");
		arr.sort();
	});
	
	t.equivalent(
		chunks,
		[["a","b","c","d","e","f"]],
		"Chunks should have been created properly."
	);
	
	t.end();
});

test("chunker 2",function(t){
	var chunker = new Chunker();
	
	chunker.update("b","a");
	chunker.update("c");
	chunker.update("d","b");
	chunker.update("e","b");
	chunker.update("e","d");
	chunker.update("e");
	chunker.update("f","c");
	
	var chunks = chunker.getChunks();
	
	t.ok(Array.isArray(chunks),"Chunks should be an array.");
	
	chunks.forEach(function(arr){
		t.ok(Array.isArray(arr),"Chunks should be a nested array.");
		arr.sort();
	});
	
	t.equivalent(
		chunks,
		[["a","b","d","e"],["c","f"]],
		"Chunks should have been created properly."
	);
	
	t.end();
});

test("chunker 3",function(t){
	var chunker = new Chunker();
	
	chunker.update("b","a");
	chunker.update("c");
	chunker.update("d","b");
	chunker.update("e","b");
	chunker.update("e","d");
	chunker.update("e");
	chunker.update("f","c");
	
	var chunks = chunker.getChunks();
	
	t.ok(Array.isArray(chunks),"Chunks should be an array.");
	
	chunks.forEach(function(arr){
		t.ok(Array.isArray(arr),"Chunks should be a nested array.");
		arr.sort();
	});
	
	t.equivalent(
		chunks,
		[["a","b","d","e"],["c","f"]],
		"Chunks should have been created properly."
	);
	
	t.end();
});

test("chunker 4",function(t){
	var chunker = new Chunker();
	
	chunker.update("b","a");
	chunker.update("c");
	chunker.update("e","b");
	chunker.update("f");
	chunker.update("f");
	chunker.update("d","c");
	chunker.update("h");
	chunker.update("h","f");
	chunker.update("g","f");
	chunker.update("h","g");
	chunker.update("g");
	
	var chunks = chunker.getChunks();
	
	t.ok(Array.isArray(chunks),"Chunks should be an array.");
	
	chunks.forEach(function(arr){
		t.ok(Array.isArray(arr),"Chunks should be a nested array.");
		arr.sort();
	});
	
	t.equivalent(
		chunks,
		[["a","b","e"],["c","d"],["f","g","h"]],
		"Chunks should have been created properly."
	);
	
	t.end();
});