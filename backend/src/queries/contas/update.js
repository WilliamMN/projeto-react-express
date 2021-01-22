const connection = require('../../db')

async function updateConta(body) {
  return new Promise((resolve, reject) => {
    connection.getConnection().query(`
    update contas
    set 
      nome=?,
      email=?,
      cpf=?,
      endereco=?,
      telefone=?
    where
      idcontas=?;`,
    [body.nome, body.email, body.cpf, body.endereco, body.telefone, body.idcontas],
     function (err, rows, fields) {
      if (err) {
        reject({ check: false, row: err })
      } else {
        resolve({ check: true, row: rows })
      }
    })
  })
}

module.exports = { updateConta }