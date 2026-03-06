const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ma090506@',
  database: 'helpdesk'
})

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err)
    return
  }

  console.log('Conectado ao MySQL')
})

module.exports = connection