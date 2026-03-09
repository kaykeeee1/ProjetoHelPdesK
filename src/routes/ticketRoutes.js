const express = require('express')
const router = express.Router()

const ticketController = require('../controllers/ticketController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/create', authMiddleware, ticketController.createTicket)
router.get('/', authMiddleware, ticketController.getTickets)
router.get('/stats', authMiddleware, ticketController.getStats)

router.put('/status/:id', authMiddleware, ticketController.updateStatus)
router.put('/:id', authMiddleware, ticketController.updateTicket)
router.delete('/:id', authMiddleware, ticketController.deleteTicket)

module.exports = router