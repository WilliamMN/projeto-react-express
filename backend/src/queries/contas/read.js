const connection = require('../../db')

async function getConta(body) {
  return new Promise((resolve, reject) => {
    connection.getConnection().query(
      `select idcontas, nome, email, cpf, endereco, telefone from contas where cpf=?;`, [body],
      function (err, rows, fields) {
        if (err) {
          reject({check: false, row: err})
        } else {
          resolve({check: true, row: rows[0]})
        }
      })
    })
}

module.exports = { getConta }