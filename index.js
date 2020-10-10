const server = require("./server.js");




//Figure out if it matters where this bit goes more generally
const port = 5000;

server.listen(port, () => {
    console.log("Server listening on port 5000...");
  });
  