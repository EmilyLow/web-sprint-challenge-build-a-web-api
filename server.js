const express = require("express");
//Router1
//Router2
const projectsRouter = require("./projectsRouter");
const actionsRouter = require("./actionsRouter");

const server = express();

server.use(express.json());


server.use(projectsRouter);
server.use(actionsRouter);


server.get("/", (req, res) => {
    res.send("<h1>Sprint Server</h1");
});





module.exports = server;