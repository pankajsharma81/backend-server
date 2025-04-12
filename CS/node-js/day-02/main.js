// console.log(Object.getOwnPropertyNames(global))
//? node js - global
//? browser - window

// setTimeout(() => {
//   console.log("Node JS Learner");
// }, 2000);

let count = 0;
let interval = setInterval(() => {
  console.log("Node JS Learner", ++count);
  if (count === 3) {
    clearInterval(interval);
  }
}, 2000);
