const process = require('process')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const port = process.env.PORT || 3000

server = express()

// Configuring express paths and hbs view engine
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')
server.use(express.static(publicPath))
server.set('view engine', 'hbs')
server.set('views', viewsPath)


server.get('/', (req, res) => {
    res.render('index', {
        
    })
})

server.get('/about.html', (req, res) => {
    res.render('about', {

    })
})

server.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'Please provide a location.'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({ error })
        } 
        forecast(latitude, longitude, (error, api_data) => {
            if (error) {
                return res.send({ error })
            }
    
            res.send({
                location: location,
                description: api_data.description,
                description_img_src: api_data.description_img_src,
                fahrenheit_temp: api_data.fahrenheit_temp,
                fahrenheit_feels: api_data.fahrenheit_feels,
                celsius_temp: api_data.celsius_temp,
                celsius_feels: api_data.celsius_feels,
                kelvin_temp: api_data.kelvin_temp,
                kelvin_feels: api_data.kelvin_feels,
                humidity: api_data.humidity,
                precipitation: api_data.precipitation,
                pressure: api_data.pressure,
                w_speed: api_data.w_speed,
                w_degree: api_data.w_degree,
                w_direction: api_data.w_direction
            })
        })
    })

    // Use for testing frontend to not waste limited API calls
    // res.send({
    //     location: 'Yangon, Yangon, Myanmar',
    //     description: 'Slightly Cloudy',
    //     description_img_src: 'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png',
    //     fahrenheit_temp: '0',
    //     fahrenheit_feels: '0',
    //     celsius_temp: '0',
    //     celsius_feels: '0',
    //     kelvin_temp: '0',
    //     kelvin_feels: '0',
    //     humidity: '1004',
    //     precipitation: '104',
    //     pressure: '76',
    //     w_speed: '24',
    //     w_degree: '180',
    //     w_direction: 'S'
    // })
})

server.listen(port, () => {
    console.log('Server started at port: ' + port)
})




