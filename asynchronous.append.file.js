const { appendFile } = require("fs");

appendFile("./data/app.log", " This is the begining of the end for the second time", (err) => {
  err ? console.log(err) : console.log("file saved");
});
