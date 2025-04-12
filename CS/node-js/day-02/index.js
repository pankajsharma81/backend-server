const http = require("http");
const fs = require("fs");

const PORT = 3000;
const server = http.createServer((req, res) => {
  const log = `${Date.now()}: & From ${req.url} New Request Received\n`;

  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Error writing to the log file:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    }
    res.end("Hello world From Server");
  });
});

server.listen(PORT, () => {
  console.log(`Server is connected to ${PORT}`);
});
