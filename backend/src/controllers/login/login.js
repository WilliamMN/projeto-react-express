const connection = require('../../queries/login/login')
module.exports = async (req, res, next) => {
    const result = await connection.getUser(req.body)
    if (!result.check) {
        return res.status(400).send(result.row)
    }
    return res.send()    
}