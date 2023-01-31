const express = require('express')
const router = express.Router()

const { astroCreate } = require('../controller/astroConreoller')

// GET API for geting the apod data
router.get('/apod', astroCreate)


module.exports = router