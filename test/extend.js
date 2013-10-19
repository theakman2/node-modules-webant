var extend = require("../lib/extend.js");

exports["test extend (0)"] = function(assert) {
	var into = "test";
	
	var from = {
		bar:"baz"
	};
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		"test",
		"Object should be extended properly."
	);
};

exports["test extend (1)"] = function(assert) {
	var into = {
		foo:"bar"
	};
	
	var from = {
		bar:"baz"
	};
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		{
			foo:"bar",
			bar:"baz"
		},
		"Object should be extended properly."
	);
};

exports["test extend (2)"] = function(assert) {
	var into = {
		foo:"bar",
		bar:null
	};
	
	var from = {
		bar:"baz"
	};
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		{
			foo:"bar",
			bar:"baz"
		},
		"Object should be extended properly."
	);
};

exports["test extend (3)"] = function(assert) {
	var into = {
		foo:"bar",
		bar:{
			key1:5,
			key2:7
		}
	};
	
	var from = {
		baz:"string here",
		bar:{
			key2:8,
			key3:20
		}
	};
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		{
			foo:"bar",
			baz:"string here",
			bar:{
				key1:5,
				key2:8,
				key3:20
			}
		},
		"Object should be extended properly."
	);
};

exports["test extend (4)"] = function(assert) {
	var into = {};
	
	var from = {
		baz:"string here",
		bar:{
			key2:8,
			key3:20
		}
	};
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		from,
		"Object should be extended properly."
	);
	
	assert.strictEqual(
		into === from,
		false,
		"A clone should have been created."
	);
};

exports["test extend (5)"] = function(assert) {
	var into = {
		foo:"test"
	};
	
	var from = {
		foo:{}
	};
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		{
			foo:{}
		},
		"Object should be extended properly."
	);
};

exports["test extend (6)"] = function(assert) {
	var into = {
		test:"foo"
	};
	
	var from = {};
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		{
			test:"foo"
		},
		"Object should be extended properly."
	);
};

exports["test extend (7)"] = function(assert) {
	var into = {
		test:"foo"
	};
	
	var from = 5;
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		{
			test:"foo"
		},
		"Object should be extended properly."
	);
};

exports["test extend (8)"] = function(assert) {
	var into = {
		foo:[5,7,1,4],
		someKey:"test",
		bar:{
			key4:8,
			key3:{
				key9:"mwahaha...",
				key5:{
					key11:7,
					key6:"deeply nested"
				}
			}
		},
	};
	
	var from = {
		baz:"string here",
		bar:{
			key2:8,
			key3:{
				key4:"hey",
				key5:{
					key6:"very deeply nested",
					key8:{}
				}
			}
		},
		someKey:[5,"test",{test:"ing"}]
	};
	
	extend(into,from);
	
	assert.deepEqual(
		into,
		{
			foo:[5,7,1,4],
			someKey:[5,"test",{test:"ing"}],
			baz:"string here",
			bar:{
				key4:8,
				key2:8,
				key3:{
					key9:"mwahaha...",
					key4:"hey",
					key5:{
						key6:"very deeply nested",
						key8:{},
						key11:7
					}
				}
			}
		},
		"Object should be extended properly."
	);
};