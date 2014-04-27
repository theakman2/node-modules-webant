module.exports = require("yargs")
    .usage(
        "Webant: the intelligent javascript web bundler - (c) 2013 A Kazim\n\n" +
        "Usage:\n" +
        "  webant --useConfig [options]\n" + 
        "  webant --useConfig [path to config file] [options]\n" +
        "  webant --entry [path to entry script] [options]\n\n" +
        "Example:\n" +
        "  webant --entry src/js/main.js --dest build/js/main.js"
    )
    .describe("entry","Path to entry script relative to current directory. [Required, unless --useConfig flag is set].")
    .describe("dest","Path to where compiled output will be written.")
    .describe("urlDest","URL at which the path specified for '--dest' can be reached.")
    .describe("postProcess","Post-processing to apply to compiled javascript. Can be either 'compress' (compresses output), 'debug' (adds file and line numbers to output) or 'none' (no post-processing).")
    .describe("requireBase","Resolve require paths relative to the supplied directory instead of relative to the file containing the require.")
    .describe("defaultExtension","Default extension to append to a require path when no extension is provided. Include the starting period (i.e. '.js').")
    .describe("handlers","Additional handlers to use. Can be set multiple times. Example: -H coffee -H scss -H json")
    .describe("includeBootstrap","Should the bootstrap code that calls the entry module be included? Pass '--no-includeBootstrap' or '--includeBootstrap=0' to exclude the bootstrap code.")
    .describe("browserGlobalVar","Name of the global variable used in the compiled javascript.")
    .describe("useConfig","Path to a JSON configuration file which sets default options. If this option is set but no path is provided, the path is assumed to be './webant-config.json'. [Required, unless --entry option is provided]. [Additional options override those found in the configuration file].")
    .describe("version","Show version.")
    .describe("help","Show help.")
    .alias("entry","e")
    .alias("dest","d")
    .alias("urlDest","u")
    .alias("postProcess","p")
    .alias("requireBase","r")
    .alias("defaultExtension","D")
    .alias("handlers","H")
    .alias("includeBootstrap","i")
    .alias("browserGlobalVar","b")
    .alias("useConfig","c")
    .alias("version","v")
    .alias("help","h")
    .string("entry")
    .string("dest")
    .string("urlDest")
    .string("postProcess")
    .boolean("includeBootstrap")
    .string("browserGlobalVar")
    .string("useConfig")
    .boolean("version")
    .boolean("help")
    .default("includeBootstrap",true)
    .wrap(80);