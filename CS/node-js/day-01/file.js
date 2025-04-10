const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)
// ? write

// fs.writeFileSync("./text.txt", "Hey world this is sync writing");

// fs.writeFile("./test.txt", "hello world i am async code", (err) => {
//   console.log(err);
// });

// ? read

// const res = fs.readFileSync("./text.txt", "utf-8");
// console.log(res)

// const res = fs.readFile("./test.txt", "utf-8", (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// ? update / append
// fs.appendFileSync("./text.txt", new Date().toDateString());

// fs.appendFile("./test.txt", `${new Date().toDateString()}`, (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });



