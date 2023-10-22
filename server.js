const http = require("http");

//creating server

http
  .createServer(function (req, res) {
    res.write("haai da dei");
    res.end();
  })
  .listen(3000);
