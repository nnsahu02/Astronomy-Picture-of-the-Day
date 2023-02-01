const mongoose = require('mongoose')

const astroSchema = new mongoose.Schema({
    date: {
        type: String,
        trim: true
    },
    explanation: {
        type: String,
        trim: true
    },
    copyright: {
        type: String,
        trim: true
    },
    hdurl: {
        type: String,
        trim: true
    },
    media_type: {
        type: String,
        trim: true
    },
    service_version: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('astroData', astroSchema)