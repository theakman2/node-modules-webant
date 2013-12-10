var mods = require(["c.js","nested/morenesting/d.js"]);

module.exports.msg = mods[0].foo + mods[1];