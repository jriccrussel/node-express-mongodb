require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const mongo_string = process.env.DATABASE_URL

mongoose.connect(mongo_string)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('database connected')
})

const app = express()
app.use(express.json())

const routes = require('./routes/routes')

app.use('/api', routes)

app.listen(3000, () => {
    console.log(`server started at ${3000}`)
})