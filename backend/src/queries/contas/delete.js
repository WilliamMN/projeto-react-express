const connection = require('../../db')

async function deleteConta(id) {
  return new Promise((resolve, reject) => {
    connection.getConnection().query(`delete from contas where idcontas=?;`, [id], function (err, rows, fields) {
      if (err) {
        reject({check: false, row: err})
      } else {
        resolve({check: true, row: rows[0]})
      }
    })
  })
}

module.exports = { deleteConta }