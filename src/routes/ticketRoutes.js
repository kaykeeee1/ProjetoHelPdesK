const express = require('express')
const router = express.Router()

const ticketController = require('../controllers/ticketController')

router.post('/create', ticketController.createTicket)
router.get('/', ticketController.getTickets)
router.put('/status/:id', ticketController.updateStatus)

module.exports = router