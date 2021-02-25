const { convertCsv } = require("./util/csv.parse.js");
const { readFile } = require("fs");
module.exports.read = () => {
  readFile("./data/pulitzer-circulation-data.csv", "utf-8", (err, data) => {
    if (err) {
      console.log(`There was an error reading in the fill ${err}`);
      return;
    }

    const vals = convertCsv(data);
    console.table(vals);
  });
};
