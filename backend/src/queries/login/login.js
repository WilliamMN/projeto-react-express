const connection = require('../../db')

async function getUser(body) {
  return new Promise((resolve, reject) => {
    connection.getConnection().query(`select email, senha from user where email=? and senha=?;`,
    [body.email, body.senha],
    function (err, rows, fields) {
      if (err) {
        reject({check: false, row: err})
      } else {
        resolve({check: true, row: rows[0]})
      }
    })
  })
}

module.exports = { getUser }