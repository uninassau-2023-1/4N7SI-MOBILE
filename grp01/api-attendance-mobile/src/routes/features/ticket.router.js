const ticketController = require("../../app/controllers/ticket.controller");

module.exports = (server, routes, prefix = '/api/v1/ticket') => {
    routes.post('/', ticketController.createTicket);
    routes.get('/', ticketController.findAllByDateOfAttendance);
    routes.get('/lastAttendance', ticketController.findLastAttendanceIsTrue);
    routes.put('/callAttendance', ticketController.callAttendance);
    routes.get('/count-by-prioritys', ticketController.countTicketsByPriority);

    server.use(prefix, routes);
};
  