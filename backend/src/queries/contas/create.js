const connection = require('../../db')

async function createConta(body) {
  return new Promise((resolve, reject) => {
    connection.getConnection().query(
      `insert into contas (nome, email, cpf, endereco, telefone, User_Id)
         values(?, ?, ?, ?, ?, 1);`,
      [body.nome, body.email, body.cpf, body.endereco, body.telefone],
      function (err, rows, fields) {
        if (err) {
          reject({ check: false, row: err })
        } else {
          resolve({ check: true, row: rows })
        }
      })
  })
}

module.exports = { createConta }