const connection = require('../../db')

async function setUser(body) {
  return new Promise((resolve, reject) => {
    connection.getConnection().query(`insert into user (nome, email, senha) values(?, ?, ?);`,
    [body.nome, body.email, body.senha],
    function (err, rows, fields) {
      if (err) {
        reject({check: false, row: err})
      } else {
        resolve({check: true, row: rows[0]})
      }
    })
  })
}

module.exports = { setUser }