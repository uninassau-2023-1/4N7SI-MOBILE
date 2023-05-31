const ticketService = require("../services/ticket.service");

class TicketController {
    async createTicket(req, res) {
        const newTicket = await ticketService.createTicket(req.body);
        res.status(201).json(newTicket);
    } 

    async findAllByDateOfAttendance(req, res) {
        const newTicket = await ticketService.findAllByDateOfAttendance();
        res.status(200).json(newTicket);
    } 

    async findLastAttendanceIsTrue(req, res) {
        const ticket = await ticketService.findLastAttendanceIsTrue();
        res.status(200).json(ticket);
    } 

    async callAttendance(req, res) {
        const ticket = await ticketService.callAttendance();
        res.status(200).json(ticket);
    }
    
    async countTicketsByPriority(req, res) {
        const result = await ticketService.countTicketsByPriority();
        res.status(200).json(result);
    } 
}

const ticketController = new TicketController();
module.exports = ticketController;