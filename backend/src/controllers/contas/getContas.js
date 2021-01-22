const connection = require('../../queries/contas/getContas')
module.exports = async (req, res, next) => {
    const result = await connection.getContas()
    if (!result.check) {
        return res.status(400).send(result.row)
    }
    return res.send(result.row)
}