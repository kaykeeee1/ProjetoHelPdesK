const express = require('express')
const router = express.Router()

const ticketController = require('../controllers/ticketController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/create', authMiddleware, ticketController.createTicket)

router.get('/', authMiddleware, ticketController.getTickets)

router.get('/stats', authMiddleware, ticketController.getStats)

router.get('/:id', authMiddleware, ticketController.getTicketById)

router.put('/status/:id', authMiddleware, ticketController.updateStatus)

router.put('/:id', authMiddleware, ticketController.updateTicket)

router.delete('/:id', authMiddleware, ticketController.deleteTicket)

router.get("/stats", ticketController.getStats)

module.exports = router