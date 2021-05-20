const request = require('postman-request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=458ead5a4c267ba0d99631ea27f6a749&query=' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('HTTP Request Error!', undefined)
        } else if (response.body.error) {
            callback('Location Not Found!', undefined)
        } else {
            const temperature = response.body.current.temperature 
            const feelslike = response.body.current.feelslike
            const description = response.body.current.weather_descriptions[0]
            callback(undefined, {
                temperature: temperature,
                feelslike: feelslike,
                description: description
            })
        }
    })
    
}

module.exports = forecast