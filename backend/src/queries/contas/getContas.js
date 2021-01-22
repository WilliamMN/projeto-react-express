const connection = require('../../db')

async function getContas() {
  return new Promise((resolve, reject) => {
    connection.getConnection().query(
      `select idcontas, nome, email, cpf, endereco, telefone from contas;`,
      function (err, rows, fields) {
        if (err) {
          reject({check: false, row: err})
        } else {
          resolve({check: true, row: rows})
        }
      })
  })
}

module.exports = { getContas }