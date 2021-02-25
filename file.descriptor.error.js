const fs = require("fs");

/**
  Anytime you open a file using a file descriptor
 you are responsible for closing the file
  */
console.log("Opening files...");
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync("./data/app.log");
  console.log(fd);
  fs.close(fd, () => {});
}
