const { PrismaClient } = require('@prisma/client')
const prismaService = new PrismaClient()

class TicketRepository {
    async create(ticket) {
        return await prismaService.tickets.create({
            data: ticket
        });
    }

    async findLastTicketAttendance(priority) {
        return await prismaService.tickets.findFirst({
            where: {
                priority: priority
            },
            orderBy: [{
                password: 'desc',
            }]
        })
    }

    async findAllByDateOfAttendance() {
        return await prismaService.tickets.findMany({
            where: {
                isAttendance: true
            },
            orderBy: [{
                createdAt: 'desc',
            }],
            take: 5
        });
    }

    async findLastAttendanceIsTrue() {
        return await prismaService.tickets.findFirst({
            where: {
                isAttendance: true
            },
            orderBy: [{
                createdAt: 'desc',
            }]
        });
    }

    async callAttendance(id) {
        return await prismaService.tickets.update({
            where: {
                id: id
            },
            data: {
                isAttendance: true
            }
        })
    }

    async findLastTicketAttendanceInQueue() {
        return await prismaService.tickets.findFirst({
            where: {
                isAttendance: false
            },
            orderBy: [{
                createdAt: 'asc',
            }]
        })
    }

    async countTicketsByPriorityGeneric() {
        return await prismaService.tickets.groupBy({
            by: ['priority'],
            _count: {
                priority: true
            }
        });
    }

    async countTicketsByPriorityAttendance() {
        return await prismaService.tickets.groupBy({
            where: {
                isAttendance: true
            },
            by: ['priority'],
            _count: {
                priority: true,
            }
        });
    }


    async count() {
        return await prismaService.tickets.count()
    }

    async countByAttendance() {
        return await prismaService.tickets.count({
            where: {
                isAttendance: true
            }
        })
    }
}

const ticketRepository = new TicketRepository();
module.exports = ticketRepository;