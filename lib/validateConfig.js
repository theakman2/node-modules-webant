module.exports = function(config) {
	if (!config.jsEntryPath) {
		throw new Error("'jsEntryPath' property in config not defined.");
	}
	if (!(config.jsDestPath || (config.htmlEntryPath && config.htmlDestPath))) {
		throw new Error("Either 'jsDestPath' or both 'htmlEntryPath' and 'htmlDestPath' " +
				"properties in config must be defined.");
	}
};