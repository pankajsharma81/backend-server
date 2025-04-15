// !OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)✅
// ? tRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED

// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different argumensts ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered

const EventEmitter = require("events");
const fs = require("fs");

const userEmitter = new EventEmitter();

const eventCount = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileupdate: 0,
};

const logFile = "eventlog.json";

if (fs.existsSync(logFile)) {
  const data = fs.readFileSync(logFile, "utf-8");
  Object.assign(eventCount, JSON.parse(data));
}

function saveCounts() {
  fs.writeFileSync(logFile, JSON.stringify(eventCount, null, 2));
}






// Events creating
userEmitter.on("LOGIN", (username) => {
  eventCount.login++;
  console.log(`${username} Logged In Successfully ✅`);
  saveCounts();
});

userEmitter.on("LOGOUT", (username) => {
  eventCount.logout++;
  console.log(`${username} Logout Successfully ❌`);
  saveCounts();
});

userEmitter.on("PURCHASE", (username, item) => {
  eventCount.purchase++;
  console.log(`${username} purchased ${item}`);
  saveCounts();
});

userEmitter.on("PROFILE_UPDATE", (username, field) => {
  eventCount.profileupdate++;
  console.log(`${username} updated their profile: ${field}`);
  saveCounts();
});

userEmitter.on("SUMMARY", () => {
  console.log("\n Event Summary:");
  console.log(`Logins: ${eventCount.login}`);
  console.log(`Logouts: ${eventCount.logout}`);
  console.log(`Purchases: ${eventCount.purchase}`);
  console.log(`Profile Update: ${eventCount.profileupdate}`);
});

// *emit event with different arguments

userEmitter.emit("LOGIN", "Pankaj");
userEmitter.emit("LOGOUT", "Pankaj");
userEmitter.emit("PURCHASE", "Pankaj", "iphone15");
userEmitter.emit("PROFILE_UPDATE", "Pankaj", "email address");

userEmitter.emit("SUMMARY");
