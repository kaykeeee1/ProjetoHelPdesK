const express = require('express')
const router = express.Router()

const commentController = require('../controllers/commentController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/add', authMiddleware, commentController.addComment)

router.get('/:ticket_id', authMiddleware, commentController.getComments)

module.exports = router