const { convertCsv } = require("./util/csv.parse.js");
const { readFileSync } = require("fs");

try {
  const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf-8");
  console.table(convertCsv(data));
} catch (error) {
  console.log(`There was an error reading this file ${error}`);
}
