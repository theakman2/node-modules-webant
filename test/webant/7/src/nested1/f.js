var gh = require(["../g.hbs","../h.js"]);

module.exports.msg = gh[0]({name:"foo"}) + gh[1]; 