const db = require('../models/db')

exports.createTicket = (req, res) => {

  const { title, description, user_id } = req.body

  const sql = "INSERT INTO tickets (title, description, user_id) VALUES (?, ?, ?)"

  db.query(sql, [title, description, user_id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json({
      message: "Chamado criado com sucesso"
    })

  })

}

exports.getTickets = (req, res) => {

  const sql = "SELECT * FROM tickets"

  db.query(sql, (err, result) => {

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

    res.json({
      message: "Status do chamado atualizado"
    })

  })

}