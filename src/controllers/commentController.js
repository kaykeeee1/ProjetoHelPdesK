const db = require('../models/db')

exports.addComment = (req, res) => {

  const { ticket_id, comment } = req.body
  const user_id = req.userId

  const sql = "INSERT INTO comments (ticket_id, user_id, comment) VALUES (?, ?, ?)"

  db.query(sql, [ticket_id, user_id, comment], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json({
      message: "Comentário adicionado"
    })

  })

}

exports.getComments = (req, res) => {

  const { ticket_id } = req.params

  const sql = `
    SELECT comments.*, users.name 
    FROM comments
    JOIN users ON users.id = comments.user_id
    WHERE ticket_id = ?
    ORDER BY created_at ASC
  `

  db.query(sql, [ticket_id], (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    res.json(result)

  })

}