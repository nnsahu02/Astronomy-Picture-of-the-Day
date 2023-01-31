const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const router = require('./router/routes')
const app = express()

app.use(express.json())

mongoose.set('strictQuery', true)

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected."))
    .catch(err => console.log(err))

app.use('/', router)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Express app is running on the PORT ${PORT}.`)
})