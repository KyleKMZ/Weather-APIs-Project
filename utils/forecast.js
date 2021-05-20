const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=458ead5a4c267ba0d99631ea27f6a749&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, {body} ) => {
        if (error) {
            callback('Forecast: HTTP Request Error!', undefined)
        } else if (body.error) {
            callback('Forecast: Location Not Found!', undefined)
        } else {
            const temperature = body.current.temperature 
            const feelslike = body.current.feelslike
            const description = body.current.weather_descriptions[0]
            callback(undefined, description + ' throughout the day. The temperatue is ' + temperature + ' and feels like ' + feelslike + '.')
        }
    })
    
}

module.exports = forecast