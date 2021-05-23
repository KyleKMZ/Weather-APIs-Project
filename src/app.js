const process = require('process')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const port = process.env.port || 3000

server = express()

// Configuring express paths and hbs view engine
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
server.use(express.static(publicPath))
server.set('view engine', 'hbs')
server.set('views', viewsPath)


server.get('', (req, res) => {

})

server.get('/about.html', (req, res) => {
    
})

server.get('/weather', (req, res) => {
    // Need to rewrite this after frontend is done
    // geocode(location, (error, {latitude, longitude, location} = {}) => {
    //     if (error) {
    //         return console.log(error)
    //     } 
    //     forecast(latitude, longitude, (error, forecastData) => {
    //         if (error) {
    //             return console.log(error)
    //         }
    
    //         console.log(location)
    //         console.log(forecastData)
    //     })
    // })
})




