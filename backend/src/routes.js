const router = require('express').Router()

const login = require("./controllers/login/login")
const signup = require("./controllers/login/signup")

const update = require("./controllers/contas/update")
const read = require("./controllers/contas/read")
const getContas = require('./controllers/contas/getContas')
const deleete = require("./controllers/contas/delete")
const create = require("./controllers/contas/create")

router.post('/login', login)
router.post('/signup', signup)

router.put('/update', update)
router.get('/read/:id', read)
router.get('/contas', getContas)
router.delete('/delete/:id', deleete)
router.post('/create', create)

module.exports = router