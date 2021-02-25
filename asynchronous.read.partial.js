const { convertCsv } = require("./util/csv.parse.js");
const { open, read } = require("fs");

open("./data/pulitzer-circulation-data.csv", (err, fd) => {
  const buffer = Buffer.alloc(200);
  read(fd, buffer, 0, buffer.length, 0, (err, count, buff) => {
    console.table(convertCsv(buff.toString()));
  });
});

