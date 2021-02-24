const { convertCsv } = require("./util/csv.parse");
const fs = require("fs");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

readFile("./data/pulitzer-circulation-data.csv", "utf-8")
  .then((result) => {
    console.table(convertCsv(result));
  })
  .catch((err) => {
    console.log(err);
  });


// You can also use async await to run the function
// const read = async () => {
//   const data = await readFile("./data/pulitzer-circulation-data.csv", "utf-8");
//   console.table(convertCsv(data));
// };

// read();
