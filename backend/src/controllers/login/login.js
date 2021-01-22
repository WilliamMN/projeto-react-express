const connection = require('../../queries/login/login')
module.exports = async (req, res, next) => {
    const result = await connection.getUser(req.body)
    if (!result.check) {
        res.status(400).send(result.row)
    }
    res.send()    
}