const process = require('process')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length < 3) return console.log('Please provide location as argument!')

const location = process.argv[2]
geocode(location, (error, {latitude, longitude, location} = {}) => {
    if (error) {
        return console.log(error)
    } 
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
    })
})

