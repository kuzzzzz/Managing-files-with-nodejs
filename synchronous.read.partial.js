const fs = require("fs");

const fd = fs.openSync("./data/app.log");
let count = 0;
do {
  const buffer = Buffer.alloc(200);

  /**  Making the last arguement of readsync null tells readsync
  to start reading from the last position it stopped */

  // Also readsync returns a count of the number of bytes read
  count = fs.readSync(fd, buffer, 0, buffer.length, null);

  // console.log(buffer.toString());
} while (count > 0);
