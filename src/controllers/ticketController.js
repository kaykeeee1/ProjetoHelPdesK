const db = require('../models/db')

exports.createTicket = (req, res) => {

  const { title, description, priority } = req.body
  const user_id = req.userId

  const sql = "INSERT INTO tickets (title, description, priority, user_id) VALUES (?, ?, ?, ?)"

  db.query(sql, [title, description, priority || 'media', user_id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json({ message: "Chamado criado com sucesso" })

  })
}

exports.getTickets = (req, res) => {

  const user_id = req.userId

  const sql = "SELECT * FROM tickets WHERE user_id = ?"

  db.query(sql, [user_id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json(result)

  })
}

exports.updateStatus = (req, res) => {

  const { id } = req.params
  const { status } = req.body

  const sql = "UPDATE tickets SET status = ? WHERE id = ?"

  db.query(sql, [status, id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json({ message: "Status atualizado" })

  })
}

exports.updateTicket = (req, res) => {

  const { id } = req.params
  const { title, description } = req.body
  const user_id = req.userId

  const sql = "UPDATE tickets SET title = ?, description = ? WHERE id = ? AND user_id = ?"

  db.query(sql, [title, description, id, user_id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json({ message: "Chamado atualizado" })

  })
}

exports.deleteTicket = (req, res) => {

  const { id } = req.params
  const user_id = req.userId

  const sql = "DELETE FROM tickets WHERE id = ? AND user_id = ?"

  db.query(sql, [id, user_id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json({ message: "Chamado deletado" })

  })

}

exports.getStats = (req, res) => {

  const user_id = req.userId

  const sql = `
SELECT 
COUNT(*) as total,
SUM(status = 'aberto') as abertos,
SUM(status = 'em_andamento') as em_andamento,
SUM(status = 'resolvido') as resolvidos,
SUM(priority = 'critica') as criticos
FROM tickets
WHERE user_id = ?
`

  db.query(sql, [user_id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json(result[0])

  })

}

exports.getTicketById = (req, res) => {

  const { id } = req.params
  const user_id = req.userId

  const sql = "SELECT * FROM tickets WHERE id = ? AND user_id = ?"

  db.query(sql, [id, user_id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Chamado não encontrado" })
    }

    res.json(result[0])

  })

  exports.getStats = async (req, res) => {

  try {

    const open = await Ticket.countDocuments({ status: "aberto" })
    const inProgress = await Ticket.countDocuments({ status: "andamento" })
    const closed = await Ticket.countDocuments({ status: "fechado" })

    res.json({
      open,
      inProgress,
      closed
    })

  } catch (error) {

    res.status(500).json({ error: error.message })

  }

}

}