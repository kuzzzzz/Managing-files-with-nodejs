const { createReadStream, createWriteStream } = require("fs");

const stream = createReadStream("./data/app.log", {
  highWaterMark: 95,
  encoding: "utf8",
});

const writer = createWriteStream("./data/output.log");

let iteration = 0;
stream.on("data", (data) => {
  stream.pause();

  console.log(++iteration);
  writer.write(data);
  setTimeout(() => {
    stream.resume();
  }, 1000);
});

// This code copied data from one file and writes it to another file 95 bytes at a time

/**
 * Back Pressure
 * A Backup of data, caused bt streams being unable to
 * process data before the next batch arrive
 * 
 * This back pressure is caused when the output
 * stream is writing out data slower than it's 
 * reading data 
 * 
 * by replacing the write stream with pipe 
 * you can write out a file much faster
 * that is with stream.pipe(writer) 
 * 
 */