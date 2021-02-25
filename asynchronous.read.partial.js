const { convertCsv } = require("./util/csv.parse.js");
const { open, read } = require("fs");

open("./data/pulitzer-circulation-data.csv", (err, fd) => {
  const burfer = Buffer.alloc(200);
  read(fd, burfer, 0, burfer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
  });
});

