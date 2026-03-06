const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/authRoutes')
const ticketRoutes = require('./routes/ticketRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/tickets', ticketRoutes)

app.get('/', (req, res) => {
  res.send('API Help Desk rodando')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})