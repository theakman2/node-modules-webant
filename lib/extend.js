function extend(into,from) {
	if (from && (typeof from === "object")) {
		if (Object.keys(from).length) {
			for (var key in from) {
				if (from.hasOwnProperty(key)) {
					if (!(into && (typeof into === "object"))) {
						into = {};
					}
					
					if (from[key] && !Array.isArray(from[key]) && (typeof from[key] === "object")) {
						into[key] = extend(into[key],from[key]);
					} else {
						into[key] = from[key];
					}
				}
			}
		} else {
			into = {};
		}
	}
	return into;
}

module.exports = extend;