const connection = require('../../queries/login/signup')
module.exports = async (req, res, next) => {
    const result = await  connection.setUser(req.body)
    
    if (!result.check) {
        return res.status(400).send(result.row)
    }
    return res.send()    
}