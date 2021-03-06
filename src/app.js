require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV, CLIENT_ORIGIN } = require('./config')

const errorHandler = require('./error-handler')
const StockRouter = require('./stock-em/stock-em-router')
const app = express()

const morganOption = (NODE_ENV === 'production') ? 'tiny': 'common';
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
// app.use(
//     cors({
//         origin: CLIENT_ORIGIN
//     })
// );

app.use('/api/stock-em',StockRouter)

app.use(errorHandler)

module.exports = app