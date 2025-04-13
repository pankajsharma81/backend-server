const path = require("path");

// console.log("filename:", __filename);
// console.log("dirname:", __dirname);

// *1. Join

const filepath = path.join("folder", "students", "data.txt");
console.log(filepath);

const parsedDataPath = path.parse(filepath);
const resolvedPath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

console.log({
  parsedDataPath,
  resolvedPath,
  extname,
  basename,
  dirname,
});
 