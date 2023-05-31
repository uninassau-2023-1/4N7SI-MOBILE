const { Router } = require("express");
const ticketRouter = require("./features/ticket.router");

module.exports = (server) => {
    server.use((req, res, next) => {
        ticketRouter(server, new Router());
        next();
    });
};