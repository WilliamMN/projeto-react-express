const porta = 3003

const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const app  = express()

app.use(cors())
app.use(bodyParser.json())
app.use(routes)

app.listen(porta)