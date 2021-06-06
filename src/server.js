const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const dotenv = require('dotenv')

require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

dotenv.config()

app.listen(process.env.PORT)