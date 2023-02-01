const axios = require('axios')
const moment = require('moment')
const astroModel = require('../model/astroModel')
require('dotenv').config()

//geting the API_KEY from .env file.
const API_KEY = process.env.API_KEY

//===============================>API<==============================//
const astroCreate = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        //geting date from the query param.
        const date = req.query.date

        //getting the present date using moment library
        const now = "2020-10-02" //moment().format("YYYY-MM-DD")

        const dateData = date || now

        //checking in the DATABASE is Data with this date is present or not.
        const dbData = await astroModel.find({ date: dateData })
        if (dbData.length != 0) {
            return res.status(200).send({ data: dbData })
        }

        //making a axios call by providing the url with API_KEY and date.
        try {
            const axiosData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateData}`)

            //storing the necessary data from the axios call in a variable called "data"
            let data = axiosData.data

            //creating the data in our DATABASE that we got from axios call.
            await astroModel.create(data)

            if (axiosData) {
                // sending the data as respoce that we got from axios call.
                return res.status(200).send({ data: data })
            }

        } catch (err) {
            return res.status(500).send({ message: err.message })
        }

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { astroCreate }