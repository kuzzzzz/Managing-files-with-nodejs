const { closeSync, openSync, readdirSync, watch, writeSync } = require("fs");
const camelCase = require("camelcase");

watch("./read", () => {
  const indexFd = openSync(
    "./index.js",
    "w"
  ); /** if we don't set a flag the file will open in read 
                                                mode and throw an exception when we try to write to it
                                                */

  const files = readdirSync("./read");
  files.map((f) => {
    const name = f.replace("js", "");
    console.log(`Adding a file: ${f}`);

    writeSync(
      indexFd,
      `module.exports.${camelCase(name)} = require('./read/${name}').read;\n`
    );
  });

  closeSync(indexFd); // remember to close your files everytime
});
