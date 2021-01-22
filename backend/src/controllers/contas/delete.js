const connection = require('../../queries/contas/delete')
module.exports = async (req, res, next) => {
    const result = await connection.deleteConta(req.params.id)
    if (!result.check) {
        return res.status(400).send(result.row)
    }
    return res.send(result.row)
}