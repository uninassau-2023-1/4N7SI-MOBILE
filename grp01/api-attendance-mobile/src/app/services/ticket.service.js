const TicketRepository = require("../repositories/ticket.repository.js");

class TicketService {
    async createTicket(ticket) {
        try {
            const lastAttendanceForPriority = await TicketRepository.findLastTicketAttendance(ticket.priority);

            let newTicket;
            let password;

            if (!lastAttendanceForPriority) {
                password = await this.generatePassword(ticket.password, ticket.priority);
            } else {
                password = await this.generatePassword(lastAttendanceForPriority.password, ticket.priority);
            }

            newTicket = await TicketRepository.create({ isAttendance: false, password, priority: ticket.priority });

            return newTicket;

        } catch (error) {
            throw error;
        }
    }

    async generatePassword(lastPassword = '', typePassword) {
        if (lastPassword.length > 0) {
            lastPassword = lastPassword ? parseInt(lastPassword.slice(-2)) : 0;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '');
        const lastTicketNumber = lastPassword ? lastPassword : 0;
        const ticketNumber = (lastTicketNumber + 1).toString().padStart(2, '0');
        const password = `${formattedDate}-${typePassword}${ticketNumber}`;

        return password;
    }

    async findAllByDateOfAttendance() {
        try {
            const allTickets = await TicketRepository.findAllByDateOfAttendance();
            return allTickets;
        } catch (error) {
            throw error;
        }
    }

    async findLastAttendanceIsTrue() {
        try {
            const ticket = await TicketRepository.findLastAttendanceIsTrue();
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async callAttendance() {
        try {
            const lastTicket = await TicketRepository.findLastTicketAttendanceInQueue()

            if (!lastTicket) {
                return null
            }

            const ticket = await TicketRepository.callAttendance(lastTicket.id);

            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async countTicketsByPriority() {
        try {
            const resultsGeneric = await TicketRepository.countTicketsByPriorityGeneric();

            const resultsAttendances = await TicketRepository.countTicketsByPriorityAttendance();

            const totalGenerated = await TicketRepository.count()

            const totalAttendance = await TicketRepository.countByAttendance()

            const formattedGenericResults = resultsGeneric.reduce((acc, { priority, _count }) => {
                acc[priority] = _count.priority;
                return acc;
            }, {});

            const formattedAttendanceResults = resultsAttendances.reduce((acc, { priority, _count }) => {
                acc[priority] = _count.priority;
                return acc;
            }, {});

            return { formattedGenericResults, formattedAttendanceResults, totalAttendance, totalGenerated };
        } catch (error) {
            throw error;
        }
    }
}

const ticketService = new TicketService();
module.exports = ticketService;