const express = require('express')
const dotenv = require('dotenv').config({ path: './config/config.env'})
const app = express()
const bootcamps = require('./src/routes/bootcamps')
const PORT = process.env.PORT ||  5000
const router = express.Router()

app.use('/api/v1/bootcamps', bootcamps)

app.listen(PORT, () => {
  console.log(`app is running in ${process.env.NODE_ENV} on port: ${PORT}`)
})

