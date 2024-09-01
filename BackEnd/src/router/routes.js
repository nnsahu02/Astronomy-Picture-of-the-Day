const express = require('express')
const router = express.Router()

const { astroCreate } = require('../controller/astroConreoller')

// GET API for geting the apod data
router.get('/apod', astroCreate)
router.get('/', (req, res) => { res.send("APOD server is up, _V : 2") })


module.exports = router