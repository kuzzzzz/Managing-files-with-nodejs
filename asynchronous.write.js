const { writeFile } = require("fs");

writeFile(
  "./data/app.log",
  "This is the begining of the end",
  {
    flag: "a" /**  this flag is optional but if it's not defined 
                  the contents of the file will be overwritten by default 
                  you can also pass in mode and flags as an object*/,
  },
  (err) => {
    err ? console.log(err) : console.log("file saved");
  }
);

/**
 * Adding a mode obeject like this
 * {mode:constants.S_IWUSR | constants.S_IRUSR}
 * will create file that can only be edited by the
 * user of the computer`
 */
/**
 * You can add an options obeject after the data
 * and before the callback and set the flag property of
 * that object to whatever mode you want to open the
 * file in
 */

/**
 * Node also supports other flags like
 * r for read mode
 * w for write mode
 * a for append mode
 *
 * And other exclusive flags like
 * x for exclusive
 * + for multiple modes for reading and writing
 * s for synchronous
 *
 */
