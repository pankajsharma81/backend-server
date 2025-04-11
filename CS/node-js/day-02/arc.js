// const fs = require("fs");

// setImmediate(() => {
//   console.log("Hello from immediate -1");
// }, 0);

// setTimeout(() => {
//   console.log("Hello from timeout-1");
// });

// console.log("Hello World -1");

// 1. console
// 2. setTimeout
// 3. setImmediate

// ? -------------------------------------------------------------------------------------------------------------------------------------------

process.env.UV_THREADPOOL_SIZE = require('os').cpus().length; //Set this first!
const crypto = require("crypto"); // Import after setting UV_THREADPOOL_SIZE

let start = Date.now();

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

// extra

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", () => {
  console.log(`${Date.now() - start}ms Done`);
});

console.log('UV_THREADPOOL_SIZE:', process.env.UV_THREADPOOL_SIZE);
