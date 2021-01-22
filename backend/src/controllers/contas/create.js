const connection = require('../../queries/contas/create')
module.exports = async (req, res, next) => {
    const result = await connection.createConta(req.body)
    if (!result.check) {
        return res.status(400).send(result.row)
    }
    return res.send()
}