const express = require('express')
const routes = require('./routes')

const dotenv = require('dotenv')

require('./database')

const app = express()

app.use(express.json())
app.use(routes)

dotenv.config()

app.listen(process.env.PORT)