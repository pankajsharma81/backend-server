const EventEmitter = require("events");

const emitter = new EventEmitter();

// * on(eventName , Listener) --- create

emitter.on("GREET", (args) => {
  console.log(`Hello world ${args.username} and ${args.id}`);
});

// * emit(eventName , [args]) --- execute

emitter.emit("GREET", {
  username: "Suraj",
  id: "23dkddnvkzid3rkf3rc",
});
