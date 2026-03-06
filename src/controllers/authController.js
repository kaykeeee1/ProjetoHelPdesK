const db = require('../models/db')
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {

  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Preencha todos os campos" })
  }

  try {

    const hashedPassword = await bcrypt.hash(password, 10)

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"

    db.query(sql, [name, email, hashedPassword], (err, result) => {

      if (err) {
        return res.status(500).json(err)
      }

      res.json({
        message: "Usuário cadastrado com sucesso"
      })

    })

  } catch (error) {
    res.status(500).json(error)
  }

}

exports.login = (req, res) => {

  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Preencha todos os campos" })
  }

  const sql = "SELECT * FROM users WHERE email = ?"

  db.query(sql, [email], async (err, result) => {

    if (err) {
      return res.status(500).json(err)
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Usuário não encontrado" })
    }

    const user = result[0]

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: "Senha incorreta" })
    }

    res.json({
      message: "Login realizado com sucesso",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })

  })

}