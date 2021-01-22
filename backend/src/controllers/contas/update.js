const connection = require('../../queries/contas/update')
module.exports = async (req, res, next) => {
    const result = await connection.updateConta(req.body)
    if (!result.check) {
        return res.status(400).send(result.row)
    }
    return res.send()
}