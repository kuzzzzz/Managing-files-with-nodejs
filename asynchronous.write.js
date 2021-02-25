const { writeFile } = require("fs");

writeFile(
  "./data/app.log",
  "This is the begining of the end",
  {
    flag:
      "a"     /**  this flag is optional but if it's not defined 
                  the contents of the file will be overwritten by default */,
  },
  (err) => {
    err ? console.log(err) : console.log("file saved");
  }
);

/**
 * You can add an options obeject after the data
 * and before the callback and set the flag property of
 * that object to whatever mode you want to open the
 * file in
 */
